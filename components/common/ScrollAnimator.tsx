'use client';

import { useEffect } from 'react';

const ScrollAnimator = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return null; // This component renders nothing
};

export default ScrollAnimator;
