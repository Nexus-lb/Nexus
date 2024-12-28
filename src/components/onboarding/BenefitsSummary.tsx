import React from 'react';
import { Lightbulb, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Lightbulb,
    title: 'Innovate',
    description: 'Transform your groundbreaking ideas into successful ventures.',
  },
  {
    icon: Users,
    title: 'Connect',
    description: 'Match with investors who share your vision and values.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'Access the resources and support needed to scale your business.',
  },
];

const BenefitsSummary = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Why Choose Nexus?
      </h2>
      
      <div className="space-y-6">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0">
              <benefit.icon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSummary;