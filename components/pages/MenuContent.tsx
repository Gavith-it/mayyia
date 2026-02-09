'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const menuCategories = [
  {
    name: 'Starters',
    items: [
      { name: 'Truffle Arancini', price: '$24', description: 'Crispy risotto balls with black truffle and parmesan' },
      { name: 'Wagyu Tartare', price: '$38', description: 'Premium wagyu beef with quail egg and capers' },
      { name: 'Lobster Bisque', price: '$32', description: 'Creamy lobster soup with cognac and herbs' },
      { name: 'Foie Gras', price: '$45', description: 'Pan-seared foie gras with fig compote' },
      { name: 'Oysters Rockefeller', price: '$28', description: 'Fresh oysters with spinach and hollandaise' },
      { name: 'Caviar Selection', price: '$85', description: 'Premium caviar with blinis and crème fraîche' },
    ],
  },
  {
    name: 'Main Course',
    items: [
      { name: 'A5 Wagyu Steak', price: '$185', description: 'Premium A5 wagyu with seasonal vegetables' },
      { name: 'Dover Sole', price: '$68', description: 'Pan-fried Dover sole with lemon butter' },
      { name: 'Rack of Lamb', price: '$72', description: 'Herb-crusted lamb with mint jus' },
      { name: 'Duck Confit', price: '$58', description: 'Slow-cooked duck leg with orange glaze' },
      { name: 'Lobster Thermidor', price: '$85', description: 'Fresh lobster in creamy cognac sauce' },
      { name: 'Truffle Risotto', price: '$52', description: 'Creamy arborio rice with black truffle' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Chocolate Soufflé', price: '$28', description: 'Warm chocolate soufflé with vanilla ice cream' },
      { name: 'Crème Brûlée', price: '$22', description: 'Classic vanilla crème brûlée' },
      { name: 'Tiramisu', price: '$24', description: 'Traditional Italian dessert with espresso' },
      { name: 'Apple Tarte Tatin', price: '$26', description: 'Caramelized apple tart with vanilla ice cream' },
      { name: 'Cheese Selection', price: '$32', description: 'Artisan cheeses with honey and nuts' },
      { name: 'Grand Marnier Soufflé', price: '$30', description: 'Fluffy soufflé with orange liqueur' },
    ],
  },
  {
    name: 'Wine & Beverages',
    items: [
      { name: 'Champagne Selection', price: '$120+', description: 'Premium champagne by the bottle' },
      { name: 'Wine Pairing', price: '$65', description: 'Curated wine selection per course' },
      { name: 'Craft Cocktails', price: '$18', description: 'Signature cocktails by our mixologist' },
      { name: 'Whiskey Collection', price: '$25+', description: 'Premium whiskey selection' },
      { name: 'Non-Alcoholic Pairing', price: '$35', description: 'Curated non-alcoholic beverages' },
    ],
  },
]

export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="section-padding bg-beige">
      <div className="container-custom">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-brandGold text-charcoal shadow-lg'
                  : 'bg-offwhite border border-borderLight text-charcoal hover:border-brandGold'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuCategories[activeCategory].items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="premium-card group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-playfair text-charcoal group-hover:text-maroon transition-colors">
                  {item.name}
                </h3>
                <span className="text-brandGold font-bold text-lg">{item.price}</span>
              </div>
              <p className="text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
