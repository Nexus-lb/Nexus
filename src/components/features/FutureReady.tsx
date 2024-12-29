import React from 'react';
import { Zap, Cpu, Globe } from 'lucide-react';

const FutureReady = () => {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Built for the Future with You in Mind
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay ahead of the curve with our cutting-edge technology and continuous innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Lightning Fast
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Experience blazing-fast performance with our optimized infrastructure.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              AI-Powered
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Leverage advanced AI algorithms for smarter decision-making.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-6">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Global Scale
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with entrepreneurs and investors worldwide.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Upcoming Features
            </h3>
            <div className="space-y-4">
              {[
                'Advanced Portfolio Analytics',
                'Real-time Market Insights',
                'Enhanced Collaboration Tools',
                'Mobile App 2.0',
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                >
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-gray-900 dark:text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureReady;