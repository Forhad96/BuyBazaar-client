"use client"

import { useState, useEffect } from 'react'

import { Search } from 'lucide-react'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])


  useEffect(() => {
    if (query.length > 2) {
      // In a real application, you would make an API call here to get search suggestions
      const fakeSuggestions = ['Wireless Earbuds', 'Smartphone', 'Laptop', 'Smartwatch'].filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      )
      setSuggestions(fakeSuggestions)
    } else {
      setSuggestions([])
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
    //   router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <button type="submit" className="absolute right-0 top-1/2 flex items-center justify-center bg-gradient-purple-to-pink h-full w-12 hover:opacity-80 rounded-r-full transform -translate-y-1/2">
        <Search className="w-5 h-5 text-white" />
      </button>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(suggestion)
                // router.push(`/search?q=${encodeURIComponent(suggestion)}`)
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </form>
  )
}

