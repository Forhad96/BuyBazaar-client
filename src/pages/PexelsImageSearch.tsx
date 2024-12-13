import React, { useState, useEffect } from 'react';
import { Search, Image, Loader2 } from 'lucide-react';

interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  src: {
    original: string;
    large: string;
    medium: string;
    small: string;
  };
}

interface PexelsResponse {
  total_results: number;
  photos: PexelsPhoto[];
}

const PexelsImageSearch: React.FC = () => {
  // State management
  const [keyword, setKeyword] = useState<string>('');
  const [images, setImages] = useState<PexelsPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Pexels API configuration
  const API_KEY = 'u2OJFtZImqXWaZd9RfH17rNZpOAL7flN5qXm2in5nIokul1UwC3C7c05'; // Replace with your actual API key
  const API_URL = 'https://api.pexels.com/v1/search';

  // Image search function
  const searchImages = async () => {
    if (!keyword.trim()) {
      setError('Please enter a search keyword');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}?query=${encodeURIComponent(keyword)}&per_page=15`, {
        method: 'GET',
        headers: {
          'Authorization': API_KEY
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: PexelsResponse = await response.json();
      setImages(data.photos);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch images. Please try again.');
      setLoading(false);
    }
  };

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchImages();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form 
        onSubmit={handleSearch} 
        className="flex mb-4 space-x-2"
      >
        <input 
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter search keyword"
          className="flex-grow p-2 border rounded"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded flex items-center"
        >
          {loading ? (
            <Loader2 className="animate-spin mr-2" />
          ) : (
            <Search className="mr-2" />
          )}
          Search
        </button>
      </form>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin w-12 h-12 text-blue-500" />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="border rounded overflow-hidden cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedImage(image.src.large)}
            >
              <img 
                src={image.src.medium} 
                alt={`Pexels image by ${image.photographer}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-screen">
            <img 
              src={selectedImage} 
              alt="Full size" 
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PexelsImageSearch;