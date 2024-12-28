import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Hero />
      <Features />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;