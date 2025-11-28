import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { X } from 'lucide-react';

/**
 * SphereImageGrid - Interactive 3D Image Sphere Component
 *
 * A React TypeScript component that displays images arranged in a 3D sphere layout.
 * Images are distributed using Fibonacci sphere distribution for optimal coverage.
 * Supports drag-to-rotate, momentum physics, auto-rotation, and modal image viewing.
 *
 * Features:
 * - 3D sphere layout with Fibonacci distribution for even image placement
 * - Smooth drag-to-rotate interaction with momentum physics
 * - Auto-rotation capability with configurable speed
 * - Dynamic scaling based on position and visibility
 * - Collision detection to prevent image overlap
 * - Modal view for enlarged image display
 * - Touch support for mobile devices
 * - Customizable appearance and behavior
 * - Performance optimized with proper z-indexing and visibility culling
 *
 * Usage:
 * ```tsx
 * <SphereImageGrid
 *   images={imageArray}
 *   containerSize={600}
 *   sphereRadius={200}
 *   autoRotate={true}
 *   dragSensitivity={0.8}
 * />
 * ```
 */

// ==========================================
// TYPES & INTERFACES
// ==========================================

export interface Position3D {
  x: number;
  y: number;
  z: number;
}

export interface SphericalPosition {
  theta: number;  // Azimuth angle in degrees
  phi: number;    // Polar angle in degrees
  radius: number; // Distance from center
}

export interface WorldPosition extends Position3D {
  scale: number;
  zIndex: number;
  isVisible: boolean;
  fadeOpacity: number;
  originalIndex: number;
}

