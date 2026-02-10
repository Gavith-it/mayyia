'use client'

import { memo, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { CircularGallery, type GalleryItem } from '@/components/ui/circular-gallery-2'
import { IMAGE_ASSETS } from '@/lib/image-assets'

const galleryTitles = [
  'Elegant Dining Room', 'Chef Special', 'Artisanal Presentation', 'Luxury Experience',
  'Sweet Indulgence', 'Exclusive Setting', 'Curated Wines', 'Romantic Atmosphere',
]
const galleryItems: GalleryItem[] = IMAGE_ASSETS.home.gallery.map((image, i) => ({
  image: image as string,
  text: galleryTitles[i] ?? '',
}))

const GallerySection = memo(function GallerySection() {
  // Preload gallery images as soon as the section is on the page so they're cached before user scrolls here
  useEffect(() => {
    IMAGE_ASSETS.home.gallery.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  // Memoize gallery items to prevent re-renders
  const memoizedGalleryItems = useMemo(() => galleryItems, [])

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
          <div className="section-subtitle">Gallery</div>
          <h2 className="section-heading-light">
            Visual <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-description-light">
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
            fontClassName="font-playfair text-brandGold"
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
