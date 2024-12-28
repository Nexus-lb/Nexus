import React from 'react';
import WelcomeHero from '../components/onboarding/WelcomeHero';
import BenefitsSummary from '../components/onboarding/BenefitsSummary';
import FeatureShowcase from '../components/onboarding/FeatureShowcase';
import CallToAction from '../components/onboarding/CallToAction';
import Testimonials from '../components/onboarding/Testimonials';
import { BackgroundShapes } from '../components/shared/BackgroundShapes';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <BackgroundShapes />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <WelcomeHero />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <BenefitsSummary />
          <FeatureShowcase />
          <CallToAction />
        </div>

        <Testimonials />
      </div>
    </div>
  );
};

export default GetStarted;