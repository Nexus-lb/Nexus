import React from 'react';
import { BackgroundShapes } from '../shared/BackgroundShapes';

const ContactHero = () => {
  return (
    <div className="relative py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <BackgroundShapes />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch with Us
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We're here to help! Fill out the form below, or reach us through email or phone.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;