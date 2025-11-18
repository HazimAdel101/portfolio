"use client";

import { Globe } from "lucide-react";
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { routing } from '@/i18n/routing';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    
    startTransition(() => {
      // Replace the locale in the pathname
      const segments = pathname.split('/');
      if (segments[1] && routing.locales.includes(segments[1] as 'en' | 'ar')) {
        segments[1] = newLocale;
      } else {
        segments.splice(1, 0, newLocale);
      }
      const newPathname = segments.join('/') || `/${newLocale}`;
      router.push(newPathname);
      
      // Update HTML attributes
      const html = document.documentElement;
      if (newLocale === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
      } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
      }
    });
  };

  return (
    <span
      onClick={toggleLanguage}
      className="cursor-pointer opacity-50 flex items-center gap-2"
      aria-label="Toggle language"
      aria-disabled={isPending}
    >
      <Globe className="size-4 text-black dark:text-white" />
      <span className="text-sm text-black dark:text-white">
        {locale === 'ar' ? 'Ar' : 'En'}
      </span>
    </span>
  );
}
