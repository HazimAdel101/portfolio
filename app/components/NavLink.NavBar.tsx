"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActiveSection } from "@/app/hooks";
import { useEffect, useState } from "react";

type Props = {
  href: string;
  title: string;
};

export const NavLink = ({ href, title }: Props) => {
  const pathname = usePathname();
  const activeSection = useActiveSection();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Handle hash links (e.g., #projects, #contact)
    if (href.startsWith('#')) {
      const sectionId = href.slice(1);
      setIsActive(activeSection === sectionId);
    } 
    // Handle regular path links (e.g., /) - home link should be active when hero section is active
    else if (href === '/') {
      setIsActive(activeSection === 'hero' || pathname === '/');
    }
    else {
      setIsActive(pathname === href);
    }
  }, [href, pathname, activeSection]);

  // Handle click to update hash and scroll smoothly
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.slice(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without scrolling
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <Link 
      href={href}
      onClick={handleClick}
      className="transition-colors duration-200"
    >
      <h1 
        className={`text-2xl font-bold ${
          isActive 
            ? "text-[var(--text-primary)] dark:text-[var(--text-primary)]" 
            : "text-black dark:text-white hover:text-[var(--text-primary)] dark:hover:text-[var(--text-primary)]"
        }`}
      >
        {title}
      </h1>
    </Link>
  );
};
