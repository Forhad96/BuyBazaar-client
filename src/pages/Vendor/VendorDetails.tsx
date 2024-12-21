

import { useState } from 'react'
import { motion } from 'framer-motion'

import { Star, Users, ChevronDown, ChevronUp } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'

const vendor = {
  id: 1,
  name: 'TechGadgets Inc.',
  description: 'We provide high-quality tech gadgets and accessories for all your needs.',
  longDescription: 'TechGadgets Inc. has been at the forefront of consumer electronics since 2010. We pride ourselves on offering a curated selection of the latest and greatest tech products, from smartphones and laptops to smart home devices and audio equipment. Our team of experts rigorously tests each product to ensure it meets our high standards of quality and performance.',
  image: '/vendor-1.jpg',
  rating: 4.7,
  followers: 15000,
  products: [
    { id: 1, name: 'Wireless Earbuds', price: 79.99, image: '/product-1.jpg' },
    { id: 2, name: 'Smartphone', price: 599.99, image: '/product-2.jpg' },
    { id: 3, name: 'Laptop', price: 999.99, image: '/product-3.jpg' },
    { id: 4, name: 'Smartwatch', price: 199.99, image: '/product-4.jpg' },
    { id: 5, name: 'Bluetooth Speaker', price: 89.99, image: '/product-5.jpg' },
    { id: 6, name: 'Tablet', price: 349.99, image: '/product-6.jpg' },
  ],
}

export default function VendorDetails() {
//   const { id } = useParams()
  const [isFollowing, setIsFollowing] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold">{vendor.name}</h1>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-600 mb-2">{vendor.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span>{vendor.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-500 mr-1" />
                    <span>{vendor.followers.toLocaleString()} followers</span>
                  </div>
                  <span>{vendor.products.length} products</span>
                </div>
              </div>
              <motion.button
                onClick={handleFollow}
                className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  isFollowing
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </motion.button>
            </div>
            <div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-200"
              >
                {showDetails ? 'Hide details' : 'Show more details'}
                {showDetails ? (
                  <ChevronUp className="w-4 h-4 ml-1" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-1" />
                )}
              </button>
              {showDetails && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-600"
                >
                  {vendor.longDescription}
                </motion.p>
              )}
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendor.products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
  )
}

