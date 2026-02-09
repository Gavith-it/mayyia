'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const chefs = [
  {
    name: 'Sri K Ramakrishna Mayyia',
    role: 'Founder',
    bio: 'A culinary pioneer whose devotion to purity, process, and hospitality transformed feeding into an offering of love and discipline.',
  },
  {
    name: 'Sri KR Ananth Mayyia',
    role: 'Operations & Scale',
    bio: 'The architect of operational excellence who scaled Sri Mayyia into a regional powerhouse with immaculate logistics and service integrity.',
  },
  {
    name: 'Mr. Akash Mayyia',
    role: 'Modern Vision & Experience',
    bio: 'A third-generation leader blending old-world grace with new-age innovation, curated menus, and a seamless digital-first experience.',
  },
]

export default function ChefsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="section-title mb-16"
        >
          <div className="section-subtitle">Leadership</div>
          <h2 className="section-heading-light">
            Pillars of <span className="gradient-text">Progress</span>
          </h2>
          <p className="section-description-light">
            Three generations of visionaries who transformed a humble service into one of India’s most trusted vegetarian catering institutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="premium-card text-center">
                <h3 className="text-2xl font-playfair text-charcoal mb-2">{chef.name}</h3>
                <div className="text-brandGold font-semibold mb-3">{chef.role}</div>
                <p className="text-muted">{chef.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/about" className="btn-secondary inline-flex items-center">
              Discover Our Legacy <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
