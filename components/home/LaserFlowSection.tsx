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
      className="
        relative w-full
        h-[55vh]
        bg-black
        overflow-visible
        z-10
      "
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
            color="#F4D03F"
            wispDensity={2.5}
            fogIntensity={1.0}
            wispIntensity={9.0}
            flowSpeed={0.5}
            verticalSizing={6.0}
            horizontalSizing={1.2}
            flowStrength={0.6}
            decay={1.8}
            falloffStart={1.8}
            fogFallSpeed={1.1}
          />
        </motion.div>
      )}
    </section>
  )
}

