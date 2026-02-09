'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const eventFormats = [
	{
		title: 'Buffet catering',
		price: 'from $125 per person',
		description: 'Perfect for large gatherings and corporate events',
	},
	{
		title: 'Weddings catering',
		price: 'from $215 per person',
		description: 'Elegant and memorable wedding celebrations',
	},
	{
		title: 'Corporate celebration',
		price: 'from $107 per person',
		description: 'Professional catering for business events',
	},
	{
		title: 'Themed evening',
		price: 'from $75 per person',
		description: 'Unique themed experiences for special occasions',
	},
	{
		title: 'Full-service catering',
		price: 'from $315 per person',
		description: 'Complete culinary service with premium experience',
	},
]

export default function EventFormatsSection() {
	return (
		<section className="section-padding bg-beige">
			<div className="container-custom">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<div className="section-subtitle mb-4">Our Expertise in Scale</div>
					<h2 className="section-heading-light">
						Designed for Thousands, Executed with <span className="gradient-text">Precision</span>
					</h2>
					<p className="section-description-light mb-8">
						Sri Mayyia's operational infrastructure is designed to deliver large-scale catering services with flawless consistency. We can serve anywhere from 50 to 10,000 guests with the same attention to taste, presentation, and discipline.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{[
						{
							title: 'Central Kitchen',
							description: 'A dedicated central kitchen with large-scale hygienic facilities',
						},
						{
							title: 'Logistics Network',
							description: 'A logistics and transport team operating across South India',
						},
						{
							title: 'Expert Team',
							description: 'A pantry of trained chefs across specialties',
						},
						{
							title: 'Event SOPs',
							description: 'Event-based SOPs for procurement, preparation, delivery, and service',
						},
					].map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ y: -10, scale: 1.02 }}
							className="premium-card group"
						>
							<div className="mb-4">
								<h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">
									{item.title}
								</h3>
								<p className="text-muted leading-relaxed">
									{item.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="text-center mt-12"
				>
					<p className="text-muted text-lg max-w-3xl mx-auto">
						Our work has supported mega weddings, spiritual gatherings, corporate galas, and pan-regional events for decades. Clients trust us because we execute complexity with calm, and scale with perfection.
					</p>
				</motion.div>
			</div>
		</section>
	)
}

