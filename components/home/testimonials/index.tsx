'use client'; 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import testimonialsData from '@/lib/data/testimonials';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-24 bg-white" // CHANGED: Reduced vertical padding
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-12 scroll-animate" // CHANGED: Reduced margin-bottom
        >
          <p className="text-corporate-accent font-semibold uppercase tracking-widest mb-2">
            Client Feedback
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-corporate-navy">
            What Our Partners Say
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="pb-12" // Padding for pagination dots
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-3xl mx-auto text-center p-8">
                <Quote
                  className="text-corporate-accent mx-auto mb-6"
                  size={40}
                  strokeWidth={1.5}
                />
                
                <p className="text-xl md:text-2xl font-light text-gray-700 italic mb-8">
                  &quot;{item.quote}&quot;
                </p>
                
                <Image
                  src={item.image}
                  alt={item.name}
                  height={64}
                  width={64}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-contain shadow-lg"
                />
                
                {/* <h4 className="text-lg font-bold text-corporate-navy">
                  {item.name}
                </h4> */}
                {/* <p className="text-gray-500">{item.title}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}