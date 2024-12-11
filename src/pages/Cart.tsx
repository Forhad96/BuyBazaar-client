import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import generateImageUrl from '@/utils/generateImageUrl'
import SectionHeader from '@/components/Shared/SectionHeader'

// add demo cart item array
const cartItems = [
    {
        id: 1,
        name: 'Product 1',
        price: 19.99,
        quantity: 2,
    },
    {
        id: 2,
        name: 'Product 2',
        price: 24.99,
        quantity: 1,
    },
]

export default function Cart() {
    const [cart, setCart] = useState([  ...cartItems ]);
  if (cart.length === 0) {
    return (

      <div className="container mx-auto px-4 py-8">
      {/* <SectionTitle>Your Cart</SectionTitle> */}
      <SectionHeader title='Your Cart'/>
      <p className="text-center">Your cart is empty. <Link to="/" className="text-purple-600 hover:underline">Continue shopping</Link></p>
    </div>
    )
  }

  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <div className="w-24 h-24 relative mr-4">
                  <img src={generateImageUrl()} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                    //   onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="bg-gray-200 px-2 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                    <button
                    //   onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                //   onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$50</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$80</span>
              </div>
            </div>
            <button
            //   onClick={handleCheckout}
            //   disabled={checkoutStatus !== 'idle'}
              className="w-full mt-4 bg-gradient-purple-to-pink text-white font-semibold py-2 px-4 rounded-full hover:opacity-90 transition-all duration-300 disabled:opacity-50"
            >
                Proceed to Checkout
              {/* {checkoutStatus === 'idle' && 'Proceed to Checkout'}
              {checkoutStatus === 'processing' && 'Processing...'}
              {checkoutStatus === 'success' && 'Order Placed!'}
              {checkoutStatus === 'error' && 'Error. Try Again'} */}
            </button>
          </div>
        </div>
      </div>

  )
}

