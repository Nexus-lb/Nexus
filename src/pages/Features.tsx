import React from 'react';
import FeaturesHero from '../components/features/FeaturesHero';
import CoreFeatures from '../components/features/CoreFeatures';
import UniqueFeature from '../components/features/UniqueFeature';
import Accessibility from '../components/features/Accessibility';
import FutureReady from '../components/features/FutureReady';
import FeaturesCTA from '../components/features/FeaturesCTA';

const Features = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <FeaturesHero />
      <CoreFeatures />
      <UniqueFeature />
      <Accessibility />
      <FutureReady />
      <FeaturesCTA />
    </div>
  );
};

export default Features;