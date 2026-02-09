'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import LaserFlow from '@/components/ui/LaserFlow'

export default function LaserFlowSection() {
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Mount immediately since this section is right after hero
    setIsMounted(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[42vh] bg-beige overflow-visible z-10"
    >
      {isMounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute inset-0"
        >
          <LaserFlow
            className=""
            style={{}}
            dpr={typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1}
            horizontalBeamOffset={0.0}
            verticalBeamOffset={0.65}
            color="#C7A24B"
            clearColor="#F7F1E6"
            wispDensity={2.2}
            fogIntensity={0.30}
            wispIntensity={3.0}
            flowSpeed={0.45}
            verticalSizing={6.0}
            horizontalSizing={1.4}
            flowStrength={0.32}
            decay={1.8}
            falloffStart={1.8}
            fogFallSpeed={1.0}
          />
        </motion.div>
      )}
      {/* Fade out the boundary so no visible line above Our Story */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: '32px',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(247,241,230,0.6) 50%, #F7F1E6 100%)',
        }}
      />
    </section>
  )
}

