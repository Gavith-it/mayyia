'use client'

import { useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import SphereImageGrid, { ImageData } from '@/components/ui/img-sphere'

// Restaurant images for the sphere - Using all images for full sphere effect (30-35 images)
const localImages: ImageData[] = [
  {
    id: 'img-1',
    src: '/images/anil-sharma-_uWcGe93l6w-unsplash.jpg',
    alt: 'Restaurant Interior',
    title: 'Elegant Dining Room',
    description: 'Experience fine dining in our beautifully designed interior'
  },
  {
    id: 'img-2',
    src: '/images/anil-sharma-DKnqF7U2Aus-unsplash.jpg',
    alt: 'Signature Dish',
    title: 'Chef Special',
    description: 'Our master chef\'s signature creation'
  },
  {
    id: 'img-3',
    src: '/images/anil-sharma-fImNmaN73zo-unsplash.jpg',
    alt: 'Premium Cuisine',
    title: 'Artisanal Presentation',
    description: 'Every dish is a work of art'
  },
  {
    id: 'img-4',
    src: '/images/anil-sharma-oNXMhtKKFec-unsplash.jpg',
    alt: 'Fine Dining',
    title: 'Luxury Experience',
    description: 'Indulge in our premium dining experience'
  },
  {
    id: 'img-5',
    src: '/images/anil-sharma-ynt5uoi4bTE-unsplash.jpg',
    alt: 'Dessert Collection',
    title: 'Sweet Indulgence',
    description: 'Decadent desserts crafted by our pastry chef'
  },
  {
    id: 'img-6',
    src: '/images/darko-trajkovic-Kh6iEyCS-Mg-unsplash.jpg',
    alt: 'Private Dining',
    title: 'Exclusive Setting',
    description: 'Private dining areas for special occasions'
  },
  {
    id: 'img-7',
    src: '/images/anil-sharma-1aahKeCCBIQ-unsplash.jpg',
    alt: 'Wine Selection',
    title: 'Curated Wines',
    description: 'Extensive collection of fine wines'
  },
  {
    id: 'img-8',
    src: '/images/alexandra-bellanger-dHeKcZ0a-xY-unsplash.jpg',
    alt: 'Evening Ambiance',
    title: 'Romantic Atmosphere',
    description: 'Perfect setting for romantic dinners'
  },
  {
    id: 'img-9',
    src: '/images/ananthan-chithiraikani-5I4faGfaUHg-unsplash (1).jpg',
    alt: 'Gourmet Food',
    title: 'Gourmet Selection',
    description: 'Exquisite gourmet dishes prepared with passion'
  },
  {
    id: 'img-10',
    src: '/images/anoof-c-tPI0nbTSMJY-unsplash.jpg',
    alt: 'Fine Dining',
    title: 'Premium Ambiance',
    description: 'Sophisticated atmosphere for memorable dining'
  },
  {
    id: 'img-11',
    src: '/images/barun-ghosh-wClFKcjhNcI-unsplash.jpg',
    alt: 'Restaurant Setting',
    title: 'Elegant Design',
    description: 'Beautifully designed dining spaces'
  },
  {
    id: 'img-12',
    src: '/images/deepal-tamang-93L024xGEUM-unsplash (1).jpg',
    alt: 'Culinary Art',
    title: 'Artisanal Cuisine',
    description: 'Handcrafted dishes with premium ingredients'
  },
  {
    id: 'img-13',
    src: '/images/fuseviews-IGsIPEMyQhU-unsplash (1).jpg',
    alt: 'Restaurant Interior',
    title: 'Modern Design',
    description: 'Contemporary elegance meets traditional charm'
  },
  {
    id: 'img-14',
    src: '/images/inna-safa-7EOs6Zxf5OE-unsplash.jpg',
    alt: 'Dining Experience',
    title: 'Luxury Dining',
    description: 'Experience luxury in every detail'
  },
  {
    id: 'img-15',
    src: '/images/jarren-rocks-nVFp3nTWAbA-unsplash.jpg',
    alt: 'Chef Preparation',
    title: 'Expert Chefs',
    description: 'Trained in the finest culinary traditions'
  },
  {
    id: 'img-16',
    src: '/images/jaydeep-gajera-7yb08BMYhmQ-unsplash (1).jpg',
    alt: 'Gourmet Meal',
    title: 'Signature Dishes',
    description: 'Our most celebrated culinary creations'
  },
  {
    id: 'img-17',
    src: '/images/kanteen-catering-_dVcttU4KLI-unsplash.jpg',
    alt: 'Catering Service',
    title: 'Premium Catering',
    description: 'Excellence in catering for all occasions'
  },
  {
    id: 'img-18',
    src: '/images/mary-west-0hoHehzHObI-unsplash.jpg',
    alt: 'Fine Cuisine',
    title: 'Culinary Artistry',
    description: 'Where food becomes art'
  },
  {
    id: 'img-19',
    src: '/images/maryam-emkani-V58povvEj_w-unsplash.jpg',
    alt: 'Restaurant Ambiance',
    title: 'Sophisticated Atmosphere',
    description: 'Elegant setting for special occasions'
  },
  {
    id: 'img-20',
    src: '/images/mayur-roxan-V0pCYv4_ZZ0-unsplash.jpg',
    alt: 'Dining Room',
    title: 'Elegant Spaces',
    description: 'Beautifully designed dining areas'
  },
  {
    id: 'img-21',
    src: '/images/micheile-henderson-0fyS-gk0h4w-unsplash.jpg',
    alt: 'Gourmet Food',
    title: 'Exquisite Flavors',
    description: 'A symphony of taste and texture'
  },
  {
    id: 'img-22',
    src: '/images/nidhin-k-s-m7ltD98UTHY-unsplash.jpg',
    alt: 'Chef Special',
    title: 'Chef\'s Selection',
    description: 'Specially curated by our master chefs'
  },
  {
    id: 'img-23',
    src: '/images/radowan-nakif-rehan-gU6_KA8zCvM-unsplash.jpg',
    alt: 'Restaurant Bar',
    title: 'Premium Bar',
    description: 'Elegant bar with craft cocktails'
  },
  {
    id: 'img-24',
    src: '/images/ryan-kwok-jkgbZXv0nm0-unsplash.jpg',
    alt: 'Fine Dining',
    title: 'Luxury Experience',
    description: 'Indulge in our premium offerings'
  },
  {
    id: 'img-25',
    src: '/images/valentin-kremer-MzVxrOWYmQQ-unsplash.jpg',
    alt: 'Restaurant Setting',
    title: 'Elegant Ambiance',
    description: 'Sophisticated atmosphere'
  },
  {
    id: 'img-26',
    src: '/images/vivekarasan-m-WK6N0tGbkbo-unsplash.jpg',
    alt: 'Culinary Excellence',
    title: 'Masterful Cuisine',
    description: 'Experience the art of fine dining'
  },
  {
    id: 'img-27',
    src: '/images/zoshua-colah-3qHDm3IQCUs-unsplash.jpg',
    alt: 'Gourmet Selection',
    title: 'Artisanal Creations',
    description: 'Handcrafted with passion and precision'
  },
  {
    id: 'img-28',
    src: '/images/zoshua-colah-zKmzgVixk_I-unsplash.jpg',
    alt: 'Dining Experience',
    title: 'Unforgettable Dining',
    description: 'Create memories with every visit'
  },
]

// Use all images for full sphere effect like the reference
const restaurantImages: ImageData[] = localImages

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Memoize images array to prevent re-renders
  const memoizedImages = useMemo(() => restaurantImages, [])

  return (
      <section
        ref={containerRef}
        className="
          relative
          pt-8 pb-12
          bg-gradient-to-b from-black via-dark-900 to-dark-800
          overflow-visible
          z-20
        "
        style={{ position: 'relative' }}
      >

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* 3D Image Sphere */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center" style={{ contain: 'layout style paint' }}>
            <SphereImageGrid
              images={memoizedImages}
              containerSize={600}
              sphereRadius={200}
              dragSensitivity={0.8}
              momentumDecay={0.96}
              maxRotationSpeed={6}
              baseImageScale={0.13}
              hoverScale={1.4}
              perspective={1200}
                autoRotate={true}
                autoRotateSpeed={0.5}
              className="w-full h-full"
            />
          </div>

          {/* TEXT CONTENT - Visible immediately for better UX */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-subtitle"
            >
              OUR STORY
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-heading text-left"
            >
              A Legacy of <span className="gradient-text">Excellence</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              For over six decades, Sri Mayyia Caterers has stood as a benchmark in the art of premium
              vegetarian catering. Rooted in tradition and redefined through generations, we serve more
              than just meals—we craft gastronomic journeys.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 leading-relaxed"
            >
              Founded by Sri. K Ramakrishna Mayyia with a singular vision—to elevate the act of feeding
              into an offering of love, devotion, and discipline—our legacy is built on purity, process,
              and hospitality that transforms events into enduring memories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <motion.div whileHover={{ scale: 1.05, y: -5 }} className="premium-card">
                <div className="text-4xl font-playfair font-bold gradient-text mb-2">60+</div>
                <div className="text-gray-400">Years of Culinary Heritage</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} className="premium-card">
                <div className="text-4xl font-playfair font-bold gradient-text mb-2">50K+</div>
                <div className="text-gray-400">Happy Guests</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

