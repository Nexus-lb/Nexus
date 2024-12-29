import React from 'react';
import { Sparkles } from 'lucide-react';

const FeaturesHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 pt-32 pb-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50"></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-6">
          <Sparkles size={16} />
          <span className="text-sm font-medium">Discover Our Features</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Explore What{' '}
          <span className="text-blue-600 dark:text-blue-400">Nexus</span>{' '}
          Has to Offer
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover how Nexus transforms collaboration and investment with innovative tools 
          and seamless workflows designed for modern teams.
        </p>
      </div>
    </div>
  );
};

export default FeaturesHero;