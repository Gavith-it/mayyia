'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

const menuItems = [
  {
    name: 'Truffle Risotto',
    description: 'Creamy arborio rice with black truffle and parmesan',
    price: '$45',
    image: '/images/anil-sharma-DKnqF7U2Aus-unsplash.jpg',
  },
  {
    name: 'Wagyu Steak',
    description: 'Premium A5 wagyu with seasonal vegetables',
    price: '$125',
    image: '/images/anil-sharma-fImNmaN73zo-unsplash.jpg',
  },
  {
    name: 'Lobster Thermidor',
    description: 'Fresh lobster in creamy cognac sauce',
    price: '$65',
    image: '/images/anil-sharma-oNXMhtKKFec-unsplash.jpg',
  },
  {
    name: 'Chocolate Soufflé',
    description: 'Warm chocolate soufflé with vanilla ice cream',
    price: '$28',
    image: '/images/anil-sharma-ynt5uoi4bTE-unsplash.jpg',
  },
]

export default function MenuPreviewSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-dark-900">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <div className="section-subtitle">Our Menu</div>
          <h2 className="section-heading">
            Signature <span className="gradient-text">Dishes</span>
          </h2>
          <p className="section-description">
            Discover our chef's carefully curated selection of premium dishes, 
            each crafted with passion and precision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="premium-card h-full flex flex-col overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-64 mb-6 rounded-xl overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="absolute top-4 right-4 glass px-4 py-2 rounded-lg"
                  >
                    <span className="text-gold-400 font-bold">{item.price}</span>
                  </motion.div>
                </motion.div>
                <h3 className="text-2xl font-playfair text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{item.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gold-400 font-semibold group-hover:text-gold-300 transition-colors"
                >
                  Order Now <FiArrowRight className="ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/menu" className="btn-secondary inline-flex items-center">
              View Full Menu <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
