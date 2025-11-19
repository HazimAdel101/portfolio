"use client";

import { useTranslations } from 'next-intl';
import { SocialLinks } from "./SocialLinks";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/app/lib/constants";

const contactItems = [
  { icon: "📧", labelKey: "emailLabel", value: CONTACT_INFO.email },
  { icon: "📱", labelKey: "phoneLabel", value: CONTACT_INFO.phone },
  { icon: "📍", labelKey: "locationLabel", value: CONTACT_INFO.location },
];

const socialLinks = SOCIAL_LINKS.slice(0, 3);

export function ContactInfo() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-[var(--text-title)] dark:text-white">
          {t('contact.contactInfo')}
        </h3>
        <div className="space-y-6">
          {contactItems.map((item) => (
            <div key={item.labelKey} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--chips-bg)] dark:bg-[var(--card)] flex items-center justify-center flex-shrink-0">
                <span className="text-xl">{item.icon}</span>
              </div>
              <div>
                <p className="font-medium text-[var(--text-title)] dark:text-white">
                  {t(`contact.${item.labelKey}`)}
                </p>
                <p className="text-[var(--text-subtitle)] dark:text-gray-300">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-[var(--text-title)] dark:text-white">
          {t('contact.followMe')}
        </h3>
        <SocialLinks links={socialLinks} />
      </div>
    </div>
  );
}

