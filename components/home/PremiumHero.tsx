'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { IMAGE_ASSETS } from '@/lib/image-assets'
import { FiArrowRight, FiMenu } from 'react-icons/fi'

const heroImages = IMAGE_ASSETS.home.heroSliders

export default function PremiumHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Mouse parallax & lighting effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    mouseX.set(clientX)
    mouseY.set(clientY)
  }

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0502]"
    >
      {/* 1. Cinematic Slideshow (Ken Burns Effect) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Ken Burns Inner Scale */}
            <motion.div
              className="w-full h-full relative"
              animate={{ scale: [1, 1.15] }}
              transition={{ duration: 8, ease: "linear" }}
            >
              <Image
                src={heroImages[currentSlide]}
                alt="Premium Catering"
                fill
                className="object-cover"
                priority={currentSlide === 0}
                quality={90}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000000_120%)] opacity-80" />
      </div>

      {/* 2. Gold Dust Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full opacity-0"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* 3. Main Content Layer */}
      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 container-custom px-4 w-full h-full flex flex-col justify-center items-center"
      >
        {/* Top Decoration: Restored Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[15%] md:top-[18%] text-center w-full"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-gold-300 font-montserrat text-[10px] md:text-sm uppercase tracking-[0.3em] font-medium border-b border-gold-400/30 pb-2">
              Legacy in Every Bite. Precision in Every Detail.
            </span>
          </div>
        </motion.div>

        {/* Center Typography */}
        <div className="text-center relative mt-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-great-vibes font-normal text-transparent bg-clip-text bg-gradient-to-b from-gold-100 via-gold-300 to-gold-600 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] leading-none"
          >
            Sri Mayyia
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white tracking-widest mt-2 mb-6">
              <span className="text-gold-400">C</span>aterers
            </h2>
            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 1 }}
              className="h-[2px] bg-gold-400 mx-auto mb-8"
            />
          </motion.div>

          {/* Restored Description Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-gray-200 font-montserrat font-light text-sm md:text-lg leading-relaxed max-w-3xl mx-auto tracking-wide"
          >
            Since 1953, Sri Mayyia has been Karnataka&apos;s trusted name for premium <span className="text-gold-300 font-normal">vegetarian catering</span>
            — bringing royal taste, refined presentation, and seamless service to weddings, celebrations, and corporate occasions.
          </motion.p>
        </div>

        {/* Bottom Glass Card - Control Center */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-10 md:bottom-20 z-20"
        >
          <div className="glass p-2 rounded-full flex items-center gap-2 bg-black/20 border-white/10 backdrop-blur-md">
            <Link href="/menu" className="group relative px-8 py-3 rounded-full overflow-hidden bg-gold-400 text-charcoal font-semibold font-montserrat text-sm transition-all hover:bg-white">
              <span className="relative z-10 flex items-center gap-2">
                View Menu <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link href="/booking" className="px-8 py-3 rounded-full text-white font-montserrat text-sm hover:text-gold-300 transition-colors">
              Book an Event
            </Link>
          </div>
        </motion.div>

        {/* 70 Years Badge */}
        <motion.div
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 right-10 hidden lg:flex items-center justify-center w-32 h-32"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
            <path
              id="curve"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="transparent"
            />
            <text className="text-[10px] uppercase font-bold tracking-widest fill-gold-400 font-montserrat">
              <textPath href="#curve">
                • 70 Years of Legacy • Since 1953
              </textPath>
            </text>
          </svg>
          <div className="absolute text-2xl font-great-vibes text-white">70+</div>
        </motion.div>

      </motion.div>
    </section>
  )
}
