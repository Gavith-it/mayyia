'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiCoffee, FiHeart, FiAward } from 'react-icons/fi'

const features = [
	{
		icon: FiAward,
		title: 'Gourmet cuisine',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis.',
		image: '/images/anil-sharma-DKnqF7U2Aus-unsplash.jpg',
	},
	{
		icon: FiCoffee,
		title: 'Modern catering',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis.',
		image: '/images/anil-sharma-fImNmaN73zo-unsplash.jpg',
	},
	{
		icon: FiHeart,
		title: 'The art of serving',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque perspiciatis.',
		image: '/images/anil-sharma-ynt5uoi4bTE-unsplash.jpg',
	},
]

export default function CraftingMemoriesSection() {
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
					<div className="section-subtitle mb-4">About Us</div>
					<h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
						Crafting culinary <span className="gradient-text">memories</span>
					</h2>
					<p className="text-lg text-gray-300 max-w-3xl mx-auto">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="group"
						>
							<div className="premium-card h-full">
								{/* Image */}
								<div className="relative h-64 mb-6 rounded-lg overflow-hidden">
									<Image
										src={feature.image}
										alt={feature.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
										className="object-cover transition-transform duration-700 group-hover:scale-110"
										quality={92}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
									{/* Icon */}
									<div className="absolute top-4 right-4">
										<div className="w-16 h-16 rounded-full bg-gold-400/20 backdrop-blur-sm border border-gold-400/30 flex items-center justify-center">
											<feature.icon className="w-8 h-8 text-gold-400" />
										</div>
									</div>
								</div>

								{/* Content */}
								<h3 className="text-2xl font-playfair font-bold text-white mb-4">
									{feature.title}
								</h3>
								<p className="text-gray-400 leading-relaxed">
									{feature.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

