import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

interface FeaturedPostProps {
  title: string;
  summary: string;
  image: string;
  date: string;
  readTime: string;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ title, summary, image, date, readTime }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover mix-blend-overlay opacity-50"
        />
      </div>
      <div className="relative p-8 md:p-12">
        <span className="inline-block px-4 py-1 rounded-full bg-white/20 dark:bg-gray-700/20 text-sm font-medium mb-4">
          Featured Post
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-white/90 dark:text-gray-300 mb-6 max-w-2xl">{summary}</p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Clock size={16} /> {readTime}
          </span>
          <button className="inline-flex items-center gap-2 hover:gap-3 transition-all">
            Read More <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;