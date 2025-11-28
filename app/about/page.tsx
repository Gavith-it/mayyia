import { Metadata } from 'next'
import AboutHero from '@/components/pages/AboutHero'
import WhatWeDoSection from '@/components/pages/WhatWeDoSection'
import EventFormatsSection from '@/components/pages/EventFormatsSection'
import StatsSection from '@/components/pages/StatsSection'
import CulinaryJourneySection from '@/components/pages/CulinaryJourneySection'

export const metadata: Metadata = {
  title: "About Us - Sri Mayyia Caterers",
  description: 'Learn about our legacy of culinary excellence spanning over three decades.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhatWeDoSection />
      <EventFormatsSection />
      <StatsSection />
      <CulinaryJourneySection />
    </>
  )
}
