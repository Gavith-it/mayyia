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
    <section className="section-padding bg-beige">
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
              <div className="w-14 h-14 bg-brandGold rounded-xl flex items-center justify-center mb-4">
                <FiMapPin className="w-7 h-7 text-offwhite" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                Office
              </h3>
              <p className="text-muted">
                Bengaluru, Karnataka<br />
                Service Radius: Pan-South India and Select Destination Cities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="premium-card"
            >
              <div className="w-14 h-14 bg-brandGold rounded-xl flex items-center justify-center mb-4">
                <FiPhone className="w-7 h-7 text-offwhite" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                Phone
              </h3>
              <p className="text-muted">
                +91 80 1234 5678
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="premium-card"
            >
              <div className="w-14 h-14 bg-brandGold rounded-xl flex items-center justify-center mb-4">
                <FiMail className="w-7 h-7 text-offwhite" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                Email
              </h3>
              <p className="text-muted">
                info@srimayyia.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="premium-card"
            >
              <div className="w-14 h-14 bg-brandGold rounded-xl flex items-center justify-center mb-4">
                <FiClock className="w-7 h-7 text-offwhite" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                Schedule a Menu Consultation
              </h3>
              <p className="text-muted">
                Our culinary consultants will guide you through the process—understanding your needs, curating your menu, and ensuring your event is remembered for its taste and thoughtfulness.
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
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-8">
                Connect <span className="gradient-text">With Us</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-offwhite border border-borderLight rounded-lg focus:ring-2 focus:ring-brandGold focus:border-brandGold text-charcoal placeholder-muted"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-offwhite border border-borderLight rounded-lg focus:ring-2 focus:ring-brandGold focus:border-brandGold text-charcoal placeholder-muted"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-offwhite border border-borderLight rounded-lg focus:ring-2 focus:ring-brandGold focus:border-brandGold text-charcoal placeholder-muted"
                      placeholder="+91 80 1234 5678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-offwhite border border-borderLight rounded-lg focus:ring-2 focus:ring-brandGold focus:border-brandGold text-charcoal placeholder-muted"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-offwhite border border-borderLight rounded-lg focus:ring-2 focus:ring-brandGold focus:border-brandGold text-charcoal placeholder-muted"
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
