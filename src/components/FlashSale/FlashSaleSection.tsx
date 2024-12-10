
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function FlashSaleSection() {
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
    <section className="py-16 bg-gradient-to-r from-orange-400 to-yellow-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Flash Sale</h2>
          <div className="text-3xl font-mono text-white animate-pulse">
            {formatTime(timeLeft)}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Flash sale product cards would go here */}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/flash-sales"
            className="inline-block bg-white text-orange-500 font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View All Flash Sales
          </Link>
        </div>
      </div>
    </section>
  )
}

