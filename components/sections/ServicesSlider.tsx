"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Code2,
  Users,
  Globe2,
  Smartphone,
  ShoppingBag,
  Cpu,
} from "lucide-react";
import { getPrimaryServices } from "@/lib/services";
import { Container } from "@/ui/Container";
import { ScrollReveal } from "@/animations/ScrollReveal";
import { isPrefersReducedMotion } from "@/lib/gsap";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="h-4 w-4 text-brand-electric" />,
  Users: <Users className="h-4 w-4 text-brand-electric" />,
  Globe2: <Globe2 className="h-4 w-4 text-brand-electric" />,
  Smartphone: <Smartphone className="h-4 w-4 text-brand-electric" />,
  ShoppingBag: <ShoppingBag className="h-4 w-4 text-brand-electric" />,
  Cpu: <Cpu className="h-4 w-4 text-brand-electric" />,
};

export const ServicesSlider: React.FC = () => {
  const primaryServices = getPrimaryServices();
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(isPrefersReducedMotion());
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 bg-dark-950 text-white border-b border-border-default relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <Container size="wide">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-electric animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-dark-300">
                  [ 02 / PRACTICE DISCIPLINES ]
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-[1.1]">
                Digital Solutions. Built Around You.
              </h2>
            </div>

            {/* Custom Navigation Controls & Progress */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-dark-300 mr-2">
                0{((currentIndex % primaryServices.length) + primaryServices.length) % primaryServices.length + 1} / 0{primaryServices.length}
              </span>
              <button
                type="button"
                onClick={() => swiperInstance?.slidePrev()}
                className="h-11 w-11 rounded-full border border-border-default bg-dark-850 flex items-center justify-center text-white hover:border-brand-electric hover:text-brand-electric hover:bg-dark-800 transition-all active:scale-95 shadow-sm"
                aria-label="Previous service slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => swiperInstance?.slideNext()}
                className="h-11 w-11 rounded-full border border-border-default bg-dark-850 flex items-center justify-center text-white hover:border-brand-electric hover:text-brand-electric hover:bg-dark-800 transition-all active:scale-95 shadow-sm"
                aria-label="Next service slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Swiper.js Touch & Mouse Draggable Carousel with Autoplay */}
        <div className="cursor-grab active:cursor-grabbing select-none -mr-5 sm:-mr-8 md:-mr-12 lg:-mr-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.15}
            loop={true}
            autoplay={
              reducedMotion
                ? false
                : {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            speed={750}
            breakpoints={{
              640: { slidesPerView: 1.8, spaceBetween: 24 },
              1024: { slidesPerView: 2.8, spaceBetween: 24 },
              1280: { slidesPerView: 3.15, spaceBetween: 28 },
            }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
            }}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.realIndex);
            }}
            className="pb-4"
          >
            {primaryServices.map((service) => (
              <SwiperSlide key={service.slug} className="h-auto">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col justify-between h-full rounded-2xl border border-border-default bg-dark-850 p-6 sm:p-7 hover:border-brand-electric/60 hover:bg-dark-800 hover:shadow-glowBlue transition-all duration-300 relative overflow-hidden min-h-[500px]"
                >
                  {/* Accent Top Border Highlight on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-border-default group-hover:bg-brand-electric transition-colors" />

                  <div>
                    {/* Header: Number & Category Badge */}
                    <div className="flex items-center justify-between pb-4 border-b border-border-default mb-5">
                      <span className="font-mono text-3xl font-bold text-dark-500 group-hover:text-brand-electric transition-colors">
                        {service.number}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-dark-300 uppercase">
                          {service.category}
                        </span>
                        <div className="h-8 w-8 rounded-lg bg-dark-900 border border-border-default flex items-center justify-center">
                          {iconMap[service.iconName] || <Code2 className="h-4 w-4 text-brand-electric" />}
                        </div>
                      </div>
                    </div>

                    {/* Relevant High-Quality Image Preview with Intentional Crop */}
                    <div className="relative h-44 w-full rounded-xl overflow-hidden border border-border-default mb-5">
                      <Image
                        src={service.image}
                        alt={`${service.title} interface preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-brand-electric transition-colors mb-2.5 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-sm text-dark-300 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Explore Service Link Footer */}
                  <div className="mt-6 pt-4 border-t border-border-default flex items-center justify-between text-xs font-mono uppercase tracking-wider text-dark-300 group-hover:text-white transition-colors">
                    <span>Explore Service</span>
                    <div className="h-8 w-8 rounded-full bg-dark-900 border border-border-default flex items-center justify-center group-hover:bg-brand-electric group-hover:border-brand-electric group-hover:text-white transition-all">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
