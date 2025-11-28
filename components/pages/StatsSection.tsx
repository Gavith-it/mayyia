'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUsers, FiCalendar, FiAward, FiHeart } from 'react-icons/fi'

const stats = [
  { icon: FiUsers, value: '50K+', label: 'Happy Guests', color: 'from-gold-400 to-gold-500' },
  { icon: FiCalendar, value: '30+', label: 'Years Experience', color: 'from-gold-500 to-gold-600' },
  { icon: FiAward, value: '15+', label: 'Awards Won', color: 'from-gold-400 to-gold-500' },
  { icon: FiHeart, value: '98%', label: 'Satisfaction Rate', color: 'from-gold-500 to-gold-600' },
]

export default function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" ref={ref}>
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
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg glow-gold`}
              >
                <stat.icon className="w-10 h-10 text-dark-900" />
              </motion.div>
              <motion.div
                className="text-5xl md:text-6xl font-playfair font-bold mb-3 gradient-text"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
              >
                {stat.value}
              </motion.div>
              <div className="text-lg text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
