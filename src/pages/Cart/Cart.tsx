import { Trash2 } from "lucide-react";

import { Button } from "../../components/ui/button";
import SectionHeader from "@/components/Shared/SectionHeader";
import { Link } from "react-router-dom";
// import { useCart } from "@/context/CartContext";

const cartItems = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    quantity: 2,
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    quantity: 1,
  },
];
export default function CartPage() {
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <SectionHeader title="Your Cart" />
        <p className="text-center">
          Your cart is empty.{" "}
          <Link to="/" className="text-purple-600 hover:underline">
            Continue shopping
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader title="Your Cart" />
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <div className="w-24 h-24 relative mr-4">
                <img
                  src="/placeholder.svg"
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    // onClick={() =>
                    //   updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    // }
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    // onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              <Button
                variant="ghost"
                // onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            {/* <span>${totalPrice.toFixed(2)}</span> */}
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              {/* <span>${totalPrice.toFixed(2)}</span> */}
            </div>
          </div>
          <Button asChild className="w-full mt-4 bg-gradient-purple-to-pink">
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
