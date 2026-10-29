import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug, ServiceDetail } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { ServiceDetailClient } from "@/components/services/ServiceDetailClient";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} — IT Solutions & Architecture | ${siteConfig.name}`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.shortDescription,
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceDetail => Boolean(s));

  return (
    <ServiceDetailClient
      service={service}
      relatedServices={relatedServices}
    />
  );
}
