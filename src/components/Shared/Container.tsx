import { ReactNode, FC } from "react";

// Define the interface for the Container's props
interface ContainerProps {
  children: ReactNode;
  className?: string;
  py?: string;
  px?: string;
}

// Define the Container component
const Container: FC<ContainerProps> = ({
  children,
  className = "",
  py = "",
  px = "px-6",
}): JSX.Element => {
  return (
    <div className={`${className} ${py} ${px} max-w-[1200px] w-full mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
