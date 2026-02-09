'use client'

import { motion } from 'framer-motion'

export default function VenuesSection() {
	return (
		<section className="section-padding bg-beige">
			<div className="container-custom">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12"
				>
					<div className="section-subtitle mb-4">Venues We Serve</div>
					<h2 className="section-heading-light">
						A Trusted Name Across the Most <span className="gradient-text">Iconic Spaces</span>
					</h2>
					<p className="section-description-light mb-8">
						Over the years, Sri Mayyia Caterers has become the preferred partner for some of South India's most premium wedding venues, temple halls, private estates, and destination locations.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
					{[
						{
							title: 'Bengaluru, Chennai, Hyderabad',
							description: 'We serve across Tier-1 cities and beyond',
						},
						{
							title: 'Premium Wedding Venues',
							description: 'Kalyana Mantapas & luxury resorts',
						},
						{
							title: 'Private Estates',
							description: 'Private farmhouses and ancestral homes',
						},
						{
							title: 'Spiritual Locations',
							description: 'Including mutts, temples, and ashrams',
						},
						{
							title: 'Destination Weddings',
							description: 'Select destination weddings across India',
						},
					].map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="premium-card"
						>
							<h3 className="text-xl font-playfair font-bold text-charcoal mb-2">
								{item.title}
							</h3>
							<p className="text-muted leading-relaxed">{item.description}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					<p className="text-lg text-muted">
						We operate with full independence and seamless coordination with your venue team.
					</p>
				</motion.div>
			</div>
		</section>
	)
}
