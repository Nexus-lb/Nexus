import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
      <h2 className="text-2xl font-semibold mb-4">Ready to Begin?</h2>
      <p className="text-blue-100 mb-6">
        Join our community of innovators and investors. Start your journey today.
      </p>
      
      <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
        Explore Now
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
};

export default CallToAction;