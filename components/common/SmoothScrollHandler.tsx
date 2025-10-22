'use client';

import { useEffect } from 'react';

const SmoothScrollHandler = () => {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (!target || typeof target.getAttribute !== 'function') return;

      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') {
        if (href === '#home' || href === '#') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      e.preventDefault();
      const targetId = href;
      const targetElement = document.querySelector(targetId) as HTMLElement;

      if (targetElement) {
        const headerOffset =
          (document.querySelector('header') as HTMLElement)?.offsetHeight || 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    // We delegate the event listener to the document
    // to catch clicks on all <a href="#..."> links
    document.addEventListener('click', handleScroll);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleScroll);
    };
  }, []);

  return null; // This component renders nothing
};

export default SmoothScrollHandler;
