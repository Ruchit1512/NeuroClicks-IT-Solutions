import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  tag?: string;
  title: string | React.ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center" | "split";
  action?: React.ReactNode;
  accent?: "blue" | "electric" | "cyan" | "orange" | "mint";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  tag,
  title,
  description,
  className,
  align = "left",
  action,
  accent = "blue",
}) => {
  const accentDot =
    accent === "cyan" ? "bg-brand-cyan" : "bg-brand-electric";

  if (align === "split") {
    return (
      <div
        className={cn(
          "mb-12 md:mb-16 pb-8 border-b border-border-default",
          className
        )}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            {(label || tag) && (
              <div className="flex items-center gap-2 mb-3">
                <span className={`h-1.5 w-1.5 rounded-full ${accentDot} animate-pulse`} />
                <span className="text-xs font-mono uppercase tracking-widest text-dark-400">
                  {label || tag}
                </span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-[1.1]">
              {title}
            </h2>
          </div>
          {(description || action) && (
            <div className="max-w-md flex flex-col gap-4">
              {description && (
                <p className="text-sm sm:text-base text-dark-300 leading-relaxed">
                  {description}
                </p>
              )}
              {action && <div>{action}</div>}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {(label || tag) && (
        <div
          className={cn(
            "flex items-center gap-2 mb-3",
            align === "center" && "justify-center"
          )}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${accentDot} animate-pulse`} />
          <span className="text-xs font-mono uppercase tracking-widest text-dark-400">
            {label || tag}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base text-dark-300 leading-relaxed">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};
