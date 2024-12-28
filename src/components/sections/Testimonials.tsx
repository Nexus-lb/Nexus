import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    quote: "Nexus helped me secure funding within months. The platform's intuitive design and powerful networking tools made all the difference.",
    author: "Sarah Chen",
    role: "Founder & CEO",
    company: "EcoTech Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    quote: "As an investor, finding the right startups has never been easier. The quality of entrepreneurs on Nexus is exceptional.",
    author: "Michael Rodriguez",
    role: "Angel Investor",
    company: "Innovation Capital",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    quote: "The mentorship and resources available through Nexus have been invaluable for our startup's growth journey.",
    author: "Emily Zhang",
    role: "Co-founder",
    company: "HealthTech AI",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from our community members who have achieved remarkable success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;