"use client";

import { useState, useRef } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import generateImageUrl from "@/utils/generateImageUrl";

const relatedProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    image: "/placeholder.svg",
  },
  { id: 2, name: "Bluetooth Speaker", price: 79.99, image: "/placeholder.svg" },
  { id: 3, name: "Smartwatch", price: 199.99, image: "/placeholder.svg" },
  { id: 4, name: "Fitness Tracker", price: 49.99, image: "/placeholder.svg" },
  { id: 5, name: "Portable Charger", price: 39.99, image: "/placeholder.svg" },
  { id: 6, name: "Portable Charger", price: 39.99, image: "/placeholder.svg" },
  { id: 7, name: "Portable Charger", price: 39.99, image: "/placeholder.svg" },
];

export default function RelatedProduct() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = carousel.offsetWidth;
      const newPosition =
        direction === "left"
          ? Math.max(scrollPosition - scrollAmount, 0)
          : Math.min(
              scrollPosition + scrollAmount,
              carousel.scrollWidth - carousel.offsetWidth
            );
      carousel.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {relatedProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64 mr-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={generateImageUrl()}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
