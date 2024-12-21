/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from 'react'

import { Button } from '../../components/ui/button'
import { ShoppingCart, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '@/components/Shared/SectionHeader'
import { useWishlist } from '@/context/WishlistContext'
import { useCart } from '@/context/CartContext'
import generateImageUrl from '@/utils/generateImageUrl'


export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()
  const [addedToCart, setAddedToCart] = useState<number | null>(null)

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    })
    setAddedToCart(product.id)
    setTimeout(() => setAddedToCart(null), 2000)
  }

  return (
      <div className="container mx-auto px-4 py-8">
        {/* <SectionTitle>My Wishlist</SectionTitle> */}
        <SectionHeader title='My Wishlist' alignment='center'/>
        {wishlist.length === 0 ? (
          <p className="text-center text-gray-600">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={generateImageUrl()}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                  <div className="flex justify-between items-center">
                    <Button
                      onClick={() => handleAddToCart(product)}
                      variant={addedToCart === product.id ? "secondary" : "default"}
                      className="flex items-center bg-gradient-purple-to-pink"
                      disabled={addedToCart === product.id}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {addedToCart === product.id ? 'Added' : 'Add to Cart'}
                    </Button>
                    <Button
                      onClick={() => removeFromWishlist(product.id)}
                      variant="outline"
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

  )
}