export interface ImageData {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface SphereImageGridProps {
  images?: ImageData[];
  containerSize?: number;
  sphereRadius?: number;
  dragSensitivity?: number;
  momentumDecay?: number;
  maxRotationSpeed?: number;
  baseImageScale?: number;
  hoverScale?: number;
  perspective?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  className?: string;
}

interface RotationState {
  x: number;
  y: number;
  z: number;
}

interface VelocityState {
  x: number;
  y: number;
}

interface MousePosition {
  x: number;
  y: number;
}

// ==========================================
// CONSTANTS & CONFIGURATION
// ==========================================

const SPHERE_MATH = {
  degreesToRadians: (degrees: number): number => degrees * (Math.PI / 180),
  radiansToDegrees: (radians: number): number => radians * (180 / Math.PI),
  sphericalToCartesian: (radius: number, theta: number, phi: number): Position3D => ({
    x: radius * Math.sin(phi) * Math.cos(theta),
    y: radius * Math.cos(phi),
    z: radius * Math.sin(phi) * Math.sin(theta)
  }),
  calculateDistance: (pos: Position3D, center: Position3D = { x: 0, y: 0, z: 0 }): number => {
    const dx = pos.x - center.x;
    const dy = pos.y - center.y;
    const dz = pos.z - center.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  },
  normalizeAngle: (angle: number): number => {
    while (angle > 180) angle -= 360;
    while (angle < -180) angle += 360;
    return angle;
  }
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const SphereImageGrid: React.FC<SphereImageGridProps> = ({
  images = [],
  containerSize = 400,
  sphereRadius = 200,
  dragSensitivity = 0.5,
  momentumDecay = 0.95,
  maxRotationSpeed = 5,
  baseImageScale = 0.12,
  hoverScale = 1.2,
  perspective = 1000,
  autoRotate = false,
  autoRotateSpeed = 0.3,
  className = ''
}) => {
  // ==========================================
  // STATE & REFS
  // ==========================================
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null); // Only for modal - doesn't affect animation
  const [imagePositions, setImagePositions] = useState<SphericalPosition[]>([]);
  
  // ALL animation state in refs - NO React state to avoid re-renders
  const rotationRef = useRef<RotationState>({ x: 15, y: 15, z: 0 });
  const velocityRef = useRef<VelocityState>({ x: 0, y: 0 });
  const isDraggingRef = useRef<boolean>(false);
  const hoveredIndexRef = useRef<number | null>(null);
  const loadedImagesRef = useRef<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef<MousePosition>({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);
  const imageElementsRef = useRef<Map<number, HTMLDivElement>>(new Map());

  // ==========================================
  // COMPUTED VALUES
  // ==========================================
  const actualSphereRadius = sphereRadius || containerSize * 0.5;
  const baseImageSize = containerSize * baseImageScale;

  // ==========================================
  // UTILITY FUNCTIONS
  // ==========================================
  const generateSpherePositions = useCallback((): SphericalPosition[] => {
    const positions: SphericalPosition[] = [];
    const imageCount = images.length;

    // Use Fibonacci sphere distribution for even coverage
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = 2 * Math.PI / goldenRatio;

    for (let i = 0; i < imageCount; i++) {
      // Fibonacci sphere distribution
      const t = i / imageCount;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;

      // Convert to degrees
      let phi = inclination * (180 / Math.PI);
      let theta = (azimuth * (180 / Math.PI)) % 360;

      // Map to fuller vertical range
      phi = 15 + (phi / 180) * 150;

      positions.push({
        theta: theta,
        phi: phi,
        radius: actualSphereRadius
      });
    }

    return positions;
  }, [images.length, actualSphereRadius]);

  const calculateWorldPositions = useCallback((currentRotation: RotationState): WorldPosition[] => {
    const positions = imagePositions.map((pos, index) => {
      // Apply rotation using proper 3D rotation matrices
      const thetaRad = SPHERE_MATH.degreesToRadians(pos.theta);
      const phiRad = SPHERE_MATH.degreesToRadians(pos.phi);
      const rotXRad = SPHERE_MATH.degreesToRadians(currentRotation.x);
      const rotYRad = SPHERE_MATH.degreesToRadians(currentRotation.y);

      // Initial position on sphere
      let x = pos.radius * Math.sin(phiRad) * Math.cos(thetaRad);
      let y = pos.radius * Math.cos(phiRad);
      let z = pos.radius * Math.sin(phiRad) * Math.sin(thetaRad);

      // Apply Y-axis rotation (horizontal drag)
      const x1 = x * Math.cos(rotYRad) + z * Math.sin(rotYRad);
      const z1 = -x * Math.sin(rotYRad) + z * Math.cos(rotYRad);
      x = x1;
      z = z1;

      // Apply X-axis rotation (vertical drag)
      const y2 = y * Math.cos(rotXRad) - z * Math.sin(rotXRad);
      const z2 = y * Math.sin(rotXRad) + z * Math.cos(rotXRad);
      y = y2;
      z = z2;

      const worldPos: Position3D = { x, y, z };

      // Calculate visibility with smooth fade zones
      const fadeZoneStart = -10;  // Start fading out
      const fadeZoneEnd = -30;    // Completely hidden
      const isVisible = worldPos.z > fadeZoneEnd;

      // Calculate fade opacity based on Z position
      let fadeOpacity = 1;
      if (worldPos.z <= fadeZoneStart) {
        // Linear fade from 1 to 0 as Z goes from fadeZoneStart to fadeZoneEnd
        fadeOpacity = Math.max(0, (worldPos.z - fadeZoneEnd) / (fadeZoneStart - fadeZoneEnd));
      }

      // Check if this image originated from a pole position
      const isPoleImage = pos.phi < 30 || pos.phi > 150; // Images from extreme angles

      // Calculate distance from center for scaling (in 2D screen space)
      const distanceFromCenter = Math.sqrt(worldPos.x * worldPos.x + worldPos.y * worldPos.y);
      const maxDistance = actualSphereRadius;
      const distanceRatio = Math.min(distanceFromCenter / maxDistance, 1);

      // Scale based on distance from center - be more forgiving for pole images
      const distancePenalty = isPoleImage ? 0.4 : 0.7; // Less penalty for pole images
      const centerScale = Math.max(0.3, 1 - distanceRatio * distancePenalty);

      // Also consider Z-depth for additional scaling
      const depthScale = (worldPos.z + actualSphereRadius) / (2 * actualSphereRadius);
      const scale = centerScale * Math.max(0.5, 0.8 + depthScale * 0.3);

      return {
        ...worldPos,
        scale,
        zIndex: Math.round(1000 + worldPos.z),
        isVisible,
        fadeOpacity,
        originalIndex: index
      };
    });

    // Collision detection disabled for smooth animation - can re-enable later if needed
    // Running collision detection every frame causes performance issues
    // If needed, run collision detection only once every N frames using frameCountRef
    return positions;
  }, [imagePositions, actualSphereRadius, baseImageSize]);

  const clampRotationSpeed = useCallback((speed: number): number => {
    return Math.max(-maxRotationSpeed, Math.min(maxRotationSpeed, speed));
  }, [maxRotationSpeed]);

  // ==========================================
  // PHYSICS & MOMENTUM
  // ==========================================
  // No need to sync - we're using refs directly now

  // Direct DOM update function - ONLY GPU-friendly properties (transform, opacity)
  // NO left/top/width/height to avoid layout recalculations
  const updatePositionsInDOM = useCallback(() => {
    const currentRotation = rotationRef.current;
    const worldPositions = calculateWorldPositions(currentRotation);

    worldPositions.forEach((position, index) => {
      const element = imageElementsRef.current.get(index);
      if (!element || !position.isVisible) {
        if (element) element.style.display = 'none';
        return;
      }

      // Hover state from ref (no React state)
      const isHovered = hoveredIndexRef.current === index;

      // All nodes keep the same base size; scaling is only via transform
      const baseScale = position.scale;
      const hoverScale = isHovered ? 1.2 : 1;
      const finalScale = baseScale * hoverScale;

      // Image loaded?
      const isImageLoaded = loadedImagesRef.current.has(index);
      const finalOpacity = position.fadeOpacity * (isImageLoaded ? 1 : 0);

      // ONLY touch transform, opacity, zIndex, display - NO layout properties
      element.style.opacity = `${finalOpacity}`;
      element.style.zIndex = `${position.zIndex}`;
      element.style.display = 'block';

      // Move relative to center: first translate(-50%, -50%) to center,
      // then offset by x/y in pixels and scale - ALL in transform (GPU-friendly)
      element.style.transform =
        `translate3d(-50%, -50%, 0) translate3d(${position.x}px, ${position.y}px, 0) scale(${finalScale})`;
    });
  }, [calculateWorldPositions]);

  const frameCountRef = useRef<number>(0);
  
  const updateMomentum = useCallback(() => {
    // Check dragging via ref - NO state access
    if (isDraggingRef.current) return;

    const currentVelocity = velocityRef.current;
    const newVelocity = {
      x: currentVelocity.x * momentumDecay,
      y: currentVelocity.y * momentumDecay
    };

    // Stop animation if velocity is too low and auto-rotate is off
    if (!autoRotate && Math.abs(newVelocity.x) < 0.01 && Math.abs(newVelocity.y) < 0.01) {
      velocityRef.current = { x: 0, y: 0 };
      // NO setState - just update ref
    } else {
      velocityRef.current = newVelocity;
      // NO setState - just update ref
    }

    const currentRotation = rotationRef.current;
    let newY = currentRotation.y;

    // Add auto-rotation - smooth continuous rotation without gaps
    if (autoRotate) {
      // Continuous rotation - always increment to prevent gaps
      newY += autoRotateSpeed;
    }

    // Add momentum-based rotation
    newY += clampRotationSpeed(newVelocity.y);

    const newRotation = {
      x: SPHERE_MATH.normalizeAngle(currentRotation.x + clampRotationSpeed(newVelocity.x)),
      y: SPHERE_MATH.normalizeAngle(newY),
      z: currentRotation.z
    };
    
    // CRITICAL: Only update ref - NO setState to avoid re-renders
    rotationRef.current = newRotation;
    
    // Update DOM directly every frame - bypass React render cycle completely
    updatePositionsInDOM();
  }, [momentumDecay, clampRotationSpeed, autoRotate, autoRotateSpeed, updatePositionsInDOM]);

  // ==========================================
  // EVENT HANDLERS
  // ==========================================
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    // Only update refs - NO setState
    isDraggingRef.current = true;
    velocityRef.current = { x: 0, y: 0 };
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Check via ref - NO state access
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;

    const rotationDelta = {
      x: -deltaY * dragSensitivity,
      y: deltaX * dragSensitivity
    };

    const newRotation = {
      x: SPHERE_MATH.normalizeAngle(rotationRef.current.x + clampRotationSpeed(rotationDelta.x)),
      y: SPHERE_MATH.normalizeAngle(rotationRef.current.y + clampRotationSpeed(rotationDelta.y)),
      z: rotationRef.current.z
    };
    
    // Only update ref - NO setState
    rotationRef.current = newRotation;

    // Update velocity for momentum
    const newVel = {
      x: clampRotationSpeed(rotationDelta.x),
      y: clampRotationSpeed(rotationDelta.y)
    };
    // Only update ref - NO setState
    velocityRef.current = newVel;

    lastMousePos.current = { x: e.clientX, y: e.clientY };
    updatePositionsInDOM();
  }, [dragSensitivity, clampRotationSpeed, updatePositionsInDOM]);

