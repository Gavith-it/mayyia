import { Metadata } from 'next'
import ContactHero from '@/components/pages/ContactHero'
import ContactForm from '@/components/pages/ContactForm'
import MapSection from '@/components/pages/MapSection'

export const metadata: Metadata = {
  title: "Contact Us - Sri Mayyia Caterers",
  description: "Get in touch with Sri Mayyia Caterers for reservations and inquiries.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <MapSection />
    </>
  )
}
