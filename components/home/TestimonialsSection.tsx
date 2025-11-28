'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Food Critic',
    content: 'An extraordinary culinary journey. Every dish was a masterpiece, and the service was impeccable. Sri Mayyia Caterers sets the standard for fine dining.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    content: 'The attention to detail is remarkable. From the ambiance to the presentation, everything exudes luxury and sophistication.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Celebrity Chef',
    content: 'A perfect blend of tradition and innovation. The flavors are bold yet refined, creating an unforgettable dining experience.',
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
          <div className="section-subtitle">Testimonials</div>
          <h2 className="section-heading">
            What Our <span className="gradient-text">Guests Say</span>
          </h2>
          <p className="section-description">
            Don't just take our word for it. Hear from our valued guests about their experiences.
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
