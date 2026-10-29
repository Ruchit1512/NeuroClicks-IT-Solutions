import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "blue" | "mint";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  arrowDirection?: "up-right" | "right";
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  withArrow = false,
  arrowDirection = "right",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "group inline-flex items-center justify-center font-medium tracking-tight rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 disabled:pointer-events-none disabled:opacity-50 select-none";

  const variants = {
    // Primary electric blue CTA
    primary:
      "bg-brand-blue text-white hover:bg-brand-electric shadow-glowBlue border border-brand-electric/40 hover:scale-[1.02] active:scale-[0.98]",
    // Clean deep navy surface button
    secondary:
      "bg-dark-850 text-white border border-border-default hover:border-brand-electric/60 hover:bg-dark-800 hover:scale-[1.01] active:scale-[0.99]",
    // Refined translucent outline button
    outline:
      "bg-transparent text-white border border-border-default hover:border-brand-electric hover:bg-brand-electricMuted",
    // Bright Electric Blue
    blue:
      "bg-brand-electric text-white font-semibold hover:bg-brand-electricHover shadow-glow border border-brand-cyan/40 hover:scale-[1.02]",
    // Mint / Cyan alternative
    mint:
      "bg-cyan-500 text-dark-950 font-semibold hover:bg-cyan-400 shadow-glow border border-cyan-400/50 hover:scale-[1.02]",
    // Minimal ghost
    ghost:
      "bg-transparent text-dark-300 hover:text-white hover:bg-dark-800/60",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5 font-semibold",
  };

  const arrowIcon =
    arrowDirection === "up-right" ? (
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    ) : (
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    );

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, target, rel } = props as ButtonAsLink;
    return (
      <Link href={href} target={target} rel={rel} className={combinedClasses}>
        <span>{children}</span>
        {withArrow && arrowIcon}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      <span>{children}</span>
      {withArrow && arrowIcon}
    </button>
  );
};
