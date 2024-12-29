import React from 'react';
import { Play } from 'lucide-react';

const UniqueFeature = () => {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Makes Nexus Unique?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience our flagship features that set us apart from the competition.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070"
              alt="Platform Overview"
              className="w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center text-white">
                <Play size={32} className="ml-2" />
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                500K+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Active Users
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                $100M+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Investments Facilitated
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                98%
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Customer Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeature;