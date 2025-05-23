import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

const baseButtonClasses =
  "rounded-xl font-medium transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const variantStyles = {
  primary: "bg-light-brown text-white hover:bg-dark-brown",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

const sizeStyles = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-8 py-2 text-lg",
  lg: "px-10 py-3 text-xl",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        baseButtonClasses,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
