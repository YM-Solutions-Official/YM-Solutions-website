'use client';

import faqs from '@/lib/data/faq';
import { useState } from 'react';

const FaqItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <button
        className="faq-question w-full text-left p-6 font-semibold text-lg text-gray-900 flex justify-between items-center hover:bg-gray-50 transition duration-150"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {question}
        <svg
          className={`w-5 h-5 text-corporate-navy transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`faq-answer p-6 pt-0 text-gray-600 transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-animate">
        <div className="text-center mb-12">
          <p className="text-corporate-accent font-semibold uppercase tracking-widest mb-2">
            FAQs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-corporate-navy">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
