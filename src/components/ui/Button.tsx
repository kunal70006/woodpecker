import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-xs font-medium transition-all cursor-pointer";

  const variantStyles = {
    primary: "bg-light-brown text-white hover:bg-dark-brown",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  const sizeStyles = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-8 py-2 text-lg",
    lg: "px-10 py-3 text-xl",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
