"use client";

import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { useServicesData, useServicesTranslations } from "@/app/hooks";

export function ServicesSection() {
  const services = useServicesData();
  const translations = useServicesTranslations();

  // Separate featured service from regular services
  const featuredService = services.find((service) => service.variant === 'featured');
  const regularServices = services.filter((service) => service.variant !== 'featured');

  return (
    <section id="services" className="py-20 bg-white dark:bg-[var(--background)]">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          title={translations.title}
          titleHighlight={translations.titleHighlight}
          subtitle={translations.subtitle}
        />

        {/* Main Service Card */}
        {featuredService && (
          <div className="mb-12">
            <ServiceCard
              variant={featuredService.variant}
              title={featuredService.title}
              icon={featuredService.icon}
              description={featuredService.description}
            />
          </div>
        )}

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regularServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

