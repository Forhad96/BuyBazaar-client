import { useState, useEffect } from 'react'
import { Smartphone, Laptop, Headphones, Camera, Watch, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom';

type Category = {
  name: string;
  icon: React.ElementType;
  slug: string;
}

const iconMap: { [key: string]: React.ElementType } = {
  Smartphone,
  Laptop,
  Headphones,
  Camera,
  Watch,
  ShoppingBag
}

export default function CategoriesSection() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchCategories = async () => {
      // Simulating an API response
      const response = [
        { name: 'Smartphones', icon: 'Smartphone', slug: 'smartphones' },
        { name: 'Laptops', icon: 'Laptop', slug: 'laptops' },
        { name: 'Audio', icon: 'Headphones', slug: 'audio' },
        { name: 'Cameras', icon: 'Camera', slug: 'cameras' },
        { name: 'Wearables', icon: 'Watch', slug: 'wearables' },
        { name: 'Accessories', icon: 'ShoppingBag', slug: 'accessories' },
      ]
      setCategories(response.map(cat => ({ ...cat, icon: iconMap[cat.icon] })))
    }

    fetchCategories()
  }, [])

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {categories.map((category) => (
            <Link key={category.slug} to={`/categories/${category.slug}`}>
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                {category.icon && <category.icon className="w-12 h-12 mb-4 text-purple-600" />}
                <span className="text-lg font-semibold text-gray-800">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

