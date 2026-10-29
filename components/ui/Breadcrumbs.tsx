import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className,
}) => {
  return (
    <nav
      aria-label="Breadcrumbs"
      className={cn("flex items-center space-x-2 text-xs font-mono uppercase tracking-wider", className)}
    >
      <Link
        href="/"
        className="text-dark-400 hover:text-white transition-colors"
      >
        Home
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="h-3 w-3 shrink-0 text-dark-500" />
            {isLast || !item.href ? (
              <span
                className="font-medium text-brand-orange truncate max-w-[220px] sm:max-w-none"
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-dark-400 hover:text-white transition-colors truncate"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
