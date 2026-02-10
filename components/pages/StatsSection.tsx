'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUsers, FiCalendar, FiAward, FiHeart } from 'react-icons/fi'

const stats = [
  { icon: FiUsers, value: '10K+', label: 'Events Catered', color: 'from-gold-400 to-gold-500' },
  { icon: FiCalendar, value: '60+', label: 'Years of Legacy', color: 'from-gold-500 to-gold-600' },
  { icon: FiAward, value: '50-10K', label: 'Guests Per Event', color: 'from-gold-400 to-gold-500' },
  { icon: FiHeart, value: '3', label: 'Generations of Excellence', color: 'from-gold-500 to-gold-600' },
]

export default function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-beige">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#C7A24B' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#C7A24B' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto" ref={ref}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg glow-gold`}
              >
                <stat.icon className="w-8 h-8 text-dark-900" />
              </motion.div>
              <motion.div
                className="text-4xl md:text-5xl font-playfair font-bold mb-2 gradient-text"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
              >
                {stat.value}
              </motion.div>
              <div className="text-base text-muted font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
