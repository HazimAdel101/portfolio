"use client";

import { Button } from "@/components/ui/button";
import { ButtonArrow } from "@/app/components/ButtonArrow";
import { useTranslations } from 'next-intl';
import { SocialLinks } from "./SocialLinks";
import { SOCIAL_LINKS, QUICK_LINKS, CONTACT_INFO } from "@/app/lib/constants";

const socialLinks = SOCIAL_LINKS.slice(0, 3);

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[var(--footer)] text-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">LOGO</h3>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <Button className="bg-[var(--text-primary)] text-white hover:bg-[var(--text-primary)]/90 rounded-full">
              {t('about.downloadCV')}
              <ButtonArrow color="#ffffff" />
            </Button>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-gray-300">
              {QUICK_LINKS.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {t(`footer.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>{CONTACT_INFO.email}</li>
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.location}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Hazem Al-Saggaf. {t('footer.rights')}
          </p>
          <SocialLinks links={socialLinks} variant="footer" className="mt-4 md:mt-0" />
        </div>
      </div>
    </footer>
  );
}

