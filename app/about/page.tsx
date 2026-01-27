import { Metadata } from 'next'
import AboutHero from '@/components/pages/AboutHero'
import LegacySection from '@/components/pages/LegacySection'
import WhatWeDoSection from '@/components/pages/WhatWeDoSection'
import EventFormatsSection from '@/components/pages/EventFormatsSection'
import StatsSection from '@/components/pages/StatsSection'
import CulinaryJourneySection from '@/components/pages/CulinaryJourneySection'
import ClientsSection from '@/components/pages/ClientsSection'
import VenuesSection from '@/components/pages/VenuesSection'

export const metadata: Metadata = {
  title: "About Us - Sri Mayyia Caterers",
  description: 'Learn about our legacy of culinary excellence spanning over six decades.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <LegacySection />
      <WhatWeDoSection />
      <EventFormatsSection />
      <StatsSection />
      <CulinaryJourneySection />
      <ClientsSection />
      <VenuesSection />
    </>
  )
}
