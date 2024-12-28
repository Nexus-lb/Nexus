import React from 'react';
import { Lightbulb, Handshake } from 'lucide-react';

const BlogHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 py-16">
      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float-slow absolute top-1/4 left-1/4 text-blue-200 dark:text-gray-600 opacity-20">
          <Lightbulb size={48} />
        </div>
        <div className="animate-float-delayed absolute top-1/3 right-1/4 text-amber-200 dark:text-gray-600 opacity-20">
          <Handshake size={48} />
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Inspiration and Insights for{' '}
          <span className="text-blue-600 dark:text-blue-400">Entrepreneurs</span>{' '}
          and{' '}
          <span className="text-amber-600 dark:text-amber-400">Investors</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore thought-provoking articles, success stories, and industry tips curated by Nexus.
        </p>
      </div>
    </div>
  );
};

export default BlogHero;