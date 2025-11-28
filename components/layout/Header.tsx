'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/menu', label: 'Menu' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/chefs', label: 'Chefs' },
    { href: '/booking', label: 'Reservations' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-dark py-4 shadow-2xl border-none'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="text-5xl font-great-vibes font-normal gradient-text"
              >
                Sri Mayyia
              </motion.div>
              <span className="text-sm text-gold-400 font-playfair tracking-wider hidden sm:block font-semibold">
                CATERERS
              </span>
            </Link>

            {/* Menu Button - Shows on all screens */}
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-white hover:text-gold-400 transition-colors relative z-[60]"
              aria-label="Open menu"
            >
              <FiMenu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Sidebar Navigation - Appears from Right */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 30, 
                stiffness: 300,
                mass: 0.8
              }}
              className="fixed top-0 right-0 bottom-0 z-[101] w-80 bg-dark-900 overflow-y-auto"
            >
              {/* Vertical Yellow Bar on Right Edge */}
              <div className="absolute top-0 right-0 bottom-0 w-1 bg-gold-400" />

              <div className="flex flex-col h-full">
                {/* Header with Close Button */}
                <div className="flex items-center justify-between p-6 border-b border-gold-400/10">
                  <div className="text-2xl font-great-vibes font-normal gradient-text">
                    Sri Mayyia <span className="font-playfair text-lg">Caterers</span>
                  </div>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gold-400 transition-all duration-300"
                    aria-label="Close menu"
                  >
                    <FiX className="w-5 h-5 font-bold" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6 space-y-0">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.06 + 0.15,
                        type: 'spring',
                        damping: 25,
                        stiffness: 200
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-3 px-4 text-lg font-playfair transition-all duration-300 ${
                          pathname === link.href
                            ? 'text-gold-400 bg-gold-400/20 border-l-4 border-gold-400'
                            : 'text-white hover:text-gold-400 hover:bg-gold-400/10'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.06 + 0.3 }}
                  className="p-6 border-t border-gold-400/10 space-y-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/booking"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full bg-gold-400 text-dark-900 text-center font-playfair font-semibold py-3 px-6 rounded-lg hover:bg-gold-500 transition-colors duration-300"
                    >
                      Reserve Table
                    </Link>
                  </motion.div>
                  
                  {/* Contact Info */}
                  <div className="space-y-2 pt-2">
                    <p className="text-gray-400 text-xs font-playfair uppercase tracking-wider">Contact Us</p>
                    <a 
                      href="tel:+1234567890" 
                      className="text-white hover:text-gold-400 transition-colors block font-montserrat text-sm"
                    >
                      +1 (234) 567-890
                    </a>
                    <a 
                      href="mailto:info@srimayyia.com" 
                      className="text-white hover:text-gold-400 transition-colors block text-xs font-montserrat"
                    >
                      info@srimayyia.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