  const handleMouseUp = useCallback(() => {
    // Only update ref - NO setState
    isDraggingRef.current = false;
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    // Only update refs - NO setState
    isDraggingRef.current = true;
    velocityRef.current = { x: 0, y: 0 };
    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    // Check via ref - NO state access
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const touch = e.touches[0];

    const deltaX = touch.clientX - lastMousePos.current.x;
    const deltaY = touch.clientY - lastMousePos.current.y;

    const rotationDelta = {
      x: -deltaY * dragSensitivity,
      y: deltaX * dragSensitivity
    };

    const newRotation = {
      x: SPHERE_MATH.normalizeAngle(rotationRef.current.x + clampRotationSpeed(rotationDelta.x)),
      y: SPHERE_MATH.normalizeAngle(rotationRef.current.y + clampRotationSpeed(rotationDelta.y)),
      z: rotationRef.current.z
    };
    
    // Only update ref - NO setState
    rotationRef.current = newRotation;

    const newVel = {
      x: clampRotationSpeed(rotationDelta.x),
      y: clampRotationSpeed(rotationDelta.y)
    };
    // Only update ref - NO setState
    velocityRef.current = newVel;

    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
    updatePositionsInDOM();
  }, [dragSensitivity, clampRotationSpeed, updatePositionsInDOM]);

