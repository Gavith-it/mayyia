'use client'

import { motion } from 'framer-motion'
import LaserFlow from '@/components/ui/LaserFlow'

export default function LaserFlowTransition() {
  return (
    <section
      className="relative w-full h-[70vh] overflow-visible bg-gradient-to-b from-black via-black to-dark-900 -mb-12 z-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 left-1/2 -translate-x-1/2"
        style={{
          margin: 0,
          padding: 0,
          background: 'transparent',
          maxWidth: 'none',
        }}
      >
        <LaserFlow
          className=""
          style={{}}
          dpr={typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1}
          horizontalBeamOffset={0.0}
          verticalBeamOffset={0.55}
          color="#F4D03F"
          wispDensity={2.5}
          fogIntensity={1.0}
          wispIntensity={9.0}
          flowSpeed={0.5}
          verticalSizing={8.0}
          horizontalSizing={2.2}
          flowStrength={0.6}
          decay={1.8}
          falloffStart={1.8}
          fogFallSpeed={1.1}
        />
      </motion.div>
    </section>
  )
}
