'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowDown, FiPlay, FiPause } from 'react-icons/fi'
import Image from 'next/image'

const heroImages = [
  '/images/anil-sharma-_uWcGe93l6w-unsplash.jpg',
  '/images/anil-sharma-DKnqF7U2Aus-unsplash.jpg',
  '/images/anil-sharma-fImNmaN73zo-unsplash.jpg',
  '/images/anil-sharma-oNXMhtKKFec-unsplash.jpg',
  '/images/anil-sharma-ynt5uoi4bTE-unsplash.jpg',
  '/images/darko-trajkovic-Kh6iEyCS-Mg-unsplash.jpg',
]

const parallaxImages = [
  '/images/jarren-rocks-nVFp3nTWAbA-unsplash.jpg',
  '/images/alexandra-bellanger-dHeKcZ0a-xY-unsplash.jpg',
]

export default function PremiumHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Optimized scroll effects - reduced complexity and improved performance
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15], { clamp: true }) // Reduced scale for better performance
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [1, 1], { clamp: true }) // Keep video always visible
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100], { clamp: true }) // Reduced movement
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0], { clamp: true })
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -150], { clamp: true }) // Reduced parallax
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -100], { clamp: true }) // Reduced parallax
  const parallaxScale1 = useTransform(scrollYProgress, [0, 1], [1, 1.05], { clamp: true }) // Reduced scale
  const parallaxScale2 = useTransform(scrollYProgress, [0, 1], [1, 1.04], { clamp: true }) // Reduced scale

  // Video controls
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Video Background Layer - Only Video #15 */}
      <motion.div
        style={{ scale: backgroundScale, opacity: backgroundOpacity }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setVideoLoaded(true)}
          onPlay={() => setIsVideoPlaying(true)}
          onPause={() => setIsVideoPlaying(false)}
        >
          <source src="/images/1000141815.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </motion.div>

      {/* Parallax Image Layers - Optimized */}
      <motion.div
        style={{ y: parallaxY1, scale: parallaxScale1 }}
        className="absolute top-20 right-10 w-64 h-96 rounded-2xl overflow-hidden opacity-60 z-[1] hidden lg:block will-change-transform"
      >
        <Image
          src={parallaxImages[0]}
          alt="Parallax"
          fill
          sizes="(max-width: 1024px) 0vw, 256px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: parallaxY2, scale: parallaxScale2 }}
        className="absolute bottom-20 left-10 w-56 h-80 rounded-2xl overflow-hidden opacity-50 z-[1] hidden lg:block will-change-transform"
      >
        <Image
          src={parallaxImages[1]}
          alt="Parallax"
          fill
          sizes="(max-width: 1024px) 0vw, 224px"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </motion.div>

      {/* Animated Image Gallery (Floating) - Enhanced visibility */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {heroImages.slice(0, 3).map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.15, 1],
              rotate: [-10, 10, -10],
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              delay: index * 1.5,
              ease: 'easeInOut',
            }}
            className="absolute will-change-transform hidden md:block"
            style={{
              left: `${15 + index * 30}%`,
              top: `${25 + index * 20}%`,
              width: '220px',
              height: '280px',
            }}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={img}
                alt={`Gallery ${index}`}
                fill
                sizes="(max-width: 1280px) 0vw, 220px"
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? undefined : 'lazy'}
                onError={(e) => {
                  console.error(`Failed to load hero image ${index}:`, img);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 container-custom text-center text-white will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="text-gold-400 font-montserrat text-xs md:text-sm uppercase tracking-[0.3em] font-light">
            Welcome To
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-great-vibes font-normal mb-4 leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="block text-white"
          >
            Sri Mayyia
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="gradient-text block"
          >
            Caterers
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 font-montserrat font-light leading-relaxed"
        >
          Where culinary artistry meets timeless elegance. Experience a symphony of flavors 
          crafted by master chefs in an atmosphere of refined luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            <Link href="/booking" className="btn-primary">
              Reserve Table
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <Link href="/menu" className="btn-secondary">
              View Menu
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Video Control Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={toggleVideo}
        className="absolute bottom-24 right-8 z-20 w-14 h-14 glass border border-gold-400/20 rounded-full flex items-center justify-center text-gold-400 hover:bg-gold-400/10 hover:border-gold-400/40 transition-all duration-300"
        aria-label="Toggle video"
      >
        {isVideoPlaying ? (
          <FiPause className="w-6 h-6" />
        ) : (
          <FiPlay className="w-6 h-6" />
        )}
      </motion.button>


      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 w-32 h-32 opacity-10 hidden lg:block z-[1]"
      >
        <div className="w-full h-full border border-gold-400 rounded-full" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-20 w-24 h-24 opacity-10 hidden lg:block z-[1]"
      >
        <div className="w-full h-full border border-gold-400 rounded-full" />
      </motion.div>
    </section>
  )
}
