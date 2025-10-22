'use client';

import { useEffect, useState } from 'react';
import Popup from '@/components/common/Popup';
import Header from '@/components/home/header/Header';
import MissionSection from '@/components/home/about/About';
import ServicesSection from '@/components/home/service/Service';
import Footer from '@/components/footer/Footer';
import Contact from '@/components/home/contact/Contact';
import Faq from '@/components/home/faq/Faq';
import Projects from '@/components/home/projects/Project';
import Process from '@/components/home/process/Process';
import Navbar from '@/components/navbar/Navbar';

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Scroll animation observer
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

    // Auto-open popup after delay
    const popupTimeout = setTimeout(() => {
      setIsPopupOpen(true);
    }, 2000);

    return () => {
      clearTimeout(popupTimeout);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="bg-white text-gray-800 font-sans">
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <Navbar />
      <Header />
      <MissionSection />
      <ServicesSection />
      <Process />
      <Projects />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
