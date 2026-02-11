'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { IMAGE_ASSETS } from '@/lib/image-assets'

const SUBTITLE_ITEMS = ['Weddings', 'Religious Functions', 'Corporate Events', 'Private Celebrations']
const SLIDE_INTERVAL_MS = 5000

export default function CateringSpecialisationsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const images = IMAGE_ASSETS.home.specialisations

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="py-10 md:py-14 bg-beige relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="section-heading-light mb-4">
            Our Catering <span className="gradient-text">Specialisations</span>
          </h2>
          <p className="text-charcoal/80 font-medium text-lg md:text-xl flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            {SUBTITLE_ITEMS.map((item, i) => (
              <span key={item} className="inline-flex items-center">
                {item}
                {i < SUBTITLE_ITEMS.length - 1 && (
                  <span className="text-brandGold mx-1.5 font-normal select-none" aria-hidden>•</span>
                )}
              </span>
            ))}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-borderLight/40"
        >
          <div className="relative aspect-[21/9] md:aspect-[3/1] bg-charcoal/10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={images[activeIndex]}
                  alt={SUBTITLE_ITEMS[activeIndex]}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                  quality={92}
                  priority={activeIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider dots – golden when active */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brandGold/50 focus:ring-offset-2 focus:ring-offset-transparent ${
                  i === activeIndex
                    ? 'w-3 h-3 bg-brandGold scale-100 shadow-[0_0_8px_rgba(199,162,75,0.6)]'
                    : 'w-2.5 h-2.5 bg-white/70 hover:bg-white hover:scale-110'
                }`}
                aria-label={`Go to ${SUBTITLE_ITEMS[i]}`}
                aria-current={i === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
