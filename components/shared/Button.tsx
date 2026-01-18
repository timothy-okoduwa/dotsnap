import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = "font-mono rounded transition-colors font-medium";

  const variantStyles = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-black",
    secondary:
      "bg-gray-900 hover:bg-gray-800 text-white border border-gray-800",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-sm",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
