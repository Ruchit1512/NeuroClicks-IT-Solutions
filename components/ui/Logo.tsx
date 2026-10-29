import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  showLabel = true,
  size = "md",
}) => {
  const iconDimensions = {
    sm: { width: 32, height: 32, box: "h-8 w-8" },
    md: { width: 40, height: 40, box: "h-9 w-9 sm:h-10 sm:w-10" },
    lg: { width: 48, height: 48, box: "h-12 w-12" },
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg sm:text-xl",
    lg: "text-xl sm:text-2xl",
  };

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 transition-opacity hover:opacity-95 ${className}`}
      aria-label="NeuroClicks Media — IT Solutions Home"
    >
      {/* Official NeuroClicks Media Logo Emblem */}
      <div
        className={`relative ${iconDimensions[size].box} shrink-0 rounded-full bg-white p-0.5 border border-brand-electric/50 shadow-glow group-hover:border-brand-cyan group-hover:shadow-glowBlue transition-all overflow-hidden flex items-center justify-center`}
      >
        <Image
          src="/logo-badge.webp"
          alt="NeuroClicks Media official emblem"
          width={iconDimensions[size].width}
          height={iconDimensions[size].height}
          priority
          className="object-contain w-full h-full rounded-full"
        />
      </div>

      {/* Wordmark typography */}
      <div className="flex flex-col">
        <span
          className={`${textSizes[size]} font-display font-bold tracking-tight text-white leading-none group-hover:text-brand-electricHover transition-colors`}
        >
          NeuroClicks <span className="text-brand-electric">Media</span>
        </span>
        {showLabel && (
          <span className="text-[10px] font-mono tracking-[0.22em] text-dark-300 font-semibold uppercase mt-1 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
            IT SOLUTIONS
          </span>
        )}
      </div>
    </Link>
  );
};
