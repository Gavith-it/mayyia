'use client'

import { motion } from 'framer-motion'
import { CardsParallax, type iCardItem } from '@/components/ui/scroll-cards'

const signatureDishes: iCardItem[] = [
	{
		title: 'Signature South Indian Catering',
		description:
			'Traditional South Indian vegetarian cuisine that honours culinary authenticity, from temple-style prasadam to elaborate wedding banquets.',
		tag: 'service',
		src: '/images/anil-sharma-DKnqF7U2Aus-unsplash.jpg',
		link: '/about',
		color: '#0a0a0a',
		textColor: '#f4d03f',
	},
	{
		title: 'Luxury Event Catering',
		description:
			'Multi-cuisine vegetarian menus and impeccably trained hospitality teams for elite private, wedding, and corporate gatherings.',
		tag: 'service',
		src: '/images/anil-sharma-fImNmaN73zo-unsplash.jpg',
		link: '/about',
		color: '#1a1a1a',
		textColor: '#f4d03f',
	},
	{
		title: 'Thematic & Ritual-Based Menus',
		description:
			'Menus designed with religious advisors to honour rituals, fasting guidelines, and ceremonial customs for every auspicious occasion.',
		tag: 'service',
		src: '/images/anil-sharma-oNXMhtKKFec-unsplash.jpg',
		link: '/about',
		color: '#0a0a0a',
		textColor: '#f4d03f',
	},
	{
		title: 'Temple & Community Annadanam',
		description:
			'Disciplined, sanctified large-scale service for temple annadanams and community feeding across South India.',
		tag: 'service',
		src: '/images/anil-sharma-ynt5uoi4bTE-unsplash.jpg',
		link: '/about',
		color: '#1a1a1a',
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
					<div className="section-subtitle">What We Offer</div>
					<h2 className="section-heading">
						Curated <span className="gradient-text">Catering Experiences</span>
					</h2>
					<p className="section-description">
						From sacred rituals to luxury weddings and corporate galas, Sri Mayyia crafts vegetarian catering
						experiences that are rooted in culture and executed with uncompromising precision.
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

