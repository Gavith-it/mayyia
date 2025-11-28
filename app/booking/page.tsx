import { Metadata } from 'next'
import BookingHero from '@/components/pages/BookingHero'
import BookingForm from '@/components/pages/BookingForm'

export const metadata: Metadata = {
  title: "Reservations - Sri Mayyia Caterers",
  description: 'Reserve your table for an unforgettable dining experience.',
}

export default function BookingPage() {
  return (
    <>
      <BookingHero />
      <BookingForm />
    </>
  )
}
