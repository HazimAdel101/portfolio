"use client";

import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

export default function LanguageToggle() {
  const [isArabic, setIsArabic] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check saved language preference on mount
    const savedLanguage = localStorage.getItem("language");
    const shouldBeArabic = savedLanguage === "ar";

    setIsArabic(shouldBeArabic);
    if (shouldBeArabic) {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
    }
  }, []);

  const toggleLanguage = () => {
    const newIsArabic = !isArabic;
    setIsArabic(newIsArabic);

    const html = document.documentElement;
    if (newIsArabic) {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
      localStorage.setItem("language", "ar");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", "en");
      localStorage.setItem("language", "en");
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <span
        className="opacity-50 flex items-center gap-2"
        aria-label="Toggle language"
      >
        <Globe className="size-4" />
        <span className="text-sm">En</span>
      </span>
    );
  }

  return (
    <span
      onClick={toggleLanguage}
      className="cursor-pointer opacity-50 flex items-center gap-2"
      aria-label="Toggle language"
    >
      <Globe className="size-4 text-black dark:text-white" />
      <span className="text-sm text-black dark:text-white">{isArabic ? "Ar" : "En"}</span>
    </span>
  );
}
