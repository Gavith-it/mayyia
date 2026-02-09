/**
 * Section-wise image assets.
 * Add or replace images in public/images/<section>/ — see each folder's README.txt.
 * Logo: add public/images/logo/logo.svg or logo.png.
 */

const base = '/images'

export const IMAGE_ASSETS = {
  home: {
    video: `${base}/home/video.mp4`,
    heroSliders: [
      `${base}/home/slider-1.jpg`,
      `${base}/home/slider-2.jpg`,
      `${base}/home/slider-3.jpg`,
      `${base}/home/slider-4.jpg`,
      `${base}/home/slider-5.jpg`,
      `${base}/home/slider-6.jpg`,
    ],
    parallax: [
      `${base}/home/parallax-1.jpg`,
      `${base}/home/parallax-2.jpg`,
    ],
    reservationBg: `${base}/home/reservation-bg.jpg`,
    signature: [
      `${base}/home/signature-1.jpg`,
      `${base}/home/signature-2.jpg`,
      `${base}/home/signature-3.jpg`,
      `${base}/home/signature-4.jpg`,
    ],
    gallery: [
      `${base}/home/gallery-1.jpg`,
      `${base}/home/gallery-2.jpg`,
      `${base}/home/gallery-3.jpg`,
      `${base}/home/gallery-4.jpg`,
      `${base}/home/gallery-5.jpg`,
      `${base}/home/gallery-6.jpg`,
      `${base}/home/gallery-7.jpg`,
      `${base}/home/gallery-8.jpg`,
    ],
  },
  about: {
    hero: `${base}/about/hero.jpg`,
    legacy: `${base}/about/legacy.jpg`,
    whatWeDo: [
      `${base}/about/whatwedo-1.jpg`,
      `${base}/about/whatwedo-2.jpg`,
    ],
    culinary: `${base}/about/culinary.jpg`,
  },
  menu: {
    hero: `${base}/menu/hero.jpg`,
  },
  gallery: {
    hero: `${base}/gallery/hero.jpg`,
    grid: [
      `${base}/gallery/1.jpg`,
      `${base}/gallery/2.jpg`,
      `${base}/gallery/3.jpg`,
      `${base}/gallery/4.jpg`,
      `${base}/gallery/5.jpg`,
      `${base}/gallery/6.jpg`,
      `${base}/gallery/7.jpg`,
      `${base}/gallery/8.jpg`,
      `${base}/gallery/9.jpg`,
    ],
  },
  chefs: {
    hero: `${base}/chefs/hero.jpg`,
    grid: [
      `${base}/chefs/1.jpg`,
      `${base}/chefs/2.jpg`,
      `${base}/chefs/3.jpg`,
      `${base}/chefs/4.jpg`,
    ],
  },
  booking: {
    hero: `${base}/booking/hero.jpg`,
  },
  contact: {
    hero: `${base}/contact/hero.jpg`,
  },
  logo: {
    /** Use logo.svg or logo.png in public/images/logo/ */
    src: `${base}/logo/logo.svg`,
    fallback: `${base}/logo/logo.png`,
  },
} as const
