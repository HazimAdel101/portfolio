"use client";

import { SectionHeader } from "./SectionHeader";
import { TestimonialCard } from "./TestimonialCard";
import { useTestimonialsData, useTestimonialsTranslations } from "@/app/hooks";

export function TestimonialsSection() {
  const testimonials = useTestimonialsData();
  const translations = useTestimonialsTranslations();

  return (
    <section id="testimonials" className="py-20 bg-[var(--hero-section)] dark:bg-[var(--background)]">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          title={translations.title}
          titleHighlight={translations.titleHighlight}
          subtitle={translations.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              name={testimonial.name}
              role={testimonial.role}
              review={testimonial.review}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

