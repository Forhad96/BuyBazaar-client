"use client"

import { useState} from 'react'

import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'

const products = [
  { id: 1, name: 'Wireless Earbuds', price: 79.99, category: 'Audio', brand: 'TechSound', image: '/placeholder.svg' },
  { id: 2, name: 'Smartphone', price: 599.99, category: 'Phones', brand: 'Gadgetix', image: '/placeholder.svg' },
  { id: 3, name: 'Laptop', price: 999.99, category: 'Computers', brand: 'Comptech', image: '/placeholder.svg' },
  { id: 4, name: 'Smartwatch', price: 199.99, category: 'Wearables', brand: 'Gadgetix', image: '/placeholder.svg' },
  { id: 5, name: 'Bluetooth Speaker', price: 89.99, category: 'Audio', brand: 'TechSound', image: '/placeholder.svg' },
  { id: 6, name: 'Tablet', price: 349.99, category: 'Computers', brand: 'Gadgetix', image: '/placeholder.svg' },
  // Add more products here...
]

const categories = ['Audio', 'Phones', 'Computers', 'Wearables']
const brands = ['TechSound', 'Gadgetix', 'Comptech']

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('price-asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const productsPerPage = 12

  const filteredProducts = products
    .filter(product => 
      (selectedCategories.length === 0 || selectedCategories.includes(product.category || '')) &&
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand || '')) &&
      product.price >= priceRange[0] && product.price <= priceRange[1] &&
      (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name)
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name)
      return 0
    })

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Discover Our Products
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Filters</h2>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Search</h3>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Price Range</h3>
                <Slider
                  min={0}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Categories</h3>
                {categories.map(category => (
                  <div key={category} className="flex items-center mb-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => {
                        setSelectedCategories(prev => 
                          checked
                            ? [...prev, category]
                            : prev.filter(c => c !== category)
                        )
                      }}
                    />
                    <label htmlFor={`category-${category}`} className="ml-2">{category}</label>
                  </div>
                ))}
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Brands</h3>
                {brands.map(brand => (
                  <div key={brand} className="flex items-center mb-2">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={(checked) => {
                        setSelectedBrands(prev => 
                          checked
                            ? [...prev, brand]
                            : prev.filter(b => b !== brand)
                        )
                      }}
                    />
                    <label htmlFor={`brand-${brand}`} className="ml-2">{brand}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <span className="text-lg font-semibold">{filteredProducts.length} products</span>
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
            {/* <ProductGrid products={currentProducts} /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  variant={currentPage === page ? "default" : "outline"}
                  className="mx-1 bg-gradient-purple-to-pink"
                >
                  {page}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

  )
}

