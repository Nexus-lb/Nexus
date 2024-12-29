import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturesCTA = () => {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Experience Nexus Today
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Join thousands of entrepreneurs and investors who are already transforming their ideas into reality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCTA;