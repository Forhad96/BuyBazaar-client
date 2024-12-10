import classNames from "classnames";
import React from "react";

interface SliderActionProps {
  pagination?: boolean; // Whether to show pagination controls
  sliderId: string; // Unique identifier for the slider instance
  isBeginning?: boolean; // Indicates if the slider is at the first slide
  isEnd?: boolean; // Indicates if the slider is at the last slide
  wrapperBorder?: boolean; // Determines if a border should be applied around the slider wrapper
  buttonColor?: string; // CSS class for the button background color
  textColor?: string; // CSS class for the button text color
  buttonSize?: string; // CSS class for the button size
  rounded?:
    | "rounded-sm"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-xl"
    | "rounded-2xl";
  prevIcon?: React.ReactNode; // Custom icon for the previous button
  nextIcon?: React.ReactNode; // Custom icon for the next button
}

const SliderAction: React.FC<SliderActionProps> = ({
  pagination,
  sliderId,
  isBeginning = false,
  isEnd = false,
  wrapperBorder = false,
  buttonColor = "bg-gray-800",
  textColor = "text-white",
  buttonSize = "size-12",
  rounded = "rounded-full",
  prevIcon = "❮",
  nextIcon = "❯",
}) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-center relative mt-10",
        wrapperBorder && "border border-green-500 rounded- p-4 mr-10"
      )}
    >
      {/* Previous Button */}
      <div
        className={classNames(
          `common-swiper-button-prev-${sliderId}`,
          "z-10 mr-2 text-xl cursor-pointer flex items-center justify-center",
          buttonSize,
          textColor,
          buttonColor,
          rounded,
          { hidden: isBeginning }
        )}
      >
        {prevIcon}
      </div>

      {/* Pagination */}
      {pagination && (
        <div
          className={`common-swiper-pagination-${sliderId} mb-1 md:block hidden`}
        ></div>
      )}

      {/* Next Button */}
      <div
        className={classNames(
          `common-swiper-button-next-${sliderId}`,
          "z-10 ml-2 text-xl cursor-pointer flex items-center justify-center",
          buttonSize,
          textColor,
          rounded,
          buttonColor,
          { hidden: isEnd }
        )}
      >
        {nextIcon}
      </div>
    </div>
  );
};

export default SliderAction;
