'use client';

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

  const faqs = [
    {
      question: 'How long does a typical web development project take?',
      answer:
        'The timeline varies by complexity. A simple brochure website might take 2-4 weeks, while a complex e-commerce platform could take 8-12 weeks or more. We provide a detailed project timeline after our initial discovery and strategy phase.',
    },
    {
      question: 'Do you include SEO with your web development projects?',
      answer:
        'Absolutely. Every website we build is founded on strong technical SEO principles, including mobile-first design, fast loading speeds, and clean code. For clients looking to actively grow their online presence, we offer comprehensive ongoing SEO strategies that include keyword research, content optimization, and authority building.',
    },
    {
      question: 'How long does it take to see results from SEO?',
      answer:
        "SEO is a long-term investment. While initial improvements can sometimes be seen in 1-3 months, significant results in terms of traffic and keyword rankings typically take 4-6 months of consistent effort. The exact timeline depends on your industry's competitiveness and your website's history. We focus on building sustainable growth, not just short-term wins.",
    },
    {
      question: 'What is your process for graphic design projects?',
      answer:
        'Our design process follows these key stages: 1) Discovery & Research, 2) Concept Development, 3) Design Refinement based on your feedback, and 4) Final Delivery of all assets. We typically allow for 2-3 rounds of revisions to ensure complete satisfaction.',
    },
    {
      question: 'Can you guarantee a #1 ranking on Google?',
      answer:
        "No reputable agency can guarantee a #1 ranking. Google's algorithm is complex and constantly changing. Our commitment is to use proven, ethical strategies to significantly improve your website's visibility, rankings for relevant keywords, and organic traffic, which ultimately leads to more leads and sales.",
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer:
        "Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. Our services can include technical maintenance, content updates, security monitoring, and performance optimization. We'll discuss these options with you during the project handover.",
    },
  ];

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
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
