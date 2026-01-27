'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiX } from 'react-icons/fi'

const galleryImages = [
  { id: 1, src: '/images/anil-sharma-_uWcGe93l6w-unsplash.jpg', title: 'Elegant Dining Room', category: 'Interior' },
  { id: 2, src: '/images/anil-sharma-DKnqF7U2Aus-unsplash.jpg', title: 'Signature Dish', category: 'Food' },
  { id: 3, src: '/images/anil-sharma-fImNmaN73zo-unsplash.jpg', title: 'Chef\'s Special', category: 'Food' },
  { id: 4, src: '/images/anil-sharma-oNXMhtKKFec-unsplash.jpg', title: 'Premium Presentation', category: 'Food' },
  { id: 5, src: '/images/anil-sharma-ynt5uoi4bTE-unsplash.jpg', title: 'Dessert Collection', category: 'Food' },
  { id: 6, src: '/images/darko-trajkovic-Kh6iEyCS-Mg-unsplash.jpg', title: 'Private Dining', category: 'Interior' },
  { id: 7, src: '/images/anil-sharma-1aahKeCCBIQ-unsplash.jpg', title: 'Wine Selection', category: 'Beverages' },
  { id: 8, src: '/images/alexandra-bellanger-dHeKcZ0a-xY-unsplash.jpg', title: 'Evening Ambiance', category: 'Interior' },
  { id: 9, src: '/images/anil-sharma-_uWcGe93l6w-unsplash.jpg', title: 'Fine Dining Experience', category: 'Interior' },
]

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = ['All', ...Array.from(new Set(galleryImages.map(item => item.category)))]

  const filteredItems = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(item => item.category === selectedCategory)

  return (
    <section className="section-padding bg-dark-900">
      <div className="container-custom">
        {/* Gallery Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Our work is best experienced in person—but here is a glimpse of what we deliver.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              'Lavish wedding spreads with silver service',
              'Sacred setups for rituals and poojas',
              'Live counters curated for culinary theatre',
              'Signature plating and presentation across cuisines',
              'Behind-the-scenes discipline of our kitchen and crew',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="premium-card text-center"
              >
                <p className="text-gray-300 text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-gold-400 font-semibold text-lg italic">
            This is not food photography. This is visual testimony.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-dark-900 shadow-lg glow-gold'
                  : 'glass text-white hover:bg-gold-400/10 border border-gold-400/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedImage(item.id)}
                className="group relative h-80 rounded-xl overflow-hidden cursor-pointer premium-card p-0"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-playfair text-white mb-1">{item.title}</h3>
                  <p className="text-gold-400 text-sm">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors z-10"
              >
                <FiX className="w-8 h-8" />
              </button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-[80vh] rounded-xl overflow-hidden">
                  <Image
                    src={galleryImages.find(item => item.id === selectedImage)?.src || ''}
                    alt={galleryImages.find(item => item.id === selectedImage)?.title || ''}
                    fill
                    sizes="90vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 text-center text-white">
                  <h3 className="text-2xl font-playfair mb-2">
                    {galleryImages.find(item => item.id === selectedImage)?.title}
                  </h3>
                  <p className="text-gold-400">
                    {galleryImages.find(item => item.id === selectedImage)?.category}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
