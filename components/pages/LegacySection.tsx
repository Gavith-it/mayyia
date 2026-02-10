'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { IMAGE_ASSETS } from '@/lib/image-assets'

export default function LegacySection() {
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
					<div className="section-subtitle mb-4">Our Legacy</div>
					<h2 className="section-heading-light">
						The Origin of Purity and <span className="gradient-text">Purpose</span>
					</h2>
					<p className="section-description-light max-w-4xl mx-auto">
						Sri Mayyia Caterers was founded with a singular vision—to elevate the act of feeding into an offering of love, devotion, and discipline. This vision took shape in the hands of Sri. K Ramakrishna Mayyia, a culinary pioneer whose devotion to purity, process, and hospitality laid the foundation for what would become one of India's most revered catering institutions.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="space-y-6"
					>
						<p className="text-muted leading-relaxed">
							His meticulous attention to ritualistic precision and service integrity earned him not just clients—but lifelong relationships. What began as a service to temples and small community gatherings is today a name trusted across cities and generations for hosting thousands with unparalleled grace and grandeur.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative h-[400px] rounded-xl overflow-hidden"
					>
						<Image
							src={IMAGE_ASSETS.about.legacy}
							alt="Legacy"
							fill
							sizes="(max-width: 1024px) 100vw, 960px"
							className="object-cover"
							quality={92}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
					</motion.div>
				</div>

				{/* Leadership Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12"
				>
					<div className="section-subtitle mb-4">Leadership</div>
					<h2 className="section-heading-light">
						The Pillars of <span className="gradient-text">Progress</span>
					</h2>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8 mb-12">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="premium-card"
					>
						<h3 className="text-2xl font-playfair font-bold text-charcoal mb-3">
							Sri KR Ananth Mayyia
						</h3>
						<div className="text-brandGold font-semibold mb-4">
							Operations & Scale
						</div>
						<p className="text-muted leading-relaxed">
							Carrying the legacy forward with foresight and fortitude, Sri K Ramakrishna Mayyia brought systematic excellence to the brand. Under his leadership, Sri Mayyia grew from a respected name in Bangalore to a regional powerhouse capable of executing high-volume events with immaculate detail. His deep understanding of logistics, client relationships, and quality control transformed the business into a well-oiled legacy enterprise.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="premium-card"
					>
						<h3 className="text-2xl font-playfair font-bold text-charcoal mb-3">
							Mr. Akash Mayyia
						</h3>
						<div className="text-brandGold font-semibold mb-4">
							Modern Vision & Experience
						</div>
						<p className="text-muted leading-relaxed">
							As the third-generation entrepreneur, Akash Mayyia brings a refined, contemporary lens to the family legacy. With a background in luxury hospitality and a passion for innovation, he has expanded the brand's offering to include fusion cuisines, curated menus, modern presentation, and a seamless digital-first client experience. His leadership blends the grace of old-world traditions with the demands of new-age expectations.
						</p>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					<p className="text-xl text-muted font-playfair italic">
						Together, they ensure that Sri Mayyia stands not just as a service—but as an experience.
					</p>
				</motion.div>
			</div>
		</section>
	)
}
