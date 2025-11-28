'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CulinaryJourneySection() {
	return (
		<section className="section-padding bg-dark-900 relative overflow-hidden">
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
			</div>

			<div className="container-custom relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="space-y-6"
					>
						<div className="section-subtitle">Culinary Journey</div>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight">
							Satisfying your taste, creating{' '}
							<span className="gradient-text">memories</span> one bite at a time
						</h2>
						<p className="text-lg text-gray-300 leading-relaxed">
							For over three decades, Sri Mayyia Caterers has been a beacon of culinary excellence, blending traditional techniques with innovative flavors to create unforgettable dining experiences.
						</p>
						<p className="text-gray-400 leading-relaxed">
							Our master chefs, trained in the finest culinary traditions, craft each dish with meticulous attention to detail. We source only the finest ingredients from trusted local and international suppliers.
						</p>
					</motion.div>

					{/* Image */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative"
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
							className="relative h-[500px] md:h-[600px] rounded-xl overflow-hidden"
						>
							<Image
								src="/images/anil-sharma-oNXMhtKKFec-unsplash.jpg"
								alt="Culinary Journey"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

