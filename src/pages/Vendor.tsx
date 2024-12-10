

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Users, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const vendors = [
  {
    id: 1,
    name: 'TechGadgets Inc.',
    description: 'We provide high-quality tech gadgets and accessories for all your needs.',
    image: '/vendor-1.jpg',
    rating: 4.7,
    followers: 15000,
    products: 120,
  },
  {
    id: 2,
    name: 'FashionForward',
    description: 'Trendy and affordable fashion for every style and occasion.',
    image: '/vendor-2.jpg',
    rating: 4.5,
    followers: 12000,
    products: 250,
  },
  {
    id: 3,
    name: 'HomeEssentials',
    description: 'Everything you need to make your house a home.',
    image: '/vendor-3.jpg',
    rating: 4.8,
    followers: 18000,
    products: 180,
  },
]

export default function Vendor() {
  const [hoveredVendor, setHoveredVendor] = useState<number | null>(null)

  return (

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Vendors</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <motion.div
              key={vendor.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredVendor(vendor.id)}
              onHoverEnd={() => setHoveredVendor(null)}
            >
              <div className="relative h-48">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h2 className="text-white text-2xl font-bold">{vendor.name}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{vendor.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span>{vendor.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-500 mr-1" />
                    <span>{vendor.followers.toLocaleString()} followers</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{vendor.products} products</span>
                  <Link
                    to={`/vendor/${vendor.id}`}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-200"
                  >
                    Visit Shop
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
              {hoveredVendor === vendor.id && (
                <motion.div
                  className="absolute inset-0 bg-purple-600 bg-opacity-90 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Link
                    to={`/vendor/${vendor.id}`}
                    className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    View All Products
                  </Link>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

  )
}

