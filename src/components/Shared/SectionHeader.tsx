interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  alignment?: "left" | "center" | "right"; // Optional alignment property
  size?: "small" | "medium" | "large"; // Optional size property
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  alignment = "center",
  size = "medium",
}) => {
  // Determine the alignment class based on the alignment prop
  const alignmentClass =
    alignment === "left"
      ? "text-left"
      : alignment === "right"
      ? "text-right"
      : "text-center";

  // Determine the size classes based on the size prop
  const sizeClasses = {
    small: {
      subtitle: "text-sm",
      title: "text-lg",
    },
    medium: {
      subtitle: "text-xl",
      title: "text-2xl md:text-4xl",
    },
    large: {
      subtitle: "text-2xl",
      title: "text-3xl md:text-5xl",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div
      className={`${alignmentClass} my-10 sm:my-12 md:my-16 lg:my-20 xl:my-24`}
    >
      {/* Subtitle */}
      <p className={`text-primary ${currentSize.subtitle} font-medium mb-2`}>
        <span className="text-primaryHover"></span> {subtitle}
      </p>

      {/* Title */}
      <h2
        className={`${currentSize.title} bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

export default SectionHeader;