  const handleTouchEnd = useCallback(() => {
    // Only update ref - NO setState
    isDraggingRef.current = false;
  }, []);

  // ==========================================
  // EFFECTS & LIFECYCLE
  // ==========================================
  useEffect(() => {
    // Mount immediately - don't wait for images to load
    setIsMounted(true);
  }, []);

  // Intersection Observer - only start when section is in view
  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { 
        threshold: 0.2, // Start when 20% visible
        rootMargin: '50px' // Start slightly before fully in view
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isMounted]);

  useEffect(() => {
    setImagePositions(generateSpherePositions());
  }, [generateSpherePositions]);

  // Initial DOM update after mount
  useEffect(() => {
    if (isMounted && imagePositions.length > 0) {
      updatePositionsInDOM();
    }
  }, [isMounted, imagePositions.length, updatePositionsInDOM]);

  useEffect(() => {
    // Only start animation when section is in view
    if (!isMounted || images.length === 0 || !isInView) {
      // Stop animation if not in view
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
      return;
    }
    
    let isRunning = true;
    
    // Start animation when section comes into view
    const animate = () => {
      if (!isRunning || !isInView) return;
      updateMomentum();
      animationFrame.current = requestAnimationFrame(animate);
    };

    // Start animation when in view
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      isRunning = false;
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
    };
  }, [isMounted, images.length, isInView, updateMomentum]);

  useEffect(() => {
    if (!isMounted) return;
    const container = containerRef.current;
    if (!container) return;

    // Mouse events
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Touch events
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMounted, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  // ==========================================
  // RENDER HELPERS
  // ==========================================
  // Initial world positions for first render only
  const initialWorldPositions = useMemo(() => calculateWorldPositions(rotationRef.current), [calculateWorldPositions]);

  const renderImageNode = useCallback((image: ImageData, index: number) => {
    // Always render all images - visibility handled by DOM updates
    const position = initialWorldPositions[index] || { x: 0, y: 0, z: 0, scale: 0.1, zIndex: 0, isVisible: false, fadeOpacity: 0, originalIndex: index };
    
    const imageSize = baseImageSize * (position.scale || 0.1);
    // Check hover via ref - NO state access
    const isHovered = hoveredIndexRef.current === index;
    const finalScale = isHovered ? Math.min(1.2, 1.2 / (position.scale || 1)) : 1;

    return (
      <div
        key={image.id}
        ref={(el) => {
          if (el) {
            imageElementsRef.current.set(index, el);
          } else {
            imageElementsRef.current.delete(index);
          }
        }}
        className="absolute cursor-pointer select-none"
        style={{
          // Fixed size and position - NEVER changed during animation
          width: `${baseImageSize}px`,
          height: `${baseImageSize}px`,
          left: '50%',
          top: '50%',
          // Only transform, opacity, zIndex, display will be updated from JS
          opacity: 0,
          transform: 'translate3d(-50%, -50%, 0) scale(0)',
          zIndex: 1,
          willChange: 'transform, opacity',
          transition: 'none',
          display: 'none'
        }}
        onMouseEnter={() => { hoveredIndexRef.current = index; }}
        onMouseLeave={() => { hoveredIndexRef.current = null; }}
        onClick={() => setSelectedImage(image)}
      >
        <div 
          className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/30 hover:border-gold-400/80"
          style={{
            willChange: 'transform, opacity',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            draggable={false}
            loading={index < 15 ? 'eager' : 'lazy'}
            style={{
              opacity: 0, // Start hidden - will be updated directly in DOM
              display: 'block',
              willChange: 'opacity',
              // Remove heavy CSS effects for smooth animation
              // No box-shadow, filter, or backdrop-filter during animation
            }}
            onError={(e) => {
              console.warn(`Failed to load sphere image ${index}:`, image.src);
              const target = e.target as HTMLImageElement;
              target.style.opacity = '0';
            }}
            onLoad={(e) => {
              // Update opacity directly in DOM - NO React state update to avoid re-renders
              const target = e.target as HTMLImageElement;
              loadedImagesRef.current.add(index);
              
              // Fade in with staggered delay - direct DOM manipulation
              setTimeout(() => {
                target.style.opacity = '1';
              }, index * 30); // 30ms delay between each image (faster)
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    );
  }, [initialWorldPositions, baseImageSize, containerSize]);

  const renderSpotlightModal = () => {
    if (!selectedImage) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={() => setSelectedImage(null)}
        style={{
          animation: 'fadeIn 0.3s ease-out'
        }}
      >
        <div
          className="bg-dark-800 rounded-xl max-w-md w-full overflow-hidden border border-gold-400/20"
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: 'scaleIn 0.3s ease-out'
          }}
        >
          <div className="relative aspect-square">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full text-white flex items-center justify-center hover:bg-black/70 transition-all cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
          {(selectedImage.title || selectedImage.description) && (
            <div className="p-6">
              {selectedImage.title && (
                <h3 className="text-xl font-bold mb-2 text-white">{selectedImage.title}</h3>
              )}
              {selectedImage.description && (
                <p className="text-gray-300">{selectedImage.description}</p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  // ==========================================
  // EARLY RETURNS
  // ==========================================
  if (!isMounted) {
    return (
      <div
        className="bg-gray-100 rounded-lg animate-pulse flex items-center justify-center"
        style={{ width: containerSize, height: containerSize }}
      >
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!images.length) {
    return (
      <div
        className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
        style={{ width: containerSize, height: containerSize }}
      >
        <div className="text-gray-400 text-center">
          <p>No images provided</p>
          <p className="text-sm">Add images to the images prop</p>
        </div>
      </div>
    );
  }

  // ==========================================
  // MAIN RENDER
  // ==========================================
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
      <div
        ref={containerRef}
        className={`relative select-none cursor-grab active:cursor-grabbing ${className}`}
        style={{
          width: containerSize,
          height: containerSize,
          perspective: `${perspective}px`,
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="relative w-full h-full" style={{ zIndex: 10 }}>
          {images.map((image, index) => renderImageNode(image, index))}
        </div>
      </div>
      {renderSpotlightModal()}
    </>
  );
};

export default SphereImageGrid;
