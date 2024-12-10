import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import SectionHeader from '../Shared/SectionHeader'
import Container from '../Shared/Container'

interface FAQItem {
  question: string
  answer: string
  isOpen: boolean
}

export default function FAQSection() {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "What Do I Need To Rent A Car?",
      answer: "Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs",
      isOpen: true
    },
    {
      question: "How Old Do I Need To Be To Rent A Car?",
      answer: "The minimum age requirement for renting a car is typically 21 years old. However, some locations may require you to be 25 or older to rent certain luxury or specialty vehicles.",
      isOpen: false
    },
    {
      question: "Can I Rent A Car With A Debit Card?",
      answer: "Yes, many of our locations accept debit cards for car rentals. However, additional documentation and a credit check may be required. We recommend checking with your specific rental location for their debit card policy.",
      isOpen: false
    }
  ])

  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false
    })))
  }

  return (
      <div className="min-h-screen bg-[#fff5f5] rounded-2xl p-8 md:p-16">
      <Container>
        <SectionHeader size='large' alignment='left' title="Everything you need to know about our services" subtitle="Frequently Asked Questions" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image Composition */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            {/* Background images */}
            <img src='https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/our-faqs-img-1.jpg' className="absolute top-0 left-0 w-2/3 h-2/3 bg-sky-100 rounded-lg transform -rotate-6"></img>
            <img src='https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/our-faqs-img-2.jpg' className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gray-200 rounded-lg transform rotate-6"></img>
            
            {/* Car image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/our-faqs-car-img.png" 
                alt="Luxury car"
                className="w-full h-auto max-w-[80%] object-contain z-10"
              />
            </div>
          </div>

          {/* Right side - FAQ */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-red-500 font-medium">★ Frequently Asked Questions</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Everything you need to know about our services
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-gray-200 last:border-0"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xl font-semibold">{faq.question}</span>
                    {faq.isOpen ? (
                      <ChevronUp className="w-6 h-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    )}
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      faq.isOpen ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

