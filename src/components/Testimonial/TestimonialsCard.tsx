import { FC } from "react";
import { TTestimonial } from "./type.testimonial";
import Rating from "../Shared/Rating";


const TestimonialsCard:FC<{item: TTestimonial}> = ({item}) => {
    return (
      <div className="bg-light-input p-4 rounded-xl">

        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-4">
            <img
              src={item.avatar}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <span className="block text-gray-800 font-semibold">
                {item.name}
              </span>
              <span className="block text-gray-600 text-sm mt-0.5">
                {item.title}
              </span>
            </div>
          </div>

          <Rating value={item?.rating} isDisabled={true} />
        </div>
        <blockquote>
          <hr className="border-primary/20 mt-5"/>
          <p className="mt-6 text-gray-700">{item?.quote}</p>
        </blockquote>
    </div>
    )
  };

  export default TestimonialsCard;