'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ContactHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/anil-sharma-ynt5uoi4bTE-unsplash.jpg"
          alt="Contact Us"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
      </div>
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-subtitle mb-4">Contact Us</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
            Let's Create Something <span className="gradient-text">Memorable</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're planning a wedding, a sacred ritual, or a private celebration, we'd be honoured to be part of your journey.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
