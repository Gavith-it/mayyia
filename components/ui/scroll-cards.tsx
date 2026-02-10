"use client";

import { FC } from "react";
import Image from "next/image";

// Types
export interface iCardItem {
	title: string;
	description: string;
	tag: string;
	src: string;
	link: string;
	color: string;
	textColor: string;
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
	i: number;
	src: string;
}

// Components
const Card: FC<iCardProps> = ({
	title,
	description,
	color,
	textColor,
	i,
	src,
}) => {
	return (
		<div 
			className="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4"
			style={{ zIndex: i + 1 }}
		>
			<div
				className="relative flex flex-col md:flex-row h-[600px] w-full max-w-[900px] md:h-[500px] 
				items-stretch mx-auto shadow-2xl rounded-xl overflow-hidden"
			>
				{/* Left Side - Image (50%) */}
				<div className="relative w-full md:w-1/2 h-[300px] md:h-full overflow-hidden" style={{ backgroundColor: '#000000' }}>
					<Image
						className="w-full h-full object-cover"
						src={src}
						alt={title}
						fill
						sizes="(max-width: 768px) 100vw, 1200px"
						quality={92}
						priority={i === 0}
					/>
					{/* Radial gradient overlay - keeps center subject visible, makes edges pure black */}
					<div 
						className="absolute inset-0"
						style={{ 
							backgroundColor: '#000000',
							maskImage: 'radial-gradient(ellipse 70% 70% at center, transparent 50%, black 80%)',
							WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, transparent 50%, black 80%)'
						}} 
					/>
				</div>

				{/* Right Side - Text Content (50%) */}
				<div
					className="relative w-full md:w-1/2 flex flex-col items-center justify-center 
					py-12 px-8 md:px-12"
					style={{ backgroundColor: '#000000' }}
				>
					<span className="font-bold relative text-4xl md:text-6xl mb-4">
						<span
							className="relative font-playfair font-black tracking-tight text-center block"
							style={{ color: textColor }}
						>
							{title}
						</span>
					</span>
					<div
						className="font-montserrat text-base md:text-xl font-medium text-center 
						lowercase tracking-wide max-w-md"
						style={{ lineHeight: 1.5, color: textColor }}
					>
						{description}
					</div>
				</div>
			</div>
		</div>
	);
};

/**
 * CardSlide component displays a series of cards in a vertical scroll layout
 * Each card contains a title, description, and decorative elements
 */
interface iCardSlideProps {
	items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
	return (
		<div className="relative">
			{items.map((project, i) => {
				return <Card key={`p_${i}`} {...project} i={i} />;
			})}
		</div>
	);
};

export { CardsParallax };

