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
		<section className="section-padding bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
			<div className="container-custom">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<div className="section-subtitle mb-4">Event formats</div>
					<h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
						Our <span className="gradient-text">Services</span>
					</h2>
					<p className="text-lg text-gray-300 max-w-3xl mx-auto">
						Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{eventFormats.map((format, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ y: -10, scale: 1.02 }}
							className="premium-card group cursor-pointer"
						>
							<div className="mb-4">
								<h3 className="text-2xl font-playfair font-bold text-white mb-2">
									{format.title}
								</h3>
								<div className="text-gold-400 font-semibold text-lg mb-4">
									{format.price}
								</div>
								<p className="text-gray-400 leading-relaxed">
									{format.description}
								</p>
							</div>
							<Link
								href="/booking"
								className="inline-flex items-center text-gold-400 font-medium group-hover:text-gold-300 transition-colors"
							>
								Learn More
								<svg
									className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</Link>
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
					<Link
						href="/services"
						className="btn-primary inline-block"
					>
						View More
					</Link>
				</motion.div>
			</div>
		</section>
	)
}

