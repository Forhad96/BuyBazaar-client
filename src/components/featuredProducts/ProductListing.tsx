

import generateImageUrl from '@/utils/generateImageUrl'
import { useState, useEffect } from 'react'


const products = [
  { id: 1, name: 'Wireless Earbuds', price: 79.99, image: '/placeholder.svg' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: '/placeholder.svg' },
  { id: 3, name: 'Bluetooth Speaker', price: 59.99, image: '/placeholder.svg' },
  { id: 4, name: 'Laptop Stand', price: 29.99, image: '/placeholder.svg' },
  { id: 5, name: 'Phone Case', price: 19.99, image: '/placeholder.svg' },
  { id: 6, name: 'Portable Charger', price: 39.99, image: '/placeholder.svg' },
  { id: 7, name: 'Wireless Mouse', price: 24.99, image: '/placeholder.svg' },
  { id: 8, name: 'USB-C Hub', price: 49.99, image: '/placeholder.svg' },
]

export default function ProductListing() {
  const [visibleProducts, setVisibleProducts] = useState(4)

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => Math.min(prevCount + 4, products.length))
  }

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMoreProducts()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-teal-600 text-transparent bg-clip-text">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, visibleProducts).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <img
                  src={generateImageUrl()}
                  alt={product.name}
                  className=" w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-2 px-4 rounded-full hover:opacity-90 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {visibleProducts < products.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreProducts}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

