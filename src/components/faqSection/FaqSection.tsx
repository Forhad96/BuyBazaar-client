"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all unused items in their original packaging.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders.'
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination.'
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier\'s website.'
  },
  {
    question: 'Are your products covered by warranty?',
    answer: 'Most of our products come with a manufacturer\'s warranty. The duration and coverage may vary depending on the product. Please check the product description for specific warranty information.'
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
  )
}

