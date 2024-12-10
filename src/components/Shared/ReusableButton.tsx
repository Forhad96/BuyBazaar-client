import React from "react";

interface ReusableButtonProps {
  label?: string;
  onClick?: () => void;
  svgPath?: string;
  className?: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
}

const ReusableButton: React.FC<ReusableButtonProps> = ({
  label,
  onClick,
  svgPath = "M6 12H18M18 12L13 7M18 12L13 17", // Default icon path
  className = "",
  variant = "primary",
  size = "medium",
}) => {
  // Define styles for different variants
  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-black",
    danger: "bg-red-500 text-white",
  };

  // Define styles for different sizes
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-5 py-2 text-sm md:text-base ",
    large: "px-7 py-3 text-lg",
  };

  // Define SVG size and background for different sizes
  const svgSizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-10 h-10', // Adjusted for better responsiveness
    large: 'w-8 h-8',
  };

  return (
    <button
      className={`group flex gap-0.5 items-center justify-center ${className}`}
      onClick={onClick}
    >
      {label &&
      <span className={`rounded-full ${variantClasses[variant]} ${sizeClasses[size]}`}>
        {label}
      </span>
}
      <svg
        viewBox="0 0 24 24"
        className={`rounded-full transition-transform duration-700 group-hover:bg-dark-background group-hover:rotate-0 -rotate-45 ${variantClasses[variant]} ${svgSizeClasses[size]}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={svgPath}
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  );
};

export default ReusableButton;

<button className="group flex gap-0.5 items-center justify-center">
  <span className="bg-primary px-5 py-2 rounded-full text-white">Book Now</span>
  <svg
    viewBox="0 0 24 24"
    className="bg-primary rounded-full transition-transform duration-300 group-hover:bg-dark-background group-hover:rotate-0 -rotate-45"
    fill="none"
    width="40"
    height="40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12H18M18 12L13 7M18 12L13 17"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
</button>;
