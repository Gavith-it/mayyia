'use client'

import { motion } from 'framer-motion'

export default function MapSection() {
  return (
    <section className="h-[500px] bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center premium-card max-w-md"
        >
          <h3 className="text-2xl font-playfair text-white mb-4">Find Us</h3>
          <p className="text-gray-400 mb-6">
            Interactive map integration can be added here (Google Maps, Mapbox, etc.)
          </p>
          <div className="text-gold-400 font-semibold">
            123 Premium Avenue, Luxury District
          </div>
        </motion.div>
      </div>
    </section>
  )
}
