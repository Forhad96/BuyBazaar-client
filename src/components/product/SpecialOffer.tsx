import { Link } from "react-router-dom"

const specialOffers = [
  { id: 1, name: 'Summer Sale', description: 'Up to 50% off on summer essentials', image: '/placeholder.svg' },
  { id: 2, name: 'New Arrivals', description: 'Check out our latest products', image: '/placeholder.svg' },
]

export default function SpecialOffer() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialOffers.map((offer) => (
            <div key={offer.id} className="bg-white bg-opacity-20 rounded-lg overflow-hidden shadow-lg">
              <img src={offer.image} alt={offer.name} width={600} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{offer.name}</h3>
                <p className="mb-4">{offer.description}</p>
                <Link to={`/offers/${offer.id}`} className="inline-block bg-yellow-300 text-purple-600 px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

