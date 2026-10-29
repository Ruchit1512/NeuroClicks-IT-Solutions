"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
  isDark?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  className,
  allowMultiple = false,
  isDark = true,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div
      className={cn(
        "divide-y divide-border-default transition-colors",
        className
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="py-5 sm:py-6 first:pt-0 last:pb-0">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-start justify-between gap-4 text-left group focus-visible:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span
                  className={cn(
                    "font-mono text-xs shrink-0 transition-colors",
                    isOpen ? "text-brand-electric font-bold" : "text-dark-400"
                  )}
                >
                  {index < 9 ? `0${index + 1}` : index + 1}
                </span>
                <span
                  className={cn(
                    "text-lg sm:text-xl font-display font-medium tracking-tight transition-colors",
                    isOpen
                      ? "text-brand-electric"
                      : "text-white group-hover:text-brand-electric"
                  )}
                >
                  {item.title}
                </span>
              </div>
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200 mt-0.5",
                  isOpen
                    ? "border-brand-electric bg-brand-blueMuted text-brand-electric shadow-glow"
                    : "border-border-default bg-dark-850 text-dark-300 group-hover:border-brand-electric group-hover:text-white"
                )}
              >
                {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              </span>
            </button>
            {isOpen && (
              <div className="mt-4 pl-8 sm:pl-12 pr-6 text-sm sm:text-base leading-relaxed text-dark-300 transition-all">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
