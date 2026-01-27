'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Aishwarya K.',
    role: 'Bengaluru',
    content: 'Sri Mayyia did not just cater our wedding—they elevated it. From the tasting to the service, everything was precise, poised, and unforgettable.',
    rating: 5,
  },
  {
    name: 'Raghavan Family',
    role: 'Sringeri',
    content: 'When we hosted a pooja for over 3000 people, Sri Mayyia delivered with such spiritual sanctity and systemised perfection that even the priests were in awe.',
    rating: 5,
  },
  {
    name: 'Lakshmi Narayan',
    role: 'Hyderabad',
    content: 'A rare blend of old-world charm and new-world precision. We wouldn\'t trust anyone else with our family functions.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-dark-900">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="section-title mb-16"
        >
          <div className="section-subtitle">Client Experiences</div>
          <h2 className="section-heading">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-description">
            Our clients don't just book us for events. They bring us in to safeguard their most meaningful milestones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="premium-card"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                className="flex items-center mb-4"
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                ))}
              </motion.div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center text-dark-900 font-bold"
                >
                  {testimonial.name.charAt(0)}
                </motion.div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
