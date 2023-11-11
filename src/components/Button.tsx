import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const SIZES = {
  sm: "px-3 xl:px-4 py-1 text-xs md:text-sm xl:text-base",
  md: "px-6 xl:px-8 py-1 xl:py-2 text-base md:text-lg xl:text-xl",
  lg: "px-8 xl:px-12 py-2 xl:py-3 text-lg md:text-xl xl:text-2xl",
};

const Button = ({
  type = "button",
  size = "sm",
  disabled = false,
  className = "",
  onClick = () => {},
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`max-w-full truncate border-2 border-grey font-medium uppercase text-grey outline-none transition focus:border-red focus:text-red ${
        SIZES[size]
      } ${
        disabled
          ? "cursor-not-allowed"
          : "cursor-pointer hover:border-red hover:text-red"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
