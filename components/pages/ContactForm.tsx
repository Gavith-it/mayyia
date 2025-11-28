'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiSend, FiClock } from 'react-icons/fi'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="premium-card"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center mb-4 glow-gold">
                <FiMapPin className="w-7 h-7 text-dark-900" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                Address
              </h3>
              <p className="text-gray-400">
                123 Premium Avenue,<br />
                Luxury District, City 12345
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="premium-card"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center mb-4 glow-gold">
                <FiPhone className="w-7 h-7 text-dark-900" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                Phone
              </h3>
              <a href="tel:+1234567890" className="text-gold-400 hover:text-gold-300 transition-colors">
                +1 (234) 567-890
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="premium-card"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center mb-4 glow-gold">
                <FiMail className="w-7 h-7 text-dark-900" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                Email
              </h3>
              <a href="mailto:info@earlsrestaurant.com" className="text-gold-400 hover:text-gold-300 transition-colors">
                info@srimayyia.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="premium-card"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-500 rounded-xl flex items-center justify-center mb-4 glow-gold">
                <FiClock className="w-7 h-7 text-dark-900" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                Opening Hours
              </h3>
              <p className="text-gray-400">
                Monday - Friday: 6:00 PM - 11:00 PM<br />
                Saturday - Sunday: 5:00 PM - 12:00 AM
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="premium-card"
            >
              <h2 className="text-3xl font-playfair font-bold text-white mb-8">
                Send us a <span className="gradient-text">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 glass border border-gold-400/20 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 text-white placeholder-gray-500 bg-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 glass border border-gold-400/20 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 text-white placeholder-gray-500 bg-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 glass border border-gold-400/20 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 text-white placeholder-gray-500 bg-transparent"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 glass border border-gold-400/20 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 text-white placeholder-gray-500 bg-transparent"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 glass border border-gold-400/20 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 text-white placeholder-gray-500 bg-transparent"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary inline-flex items-center"
                >
                  <FiSend className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
