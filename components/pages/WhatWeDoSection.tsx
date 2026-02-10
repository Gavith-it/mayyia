'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { IMAGE_ASSETS } from '@/lib/image-assets'

export default function WhatWeDoSection() {
	return (
		<section className="section-padding bg-beige">
			<div className="container-custom">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Images Grid */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative"
					>
						<div className="grid grid-cols-2 gap-4">
							<motion.div
								whileHover={{ scale: 1.05, y: -10 }}
								transition={{ duration: 0.3 }}
								className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden"
							>
								<Image
									src={IMAGE_ASSETS.about.whatWeDo[0]}
									alt="Culinary Excellence"
									fill
									sizes="(max-width: 768px) 100vw, 520px"
									className="object-cover"
									quality={92}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05, y: -10 }}
								transition={{ duration: 0.3, delay: 0.1 }}
								className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mt-8"
							>
								<Image
									src={IMAGE_ASSETS.about.whatWeDo[1]}
									alt="Beautiful Experiences"
									fill
									sizes="(max-width: 768px) 100vw, 520px"
									className="object-cover"
									quality={92}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
							</motion.div>
						</div>
					</motion.div>

					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="space-y-6"
					>
					<div className="section-subtitle">What We Offer</div>
					<h2 className="section-heading-light text-left">
						Curated Catering{' '}
						<span className="gradient-text">Experiences</span>
					</h2>
					<p className="section-description-light text-left">
						We specialize in traditional South Indian vegetarian cuisine that honours culinary authenticity. From temple-style prasadam to elaborate wedding banquets, our preparations are rooted in time-honoured techniques, prepared in sanctified kitchens, and served with devotion.
					</p>
					<div className="space-y-4 mt-6">
						<div className="premium-card">
							<h3 className="text-xl font-playfair text-charcoal mb-2">Signature South Indian Catering</h3>
							<p className="text-muted text-sm leading-relaxed">
								Customizable menus for each region and community tradition • Authentic temple-inspired preparations • Sacred cooking processes with utmost hygiene standards • Traditional service formats including banana-leaf and brassware plating
							</p>
						</div>
						<div className="premium-card">
							<h3 className="text-xl font-playfair text-charcoal mb-2">Luxury Event Catering</h3>
							<p className="text-muted text-sm leading-relaxed">
								Multi-cuisine vegetarian menus (Indian, Continental, Asian, Fusion) • Live stations with gourmet supervision • Curated ingredient sourcing (organic, region-specific, seasonal) • Impeccable hospitality staffing trained for premium events
							</p>
						</div>
						<div className="premium-card">
							<h3 className="text-xl font-playfair text-charcoal mb-2">Thematic and Ritual-Based Menus</h3>
							<p className="text-muted text-sm leading-relaxed">
								Menus designed with families and religious advisors to align with ritualistic requirements, fasting guidelines, and ceremonial customs. We serve Seemantham, Upanayanam, Griha Pravesham, Shubha Muhurthams, Temple Annadanams, and Community Feeding.
							</p>
						</div>
					</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
