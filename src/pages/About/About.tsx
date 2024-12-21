"use client"

import { motion } from 'framer-motion'

export default function About() {
  return (

      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About BuyBazaar
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              BuyBazaar was founded in 2020 with a simple mission: to provide high-quality products at affordable prices. Our journey began with a small team of passionate individuals who believed in the power of e-commerce to connect people with the products they love.
            </p>
            <p className="text-gray-600">
              Today, we've grown into a thriving online marketplace, serving customers worldwide with a diverse range of products from electronics to fashion, and everything in between.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/about-image-1.jpg"
              alt="BuyBazaar team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">We are committed to offering only the best products to our customers.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">We constantly strive to improve our platform and services.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">Our customers are at the heart of everything we do.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gray-100 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Join Our Team</h2>
          <p className="text-gray-600 text-center mb-4">
            We're always looking for talented individuals to join our growing team. If you're passionate about e-commerce and want to make a difference, we'd love to hear from you!
          </p>
          <div className="text-center">
            <a
              href="/careers"
              className="inline-block bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700 transition-colors duration-300"
            >
              View Open Positions
            </a>
          </div>
        </motion.div>
      </div>

  )
}

