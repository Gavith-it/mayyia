'use client'

import { motion } from 'framer-motion'
import { CardsParallax, type iCardItem } from '@/components/ui/scroll-cards'

const signatureDishes: iCardItem[] = [
	{
		title: 'Truffle Risotto',
		description: 'Creamy arborio rice with black truffle and parmesan, a timeless classic',
		tag: 'signature',
		src: '/images/anil-sharma-DKnqF7U2Aus-unsplash.jpg',
		link: '/menu',
		color: '#0a0a0a',
		textColor: '#f4d03f',
	},
	{
		title: 'Wagyu Steak',
		description: 'Premium A5 wagyu with seasonal vegetables, perfectly seared to perfection',
		tag: 'signature',
		src: '/images/anil-sharma-fImNmaN73zo-unsplash.jpg',
		link: '/menu',
		color: '#1a1a1a',
		textColor: '#ffffff',
	},
	{
		title: 'Lobster Thermidor',
		description: 'Fresh lobster in creamy cognac sauce, a French culinary masterpiece',
		tag: 'signature',
		src: '/images/anil-sharma-oNXMhtKKFec-unsplash.jpg',
		link: '/menu',
		color: '#0a0a0a',
		textColor: '#f4d03f',
	},
	{
		title: 'Chocolate Soufflé',
		description: 'Warm chocolate soufflé with vanilla ice cream, a sweet finale',
		tag: 'signature',
		src: '/images/anil-sharma-ynt5uoi4bTE-unsplash.jpg',
		link: '/menu',
		color: '#1a1a1a',
		textColor: '#ffffff',
	},
	{
		title: 'Seafood Platter',
		description: 'An exquisite selection of fresh seafood, prepared with Mediterranean flair',
		tag: 'signature',
		src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
		link: '/menu',
		color: '#0a0a0a',
		textColor: '#f4d03f',
	},
]

export default function SignatureSection() {
	return (
		<section className="relative bg-dark-900">
			<div className="container-custom py-20">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8 }}
					className="section-title mb-16"
				>
					<div className="section-subtitle">Signature</div>
					<h2 className="section-heading">
						Chef's <span className="gradient-text">Specialties</span>
					</h2>
					<p className="section-description">
						Experience our master chef's most celebrated creations, each dish a testament to culinary artistry.
					</p>
				</motion.div>
			</div>
			
			{/* Cards container - full width for sticky effect */}
			<div className="w-full relative">
				<CardsParallax items={signatureDishes} />
			</div>
		</section>
	)
}

