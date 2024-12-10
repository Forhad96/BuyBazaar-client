"use client";

import { useState } from "react";
import { Star } from "lucide-react";

type ReviewFormProps = {
  productId: number;
};

export default function ReviewForm({ productId }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would make an API call here to submit the review
    console.log("Submitting review:", { productId, rating, comment });
    // Reset form
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 bg-gray-100 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
      <div className="mb-4">
        <label className="block mb-2">Rating:</label>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-8 h-8 cursor-pointer ${
                star <= rating
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block mb-2">
          Your Review:
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          rows={4}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-colors duration-300"
      >
        Submit Review
      </button>
    </form>
  );
}
