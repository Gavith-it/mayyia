'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WhatWeDoSection() {
	return (
		<section className="section-padding bg-dark-900">
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
									src="/images/anil-sharma-DKnqF7U2Aus-unsplash.jpg"
									alt="Culinary Excellence"
									fill
									sizes="(max-width: 768px) 50vw, 25vw"
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05, y: -10 }}
								transition={{ duration: 0.3, delay: 0.1 }}
								className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mt-8"
							>
								<Image
									src="/images/anil-sharma-fImNmaN73zo-unsplash.jpg"
									alt="Beautiful Experiences"
									fill
									sizes="(max-width: 768px) 50vw, 25vw"
									className="object-cover"
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
						<div className="section-subtitle">What we Do</div>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight">
							We craft and preserve beautiful, enduring{' '}
							<span className="gradient-text">experiences</span>
						</h2>
						<p className="text-lg text-gray-300 leading-relaxed">
							Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt.
						</p>
						<p className="text-gray-400 leading-relaxed">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
