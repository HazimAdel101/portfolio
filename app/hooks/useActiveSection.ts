/**
 * Hook to detect the currently active section based on scroll position
 * Uses Intersection Observer API for efficient section detection
 */

import { useEffect, useState } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    // Get all sections with IDs
    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length === 0) {
      // Check hash on mount if sections aren't ready yet
      const hash = window.location.hash.slice(1);
      if (hash) {
        setActiveSection(hash);
      }
      return;
    }

    // Track which section is most visible
    let currentActive = 'hero';

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let mostVisibleId = 'hero';

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            const id = entry.target.getAttribute('id');
            if (id) {
              mostVisibleId = id;
            }
          }
        });

        // Update if we found a more visible section
        if (maxRatio > 0.1 && mostVisibleId !== currentActive) {
          currentActive = mostVisibleId;
          setActiveSection(mostVisibleId);
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: '-10% 0px -10% 0px', // Consider section active when it's in the middle 80% of viewport
      }
    );

    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Also check hash on mount and hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setActiveSection(hash);
        currentActive = hash;
      } else {
        // If no hash, check scroll position
        const scrollPosition = window.scrollY + 100; // Offset for navbar
        let foundSection = 'hero';
        
        sections.forEach((section) => {
          const element = section as HTMLElement;
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            foundSection = element.id || 'hero';
          }
        });
        
        setActiveSection(foundSection);
        currentActive = foundSection;
      }
    };

    // Initial check
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleHashChange, { passive: true });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleHashChange);
    };
  }, []);

  return activeSection;
}

