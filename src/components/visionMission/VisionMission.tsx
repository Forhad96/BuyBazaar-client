'use client'

import { useState } from 'react'

type TabContent = {
  title: string
  heading: string
  description: string
  bulletPoints: string[]
}

const tabsContent: Record<string, TabContent> = {
  vision: {
    title: 'Our Vision',
    heading: 'Pioneering excellence in car rental services',
    description: 'We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced vehicle tracking systems, our goal is to make the car rental process seamless and efficient for our customers. Quality is at the heart of everything we do. We maintain a diverse fleet of well-maintained vehicles that meet the highest standards of safety and comfort.',
    bulletPoints: [
      'Our customers are our top priority',
      'Quality is at the heart of everything we do',
      'Every vehicle leaves care looking its absolute best'
    ]
  },
  mission: {
    title: 'Our Mission',
    heading: 'Empowering journeys through exceptional service',
    description: 'Our mission is to provide unparalleled car rental experiences that exceed customer expectations. We strive to offer a diverse range of high-quality vehicles, coupled with seamless booking processes and personalized customer service. By continuously adapting to evolving travel needs, we aim to be the go-to choice for all types of travelers.',
    bulletPoints: [
      'Deliver exceptional customer experiences',
      'Offer a diverse and well-maintained fleet',
      'Continuously innovate our services'
    ]
  },
  approach: {
    title: 'Our Approach',
    heading: 'Innovation meets customer-centric solutions',
    description: 'We take a holistic approach to car rentals, combining cutting-edge technology with a deep understanding of customer needs. Our strategy involves constant refinement of our processes, from booking to return, ensuring each interaction is smooth and satisfying. We also prioritize sustainability, gradually introducing eco-friendly options to our fleet.',
    bulletPoints: [
      'Leverage technology for seamless experiences',
      'Prioritize customer feedback and adapt accordingly',
      'Implement sustainable practices in our operations'
    ]
  }
}

export default function CarRentalHero() {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'approach'>('vision')

  const content = tabsContent[activeTab]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-center gap-4 py-4 px-6 bg-white/95 backdrop-blur-sm">
        {Object.keys(tabsContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as 'vision' | 'mission' | 'approach')}
            className={`px-6 py-2 font-medium rounded-full transition ${
              activeTab === tab
                ? 'bg-[#ff3300] text-white'
                : 'text-black/80 hover:bg-gray-100'
            }`}
          >
            {tabsContent[tab].title}
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 text-[#ff3300]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </div>
            <span className="text-[#ff3300] font-medium">{content.title}</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight">
            {content.heading}
          </h1>
          
          <p className="text-gray-600 leading-relaxed">
            {content.description}
          </p>
          
          <ul className="space-y-4">
            {content.bulletPoints.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#ff3300]/10 flex items-center justify-center">
                  <svg 
                    className="w-3 h-3 text-[#ff3300]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="relative rounded-[2rem] overflow-hidden">
          <img
            src="https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/our-vision-img.jpg"
            alt="Luxury red car on bridge"
            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition duration-500"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-black/0"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-b from-black/50 to-black/0"></div>
        </div>
      </div>
    </div>
  )
}

