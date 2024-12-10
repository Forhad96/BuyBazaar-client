import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-75"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">Welcome to VibrantShop</h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">Discover amazing products with vibrant style</p>
        <Link
          to="/shop"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 animate-fade-in-up animation-delay-600"
        >
          Shop Now
        </Link>
      </div>
    </section>
  )
}

