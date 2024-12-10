
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
// import { useWishlist } from '../contexts/wishlist-context'
// import { useCart } from '../contexts/cart-context'

type Product = {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
//   const { addToCart } = useCart()

//   const handleWishlistToggle = () => {
//     if (isInWishlist(product.id)) {
//       removeFromWishlist(product.id)
//     } else {
//       addToWishlist(product)
//     }
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       quantity: 1,
//     })
//   }

  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="relative h-48">
          <img
            src={"https://images.pexels.com/photos/6889216/pexels-photo-6889216.jpeg"}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold mb-2">{product.name}</h3>
        </Link>
        <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
        <div className="flex justify-between items-center mt-4">
          <button
            // onClick={handleAddToCart}
            className="bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-full hover:opacity-90 transition-all duration-300"
          >
            Add to Cart
          </button>
          <button
            // onClick={handleWishlistToggle}
            // className={`p-2 rounded-full ${isInWishlist(product.id) ? 'text-destructive' : 'text-muted-foreground'}`}
          >
            <Heart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

