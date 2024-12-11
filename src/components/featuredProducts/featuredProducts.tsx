import generateImageUrl from "@/utils/generateImageUrl"
import { Link } from "react-router-dom"

const featuredProducts = [
  { id: 1, name: 'Wireless Earbuds', price: 79.99, image: 'https://images.pexels.com/photos/6889216/pexels-photo-6889216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: generateImageUrl()},
  { id: 3, name: 'Bluetooth Speaker', price: 59.99, image: generateImageUrl()},
  { id: 4, name: 'Laptop Stand', price: 29.99, image: generateImageUrl()},
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <Link to={`/product/${product.id}`} className="mt-2 inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

