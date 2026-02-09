'use client'

import { motion } from 'framer-motion'

export default function MapSection() {
  return (
    <section className="section-padding bg-beige relative overflow-hidden">
      <div className="container-custom flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center premium-card max-w-md w-full"
        >
          <h3 className="text-2xl font-playfair text-charcoal mb-4">Find Us</h3>
          <p className="text-muted mb-6">
            Interactive map integration can be added here (Google Maps, Mapbox, etc.)
          </p>
          <div className="text-brandGold font-semibold">
            Bengaluru, Karnataka — Pan-South India & Select Destinations
          </div>
        </motion.div>
      </div>
    </section>
  )
}
