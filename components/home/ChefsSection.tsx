'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

const chefs = [
  {
    name: 'Chef Marcus Thompson',
    role: 'Executive Chef',
    bio: 'Award-winning chef with 20+ years of experience',
    image: '/images/jarren-rocks-nVFp3nTWAbA-unsplash.jpg',
  },
  {
    name: 'Chef Elena Martinez',
    role: 'Pastry Chef',
    bio: 'Master of French patisserie and modern desserts',
    image: '/images/alexandra-bellanger-dHeKcZ0a-xY-unsplash.jpg',
  },
  {
    name: 'Chef James Wilson',
    role: 'Sous Chef',
    bio: 'Specialist in Asian fusion and molecular gastronomy',
    image: '/images/darko-trajkovic-Kh6iEyCS-Mg-unsplash.jpg',
  },
]

export default function ChefsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="section-title mb-16"
        >
          <div className="section-subtitle">Our Team</div>
          <h2 className="section-heading">
            Master <span className="gradient-text">Chefs</span>
          </h2>
          <p className="section-description">
            Meet the culinary artists behind every exceptional dish.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="premium-card text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden"
                >
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <h3 className="text-2xl font-playfair text-white mb-2">{chef.name}</h3>
                <div className="text-gold-400 font-semibold mb-3">{chef.role}</div>
                <p className="text-gray-400">{chef.bio}</p>
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
            <Link href="/chefs" className="btn-secondary inline-flex items-center">
              Meet All Chefs <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
