"use client"

import { useState, useEffect, useRef } from 'react'
import { MessageSquare, Send, X } from 'lucide-react'

type Message = {
  id: number
  text: string
  sender: 'user' | 'support'
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setMessages([
        { id: 1, text: 'Hello! How can I assist you today?', sender: 'support' }
      ])
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      const userMessage: Message = { id: Date.now(), text: input, sender: 'user' }
      setMessages(prev => [...prev, userMessage])
      setInput('')
      
      // Simulate support response
      setTimeout(() => {
        const supportMessage: Message = { id: Date.now(), text: 'Thank you for your message. Our team will get back to you shortly.', sender: 'support' }
        setMessages(prev => [...prev, supportMessage])
      }, 1000)
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-3 shadow-lg"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Live Chat Support</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`mb-2 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-r-md"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

