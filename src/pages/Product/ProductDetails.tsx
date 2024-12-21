"use client";

import { useState } from "react";
import { Star, Heart, ShoppingCart, Check } from "lucide-react";
import ReviewForm from "@/components/reviewForm/ReviewForm";
import generateImageUrl from "@/utils/generateImageUrl";

const product = {
  id: 1,
  name: "Wireless Earbuds",
  price: 79.99,
  description:
    "High-quality wireless earbuds with noise cancellation and long battery life.",
  features: [
    "Active Noise Cancellation",
    "Up to 24 hours of battery life",
    "IPX4 water resistance",
    "Touch controls",
    "Voice assistant support",
  ],
  specifications: {
    "Bluetooth Version": "5.2",
    "Driver Size": "11mm",
    "Frequency Response": "20Hz - 20kHz",
    Impedance: "32Ω",
    Weight: "5.4g per earbud",
  },
  rating: 4.5,
  reviews: [
    {
      id: 1,
      author: "John D.",
      rating: 5,
      comment: "Great sound quality and comfortable fit!",
      date: "2023-05-15",
    },
    {
      id: 2,
      author: "Sarah M.",
      rating: 4,
      comment: "Good battery life, but could be more comfortable for long use.",
      date: "2023-05-10",
    },
  ],
  images: [
    "https://images.pexels.com/photos/6889216/pexels-photo-6889216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6889216/pexels-photo-6889216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    generateImageUrl(),
    generateImageUrl(),
  ],
  colors: ["Black", "White", "Blue"],
  sizes: ["One Size"],
};

export default function ProductDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="relative h-96 mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="rounded-lg h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`relative h-24 cursor-pointer ${
                  selectedImage === index ? "ring-2 ring-purple-600" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">
              {product.rating} ({product.reviews.length} reviews)
            </span>
          </div>
          <p className="text-2xl font-semibold mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="mb-4">{product.description}</p>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Color:</h3>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full ${
                    selectedColor === color ? "ring-2 ring-purple-600" : ""
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Size:</h3>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size
                      ? "bg-purple-600 text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex space-x-4 mb-8">
            <button
              //   onClick={handleAddToCart}
              className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-colors duration-300"
            >
              <ShoppingCart className="inline-block w-5 h-5 mr-2" />
              Add to Cart
            </button>
            <button
              //   onClick={handleWishlistToggle}
              className={`p-2 rounded-full 
              
              `}
            >
              <Heart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Specifications</h2>
          <table className="w-full">
            <tbody>
              {Object.entries(product.specifications).map(([key, value]) => (
                <tr key={key} className="border-b">
                  <td className="py-2 font-semibold">{key}</td>
                  <td className="py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {product.reviews.map((review) => (
          <div key={review.id} className="bg-gray-100 rounded-lg p-4 mb-4">
            <div className="flex items-center mb-2">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold">{review.author}</span>
              <span className="text-gray-500 ml-2">{review.date}</span>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
        <ReviewForm productId={product.id} />
      </div>
    </div>
  );
}
