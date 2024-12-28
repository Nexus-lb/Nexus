import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Handshake, LineChart, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Handshake,
    title: 'Investor Matchmaking',
    description: 'Connect with investors who align with your vision and goals.',
  },
  {
    icon: MessageSquare,
    title: 'Real-time Collaboration',
    description: 'Communicate and share updates instantly with your network.',
  },
  {
    icon: LineChart,
    title: 'Growth Tracking',
    description: 'Monitor your progress and celebrate milestones together.',
  },
];

const FeatureShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextFeature = () => {
    setActiveIndex((current) => (current + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveIndex((current) => (current - 1 + features.length) % features.length);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-6">
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <button
          onClick={prevFeature}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <button
          onClick={nextFeature}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-300 absolute ${
                index === activeIndex
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ display: index === activeIndex ? 'block' : 'none' }}
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-2 mt-8">
        {features.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureShowcase;