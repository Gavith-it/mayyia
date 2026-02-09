'use client'

import { motion } from 'framer-motion'

export default function ClientsSection() {
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
					<div className="section-subtitle mb-4">Clients & Communities We Serve</div>
					<h2 className="section-heading-light">
						Trusted Across <span className="gradient-text">Generations</span>
					</h2>
					<p className="section-description-light mb-8">
						Our clientele is loyal. Our reputation is generational.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[
						'Leading families across Karnataka, Tamil Nadu, Andhra Pradesh, and Telangana',
						'Spiritual organisations, mathas, and temple trusts',
						'Luxury wedding planners and event designers',
						'Corporate houses for religious and cultural events',
						'International Indian families hosting traditional celebrations in India',
					].map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="premium-card text-center"
						>
							<p className="text-muted leading-relaxed">{item}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
