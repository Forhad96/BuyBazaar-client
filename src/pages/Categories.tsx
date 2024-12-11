
import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import ProductCard from '@/components/product/ProductCard'

const categories = [
  { id: 'electronics', name: 'Electronics' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'books', name: 'Books' },
  { id: 'home', name: 'Home & Garden' },
]

const products = [
  { id: 1, name: 'Wireless Earbuds', price: 79.99, category: 'electronics', image: '/placeholder.svg' },
  { id: 2, name: 'Smartphone', price: 599.99, category: 'electronics', image: '/placeholder.svg' },
  { id: 3, name: 'T-shirt', price: 19.99, category: 'clothing', image: '/placeholder.svg' },
  { id: 4, name: 'Jeans', price: 49.99, category: 'clothing', image: '/placeholder.svg' },
  { id: 5, name: 'Novel', price: 14.99, category: 'books', image: '/placeholder.svg' },
  { id: 6, name: 'Cookbook', price: 24.99, category: 'books', image: '/placeholder.svg' },
  { id: 7, name: 'Plant Pot', price: 9.99, category: 'home', image: '/placeholder.svg' },
  { id: 8, name: 'Throw Pillow', price: 29.99, category: 'home', image: '/placeholder.svg' },
]

export default function Categories() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 600])
  const [sortBy, setSortBy] = useState('price-asc')

  const filteredProducts = products
    .filter(product => 
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name)
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name)
      return 0
    })

  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Categories</h3>
              {categories.map(category => (
                <div key={category.id} className="flex items-center mb-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => {
                      setSelectedCategories(prev => 
                        checked 
                          ? [...prev, category.id]
                          : prev.filter(id => id !== category.id)
                      )
                    }}
                  />
                  <label htmlFor={category.id} className="ml-2">{category.name}</label>
                </div>
              ))}
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <Slider
                min={0}
                max={600}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <span>{filteredProducts.length} products</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded px-2 py-1"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

  )
}

