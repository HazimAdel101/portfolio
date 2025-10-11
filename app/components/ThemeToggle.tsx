'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    const html = document.documentElement;
    if (newIsDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Dark mode enabled, html classes:', html.className);
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Light mode enabled, html classes:', html.className);
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="px-4 py-2 rounded-lg bg-[var(--primary-button)] text-[var(--text-button-primary)] hover:opacity-90 transition-opacity opacity-50"
        aria-label="Toggle theme"
        disabled
      >
        🌓 Theme
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-[var(--primary-button)] text-[var(--text-button-primary)] hover:opacity-90 transition-opacity"
      aria-label="Toggle theme"
    >
      {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

