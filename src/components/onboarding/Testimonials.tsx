import React from 'react';

const testimonials = [
  {
    quote: "Nexus helped me connect with the perfect investors for my startup. The platform's intuitive design made the entire process seamless.",
    author: "Sarah Chen",
    role: "Founder & CEO",
    company: "TechVision",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "As an investor, Nexus has transformed how I discover and evaluate potential investments. The quality of startups here is exceptional.",
    author: "Michael Rodriguez",
    role: "Angel Investor",
    company: "Innovation Capital",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
];

const Testimonials = () => {
  return (
    <section className="mt-24">
      <h2 className="text-2xl font-semibold text-center text-gray-900 mb-12">
        What Our Community Says
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.author}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;