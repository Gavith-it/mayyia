'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { IMAGE_ASSETS } from '@/lib/image-assets'

const operationalCards = [
	{ title: 'Central Kitchen', description: 'A dedicated central kitchen with large-scale hygienic facilities' },
	{ title: 'Logistics Network', description: 'A logistics and transport team operating across South India' },
	{ title: 'Expert Team', description: 'A pantry of trained chefs across specialties' },
	{ title: 'Event SOPs', description: 'Event-based SOPs for procurement, preparation, delivery, and service' },
]

function OperationalCard({ item, index }: { item: { title: string; description: string }; index: number }) {
	const [imgError, setImgError] = useState(false)
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			whileHover={{ y: -10, scale: 1.02 }}
			className="premium-card group overflow-hidden p-0 relative w-full aspect-[4/3] rounded-xl bg-[#E6D8C4]"
		>
			{/* Full-card image */}
			{!imgError ? (
				<Image
					src={IMAGE_ASSETS.about.operationalCards[index]}
					alt={item.title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					quality={92}
					onError={() => setImgError(true)}
				/>
			) : null}
			{/* Gradient overlay so text stays readable */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
			{/* Text over image */}
			<div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
				<h3 className="text-2xl font-playfair font-bold mb-2 drop-shadow-sm">{item.title}</h3>
				<p className="text-white/90 text-sm leading-relaxed drop-shadow-sm">{item.description}</p>
			</div>
		</motion.div>
	)
}

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
					{operationalCards.map((item, index) => (
						<OperationalCard key={index} item={item} index={index} />
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

