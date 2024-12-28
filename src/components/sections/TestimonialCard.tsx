import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const TestimonialCard = ({ quote, author, role, company, image }: TestimonialCardProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 relative">
      <Quote className="absolute top-6 left-6 h-8 w-8 text-blue-100 dark:text-blue-900/30" />
      <div className="relative">
        <p className="text-gray-600 dark:text-gray-300 mb-6 pt-8 px-4">
          "{quote}"
        </p>
        <div className="flex items-center space-x-4">
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {author}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {role} at {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;