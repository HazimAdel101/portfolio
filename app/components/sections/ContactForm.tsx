"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

export function ContactForm() {
  const t = useTranslations();

  return (
    <div className="bg-[var(--card)] dark:bg-[var(--card)] rounded-2xl p-8 border border-[var(--stroke)]">
      <h3 className="text-2xl font-semibold mb-6 text-[var(--text-title)] dark:text-white">
        {t('contact.formTitle')}
      </h3>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-[var(--text-title)] dark:text-white">
            {t('contact.name')}
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-2xl border border-[var(--stroke-input)] bg-white dark:bg-[var(--input)] text-[var(--text-title)] dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]"
            placeholder={t('contact.name')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-[var(--text-title)] dark:text-white">
            {t('contact.email')}
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-2xl border border-[var(--stroke-input)] bg-white dark:bg-[var(--input)] text-[var(--text-title)] dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-[var(--text-title)] dark:text-white">
            {t('contact.phone')}
          </label>
          <input
            type="tel"
            className="w-full px-4 py-3 rounded-2xl border border-[var(--stroke-input)] bg-white dark:bg-[var(--input)] text-[var(--text-title)] dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]"
            placeholder="+1 234 567 890"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-[var(--text-title)] dark:text-white">
            {t('contact.message')}
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 rounded-2xl border border-[var(--stroke-input)] bg-white dark:bg-[var(--input)] text-[var(--text-title)] dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] resize-none"
            placeholder={t('contact.message')}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-[var(--primary-button)] text-[var(--text-button-primary)] hover:bg-[var(--primary-button)]/90 rounded-xl py-6 h-auto"
        >
          {t('contact.send')}
        </Button>
      </form>
    </div>
  );
}

