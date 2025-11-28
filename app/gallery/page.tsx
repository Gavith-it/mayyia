import { Metadata } from 'next'
import GalleryHero from '@/components/pages/GalleryHero'
import GalleryGrid from '@/components/pages/GalleryGrid'

export const metadata: Metadata = {
  title: "Gallery - Sri Mayyia Caterers",
  description: 'View our restaurant ambiance, dishes, and special events.',
}

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  )
}
