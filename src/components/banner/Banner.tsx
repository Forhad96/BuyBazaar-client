import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-75"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">Welcome to Buy </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">Discover amazing products with vibrant style</p>
        <Link
          to="/shop"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 animate-fade-in-up animation-delay-600"
        >
          Shop Now
        </Link>
      </div>
    </section>
  )
}



// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'

// export default function HeroSection() {
//   const [currentBackground, setCurrentBackground] = useState(0)
//   const backgrounds = [
//     'https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     '/hero-bg-3.jpg'
//   ]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBackground((prev) => (prev + 1) % backgrounds.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
//       {backgrounds.map((bg, index) => (
//         <div
//           key={bg}
//           className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
//             index === currentBackground ? 'opacity-100' : 'opacity-0'
//           }`}
//           style={{ backgroundImage: `url(${bg})` }}
//         />
//       ))}
//       <div className="absolute inset-0 bg-black bg-opacity-50" />
//       <div className="relative z-10 text-center text-white">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-7xl font-bold mb-4"
//         >
//           Welcome to BuyBazaar
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-xl md:text-2xl mb-8"
//         >
//           Discover amazing products with vibrant style
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <Link
//             to="/shop"
//             className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
//           >
//             Shop Now
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

