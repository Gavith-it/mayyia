import { Metadata } from 'next'
import ChefsHero from '@/components/pages/ChefsHero'
import ChefsGrid from '@/components/pages/ChefsGrid'

export const metadata: Metadata = {
  title: "Our Chefs - Sri Mayyia Caterers",
  description: 'Meet our master chefs who bring culinary artistry to every dish.',
}

export default function ChefsPage() {
  return (
    <>
      <ChefsHero />
      <ChefsGrid />
    </>
  )
}
