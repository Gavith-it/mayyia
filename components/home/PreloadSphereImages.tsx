'use client'

import { useEffect } from 'react'
import { IMAGE_ASSETS } from '@/lib/image-assets'

/**
 * Preloads the 12 Our Story sphere images as soon as the home page loads,
 * so they are cached by the time the user scrolls to that section. Runs
 * after idle to avoid blocking paint or interaction — keeps everything smooth.
 */
export default function PreloadSphereImages() {
  useEffect(() => {
    const urls = IMAGE_ASSETS.home.sphere
    if (!urls?.length) return

    const preload = () => {
      urls.forEach((src) => {
        const img = new Image()
        img.src = src
      })
    }

    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(preload, { timeout: 2000 })
    } else {
      setTimeout(preload, 0)
    }
  }, [])

  return null
}
