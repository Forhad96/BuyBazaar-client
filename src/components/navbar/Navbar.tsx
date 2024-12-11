"use client"

import { useState } from 'react'

import {  ShoppingCart, Menu, X, ChevronDown, Sun, Moon } from 'lucide-react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useTheme } from '../../context/ThemeContext'

const navItems = [
  { 
    name: 'Shop', 
    href: '/vendors',
    megaMenu: [
      {
        title: 'Categories',
        items: [
          { name: 'Electronics', href: '/categories/electronics' },
          { name: 'Clothing', href: '/categories/clothing' },
          { name: 'Home & Garden', href: '/categories/home-garden' },
          { name: 'Sports & Outdoors', href: '/categories/sports-outdoors' },
        ],
      },
      {
        title: 'Featured',
        items: [
          { name: 'New Arrivals', href: '/new-arrivals' },
          { name: 'Best Sellers', href: '/best-sellers' },
          { name: 'Sale Items', href: '/sale' },
        ],
      },
    ],
  },
  { name: 'Flash Sales', href: '/flash-sales' },
  { name: 'Products', href: '/product' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-800 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-3xl font-bold">
            <span className="text-yellow-300">Buy</span>
            <span className="text-white">Bazaar</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-white hover:text-yellow-300 transition-colors duration-300 flex items-center"
                  onMouseEnter={() => item.megaMenu && setOpenMegaMenu(item.name)}
                  onMouseLeave={() => setOpenMegaMenu(null)}
                >
                  {item.name}
                  {item.megaMenu && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
                {item.megaMenu && openMegaMenu === item.name && (
                  <div className="absolute left-0 mt-2 w-screen max-w-screen-xl bg-white text-gray-800 shadow-xl rounded-md overflow-hidden group-hover:block"
                       onMouseEnter={() => setOpenMegaMenu(item.name)}
                       onMouseLeave={() => setOpenMegaMenu(null)}>
                    <div className="grid grid-cols-2 gap-8 p-8">
                      {item.megaMenu.map((section, index) => (
                        <div key={index}>
                          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                          <ul className="space-y-2">
                            {section.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link to={subItem.href} className="hover:text-purple-600 transition-colors duration-300">
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block w-64">
              <SearchBar />
            </div>
            <Link to="/cart" className="text-white hover:text-yellow-300 transition-colors duration-300 relative">
              <ShoppingCart className="w-6 h-6" />
              
                <span className="absolute -top-2 -right-2 bg-yellow-300 text-purple-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  0
                </span>

            </Link>
            <button
              onClick={toggleTheme}
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </button>
            <button
              className="md:hidden text-white hover:text-yellow-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-purple-700">
          <nav className="flex flex-col space-y-4 p-4">
            <div className="mb-4">
              <SearchBar />
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-yellow-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

