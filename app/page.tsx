import dynamic from 'next/dynamic'
import PremiumHero from '@/components/home/PremiumHero'
import LaserFlowSection from '@/components/home/LaserFlowSection'

// Lazy load heavy components for better performance

const AboutSection = dynamic(() => import('@/components/home/AboutWithLaser'), {
  loading: () => <div className="h-[600px] bg-dark-900" />,
})

const SignatureSection = dynamic(() => import('@/components/home/SignatureSection'), {
  loading: () => <div className="h-[400px] bg-dark-800" />,
})

const GallerySection = dynamic(() => import('@/components/home/GallerySection'), {
  loading: () => <div className="h-[800px] bg-dark-900" />,
})

const ChefsSection = dynamic(() => import('@/components/home/ChefsSection'), {
  loading: () => <div className="h-[600px] bg-dark-800" />,
})

const ReservationSection = dynamic(() => import('@/components/home/ReservationSection'), {
  loading: () => <div className="h-[500px] bg-dark-900" />,
})

export default function Home() {
  return (
    <>
      <PremiumHero />
      <LaserFlowSection />
      <AboutSection />
      <SignatureSection />
      <GallerySection />
      <ChefsSection />
      <ReservationSection />
    </>
  )
}
