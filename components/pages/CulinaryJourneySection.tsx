'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { IMAGE_ASSETS } from '@/lib/image-assets'

export default function CulinaryJourneySection() {
	return (
		<section className="section-padding bg-beige relative overflow-hidden">
			<div className="absolute inset-0 opacity-[0.06] pointer-events-none">
				<div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#C7A24B' }}></div>
				<div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#C7A24B' }}></div>
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
					<div className="section-subtitle">Our Process</div>
					<h2 className="section-heading-light text-left">
						Discipline is Our{' '}
						<span className="gradient-text">Signature Ingredient</span>
					</h2>
					<p className="section-description-light text-left mb-6">
						From the first enquiry to the final plate served, our process is built on structure, transparency, and zero compromise.
					</p>
					<div className="space-y-6">
						<div className="premium-card">
							<h3 className="text-xl font-playfair text-charcoal mb-2 flex items-center">
								<span className="w-8 h-8 rounded-full bg-brandGold flex items-center justify-center text-offwhite font-bold mr-3">1</span>
								Personalised Consultation
							</h3>
							<p className="text-muted text-sm leading-relaxed ml-11">
								Every menu begins with a conversation—about your event, your culture, and your guests.
							</p>
						</div>
						<div className="premium-card">
							<h3 className="text-xl font-playfair text-charcoal mb-2 flex items-center">
								<span className="w-8 h-8 rounded-full bg-brandGold flex items-center justify-center text-offwhite font-bold mr-3">2</span>
								Tailored Menu Design
							</h3>
							<p className="text-muted text-sm leading-relaxed ml-11">
								From flavour palettes to plating styles, everything is customised.
							</p>
						</div>
						<div className="premium-card">
							<h3 className="text-xl font-playfair text-charcoal mb-2 flex items-center">
								<span className="w-8 h-8 rounded-full bg-brandGold flex items-center justify-center text-offwhite font-bold mr-3">3</span>
								Centralised Culinary Execution
							</h3>
							<p className="text-muted text-sm leading-relaxed ml-11">
								Our kitchens operate at scale but never lose sight of precision.
							</p>
						</div>
						<div className="premium-card">
							<h3 className="text-xl font-playfair text-charcoal mb-2 flex items-center">
								<span className="w-8 h-8 rounded-full bg-brandGold flex items-center justify-center text-offwhite font-bold mr-3">4</span>
								On-Ground Perfection
							</h3>
							<p className="text-muted text-sm leading-relaxed ml-11">
								From logistics to service teams, our event-day execution is seamless.
							</p>
						</div>
					</div>
					<p className="text-brandGold font-semibold mt-6 text-center">
						We don't outsource quality. We engineer it.
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
								src={IMAGE_ASSETS.about.culinary}
								alt="Our Process - Culinary excellence"
								fill
								sizes="(max-width: 768px) 100vw, 1200px"
								className="object-cover"
								quality={95}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

