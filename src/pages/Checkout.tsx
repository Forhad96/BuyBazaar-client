
import { useState } from 'react'

import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

import { motion, AnimatePresence } from 'framer-motion'
import { CreditCard, Banknote, Wallet } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import SectionHeader from '@/components/Shared/SectionHeader'

type FormData = {
  firstName: string
  lastName: string
  email: string
  address: string
  city: string
  country: string
  zipCode: string
}

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [paymentMethod, setPaymentMethod] = useState<string>('credit_card')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }))
  }

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required'
      if (!formData.lastName) newErrors.lastName = 'Last name is required'
      if (!formData.email) newErrors.email = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    } else if (step === 2) {
      if (!formData.address) newErrors.address = 'Address is required'
      if (!formData.city) newErrors.city = 'City is required'
      if (!formData.country) newErrors.country = 'Country is required'
      if (!formData.zipCode) newErrors.zipCode = 'Zip code is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (validateForm()) {
      if (step < 3) {
        setStep(step + 1)
      }
    }
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the order to your backend
      console.log('Order submitted:', { formData, cart, paymentMethod })
      clearCart()
      navigate('/order-confirmation')
    }
  }

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={errors.firstName ? 'border-red-500' : ''}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={errors.lastName ? 'border-red-500' : ''}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div className="mb-4">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <Button onClick={handleNextStep} className="w-full bg-gradient-purple-to-pink">Next</Button>
          </motion.div>
        )
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
            <div className="mb-4">
              <Input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className={errors.address ? 'border-red-500' : ''}
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={errors.city ? 'border-red-500' : ''}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              <div>
                <Input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={errors.country ? 'border-red-500' : ''}
                />
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>
            </div>
            <div className="mb-4">
              <Input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                className={errors.zipCode ? 'border-red-500' : ''}
              />
              {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
            </div>
            <Button onClick={handleNextStep}  className="w-full bg-gradient-purple-to-pink">Next</Button>
          </motion.div>
        )
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="credit_card"
                  name="payment_method"
                  value="credit_card"
                  checked={paymentMethod === 'credit_card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="form-radio h-5 w-5 text-purple-600"
                />
                <label htmlFor="credit_card" className="flex items-center">
                  <CreditCard className="w-6 h-6 mr-2" />
                  Credit Card (Stripe)
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="sslcommerz"
                  name="payment_method"
                  value="sslcommerz"
                  checked={paymentMethod === 'sslcommerz'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="form-radio h-5 w-5 text-purple-600"
                />
                <label htmlFor="sslcommerz" className="flex items-center">
                  <Wallet className="w-6 h-6 mr-2" />
                  SSLCommerz
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="amarpay"
                  name="payment_method"
                  value="amarpay"
                  checked={paymentMethod === 'amarpay'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="form-radio h-5 w-5 text-purple-600"
                />
                <label htmlFor="amarpay" className="flex items-center">
                  <Banknote className="w-6 h-6 mr-2" />
                  Amar Pay
                </label>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <Button onClick={handlePrevStep} className='' variant="secondary">Previous</Button>
              <Button onClick={handleSubmit} className='bg-gradient-purple-to-pink'>Place Order</Button>
            </div>
          </motion.div>
        )
    }
  }

  return (

      <div className="container mx-auto px-4 py-8">
        {/* <SectionTitle>Checkout</SectionTitle> */}
        <SectionHeader title='Checkout'/>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

