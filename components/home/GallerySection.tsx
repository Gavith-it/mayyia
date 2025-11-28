'use client'

import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { CircularGallery, type GalleryItem } from '@/components/ui/circular-gallery-2'

const galleryItems: GalleryItem[] = [
  { 
    image: '/images/anil-sharma-_uWcGe93l6w-unsplash.jpg', 
    text: 'Elegant Dining Room' 
  },
  { 
    image: '/images/anil-sharma-DKnqF7U2Aus-unsplash.jpg', 
    text: 'Chef Special' 
  },
  { 
    image: '/images/anil-sharma-fImNmaN73zo-unsplash.jpg', 
    text: 'Artisanal Presentation' 
  },
  { 
    image: '/images/anil-sharma-oNXMhtKKFec-unsplash.jpg', 
    text: 'Luxury Experience' 
  },
  { 
    image: '/images/anil-sharma-ynt5uoi4bTE-unsplash.jpg', 
    text: 'Sweet Indulgence' 
  },
  { 
    image: '/images/darko-trajkovic-Kh6iEyCS-Mg-unsplash.jpg', 
    text: 'Exclusive Setting' 
  },
  { 
    image: '/images/anil-sharma-1aahKeCCBIQ-unsplash.jpg', 
    text: 'Curated Wines' 
  },
  { 
    image: '/images/alexandra-bellanger-dHeKcZ0a-xY-unsplash.jpg', 
    text: 'Romantic Atmosphere' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', 
    text: 'Premium Ambiance' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', 
    text: 'Culinary Excellence' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80', 
    text: 'Master Chefs' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', 
    text: 'Elegant Design' 
  },
]

const GallerySection = memo(function GallerySection() {
  // Memoize gallery items to prevent re-renders
  const memoizedGalleryItems = useMemo(() => galleryItems, [])

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="section-title mb-16"
        >
          <div className="section-subtitle">Gallery</div>
          <h2 className="section-heading">
            Visual <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-description">
            Step into our world of culinary artistry and elegant ambiance.
          </p>
        </motion.div>

        {/* Circular Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[600px] w-full rounded-lg mb-12"
        >
          <CircularGallery
            items={memoizedGalleryItems}
            bend={3}
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.02}
            fontClassName="font-playfair text-gold-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/gallery" className="btn-secondary inline-flex items-center">
              View Full Gallery <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default GallerySection
