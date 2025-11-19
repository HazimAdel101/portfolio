"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { NavLink } from "./NavLink.NavBar";
import { useTranslations } from 'next-intl';
import { NAVIGATION_LINKS } from "@/app/config/navigation";

export const NavBar = () => {
  const t = useTranslations();

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50">
      <div className="flex items-center justify-between bg-white dark:bg-black px-4">
        <Link href="/">
          <Image className="my-auto" src="/logo.png" alt="logo" width={50} height={50} />
        </Link>
        <div className="flex items-center gap-4">
          {NAVIGATION_LINKS.map((link) => (
            <NavLink 
              key={link.key} 
              href={link.href} 
              title={t(`nav.${link.key}`)} 
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};
