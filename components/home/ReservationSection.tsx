'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

export default function ReservationSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08], { clamp: true })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8], { clamp: true })

  return (
    <section ref={containerRef} className="section-padding relative overflow-hidden">
      <motion.div
        style={{ scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/anil-sharma-_uWcGe93l6w-unsplash.jpg"
          alt="Restaurant"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container-custom relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-subtitle mb-4"
          >
            Why Sri Mayyia
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6"
          >
            Not Just Caterers. <span className="gradient-text">Cultural Custodians</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Sri Mayyia is not simply a service provider—we are a responsibility taker. Every event we cater becomes a reflection of your values, your traditions, and your hospitality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 max-w-5xl mx-auto"
          >
            {[
              { title: 'Legacy Trust', desc: 'Three generations of culinary mastery' },
              { title: 'Religious Compliance', desc: 'Deep knowledge of ritualistic dietary needs' },
              { title: 'Logistical Mastery', desc: 'Seamless execution at any scale' },
              { title: 'Premium Customisation', desc: 'Menus tailored to taste, culture, and occasion' },
              { title: 'Uncompromised Purity', desc: 'No compromise on quality, hygiene, or devotion' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="premium-card text-center p-6 min-h-[140px] flex flex-col justify-center"
              >
                <h3 className="text-lg font-playfair font-bold text-white mb-2 break-words leading-tight">{item.title}</h3>
                <p className="text-sm text-gray-400 break-words leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gold-400 font-semibold mb-8"
          >
            This is why clients don't just book us for events. They bring us in to safeguard their most meaningful milestones.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="btn-primary text-lg px-12 py-5">
                Schedule Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
