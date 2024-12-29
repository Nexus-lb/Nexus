import React from 'react';
import { Smartphone, Laptop, Tablet } from 'lucide-react';

const Accessibility = () => {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Work Anywhere, Anytime
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Access Nexus seamlessly across all your devices with our responsive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Smartphone size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Mobile App
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Stay connected on the go with our powerful mobile application.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Laptop size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Web Platform
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access all features through our intuitive web interface.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Tablet size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Tablet Optimized
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Perfect for presentations and on-the-spot collaboration.
            </p>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-gray-900"></div>
          <img
            src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=2070"
            alt="Cross-platform accessibility"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Accessibility;