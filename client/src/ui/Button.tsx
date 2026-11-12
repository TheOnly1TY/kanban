import { type ButtonHTMLAttributes } from "react";

type ButtonProps = {
  variant?: "default" | "secondary" | "destructive";
  size?: "lg" | "sm";
  children: React.ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

interface StyledVariantsType {
  default: string;
  destructive: string;
  secondary: string;
}

interface StyledSizesType {
  lg: string;
  sm: string;
}

export default function Button({
  variant = "default",
  size = "lg",
  children,
  className,
  ...props
}: ButtonProps) {
  const styledVariants: StyledVariantsType = {
    default: "bg-brand-primary text-white hover:bg-brand-light",
    secondary:
      "bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/25 hover:text-brand-primary border border-brand-primary hover:border-brand-primary",
    destructive: "bg-accent-red text-white hover:bg-accent-light-red",
  };

  // REMOVED max-w-[255px] from here so it defaults to true full width
  const styledSizes: StyledSizesType = {
    lg: "w-full h-[48px]",
    sm: "w-full h-[40px]",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-1.5 text-sm leading-5.75 font-bold font-jakarta rounded-full disabled:bg-neutral-100 disabled:text-neutral-300 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-white disabled:cursor-not-allowed cursor-pointer ${styledVariants[variant]} ${styledSizes[size]} transition-all duration-300 ease ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
