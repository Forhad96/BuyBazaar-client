
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Buy Bazaar</h3>
            <p className="mb-4">Your one-stop shop for all things trendy and tech.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Youtube size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors duration-300">Home</Link></li>
              <li><Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors duration-300">Shop</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors duration-300">Categories</Link></li>
              <li><Link to="/flash-sales" className="text-muted-foreground hover:text-primary transition-colors duration-300">Flash Sales</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact Us</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors duration-300">FAQ</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors duration-300">Shipping</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors duration-300">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with our latest offers and products.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground"
              />
              <button
                type="submit"
                className="bg-gradient-purple-to-pink text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p>&copy; {new Date().getFullYear()} Buy Bazaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

