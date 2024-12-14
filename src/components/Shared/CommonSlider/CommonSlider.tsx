import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, FreeMode, Autoplay } from "swiper/modules";

// Define the props interface
interface CommonSliderProps {
  children: ReactNode; // The slides to display
  slidesPerView?: number; // Number of slides to show per view
  spaceBetween?: number; // Space between slides
  slidesPerGroup?: number; // Number of slides to group for navigation
  loop?: boolean; // Enable or disable looping
  className?: string; // Additional custom classes
  sliderId?: string; // Unique identifier for the slider
  speed?: number; // Transition speed in milliseconds
  freeMode?: boolean; // Enable free mode
  autoplay?: boolean; // Enable autoplay
  grabCursor?: boolean; // Enable grab cursor
  setSwiperState?: (state: { isBeginning: boolean; isEnd: boolean }) => void; // Callback for swiper state
  breakpoints?: Record<string, { slidesPerView: number; spaceBetween: number }>; // Custom breakpoints
}

const CommonSlider: React.FC<CommonSliderProps> = ({
  children,
  slidesPerView = 4,
  spaceBetween = 10,
  slidesPerGroup=1,
  loop = false,
  className = "",
  sliderId,
  speed = 800,
  freeMode = false,
  autoplay = false,
  grabCursor = true,
  setSwiperState,
  breakpoints: customBreakpoints,
  ...props
}) => {
  // Ensure slidesPerGroup defaults to slidesPerView if not provided
  slidesPerGroup = slidesPerGroup ?? slidesPerView;

  // Generate a unique slider ID if not provided
  const uniqueId = sliderId || `slider-${Math.random().toString(36).substr(2, 9)}`;
// console.log(uniqueId);
  // Merge custom breakpoints with default breakpoints
  const breakpoints = {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: slidesPerView,
      spaceBetween: 30,
    },
    ...customBreakpoints, // Allow overriding default breakpoints
  };

  const modules = [Pagination, Navigation, FreeMode, Autoplay];

  return (
    <div className={`my-2.5 ${className} cursor-grab`}>
      <Swiper
        slidesPerGroup={slidesPerGroup}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onSlideChange={(swiper) => {
          if (setSwiperState) {
            setSwiperState({
              isBeginning: swiper.isBeginning,
              isEnd: swiper.isEnd,
            });
          }
        }}
        loop={loop}
        speed={speed}
        freeMode={freeMode}
        autoplay={autoplay}
        grabCursor={grabCursor}
        navigation={{
          nextEl: `.common-swiper-button-next-${uniqueId}`,
          prevEl: `.common-swiper-button-prev-${uniqueId}`,
        }}
        modules={modules}
        pagination={{
          el: `.common-swiper-pagination-${uniqueId}`,
          clickable: true,
          renderBullet: (_index, className) =>
            `<span class="${className} w-3 h-3 bg-primary rounded-full mx-1"></span>`,
        }}
        className={`swiper-container commonSwiper ${className}`}
        breakpoints={breakpoints}
        watchOverflow={true}
        {...props}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      {/* <div
        className={`common-swiper-button-prev-${uniqueId} swiper-button-prev bg-primary`}
      ></div>
      <div
        className={`common-swiper-button-next-${uniqueId} swiper-button-next`}
      ></div> */}
    </div>
  );
};

export default CommonSlider;
