import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "neutral" | "blue" | "electric" | "cyan" | "orange" | "mint" | "outline";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "blue",
  size = "md",
  className,
  ...props
}) => {
  const variants = {
    neutral: "bg-dark-800 text-dark-200 border-border-default",
    blue: "bg-brand-blueMuted text-brand-electric border-brand-electric/40 font-semibold",
    electric: "bg-blue-900/40 text-blue-300 border-blue-500/40 font-semibold",
    cyan: "bg-cyan-950/40 text-cyan-300 border-cyan-500/40 font-semibold",
    orange: "bg-brand-blueMuted text-brand-electric border-brand-electric/40 font-semibold",
    mint: "bg-cyan-950/40 text-cyan-300 border-cyan-500/40 font-semibold",
    outline: "bg-transparent text-dark-300 border-border-default",
  };

  const sizes = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wide",
    md: "text-xs px-3 py-1 tracking-normal",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-mono font-medium transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
