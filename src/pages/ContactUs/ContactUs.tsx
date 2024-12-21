import { useState } from 'react'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { Textarea } from '../../components/ui/textarea'
import SectionHeader from '@/components/Shared/SectionHeader'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (

      <div className="container mx-auto px-4 py-8">
        {/* <SectionTitle>Contact Us</SectionTitle> */}
        <SectionHeader title='Contact Us'/>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="mt-1"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-purple-to-pink">Send Message</Button>
          </form>
        </div>
      </div>
  )
}

