"use client";

import { SectionHeader } from "./SectionHeader";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { useContactTranslations } from "@/app/hooks";

export function ContactSection() {
  const translations = useContactTranslations();

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[var(--background)]">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          title={translations.title}
          subtitle={translations.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

