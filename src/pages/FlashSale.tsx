
import ProductCard from '@/components/product/ProductCard'
import { useState, useEffect } from 'react'
const flashSaleProducts = [
  { id: 1, name: 'Wireless Earbuds', price: 79.99, salePrice: 59.99, image: '/placeholder.svg' },
  { id: 2, name: 'Smartphone', price: 599.99, salePrice: 499.99, image: '/placeholder.svg' },
  { id: 3, name: 'Laptop', price: 999.99, salePrice: 849.99, image: '/placeholder.svg' },
  { id: 4, name: 'Smartwatch', price: 199.99, salePrice: 149.99, image: '/placeholder.svg' },
]

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Flash Sale</h1>
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-purple-600  animate-pulse">
            Ends in: {formatTime(timeLeft)}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashSaleProducts.map(product => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
              </div>
            </div>
          ))}
        </div>
      </div>

  )
}

