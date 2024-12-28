import React from 'react';
import { Users, LineChart, Shield, Rocket, MessageSquare, Target } from 'lucide-react';

const features = [
  {
    name: 'For Entrepreneurs',
    description: 'Showcase your journey, milestones, and connect with potential investors.',
    icon: Rocket,
  },
  {
    name: 'For Investors',
    description: 'Access curated startups and make informed investment decisions.',
    icon: LineChart,
  },
  {
    name: 'Secure Platform',
    description: 'Enterprise-grade security for all transactions and communications.',
    icon: Shield,
  },
  {
    name: 'Community Driven',
    description: 'Engage with a thriving community of innovators and supporters.',
    icon: Users,
  },
  {
    name: 'Real-time Updates',
    description: 'Stay informed with instant notifications and progress tracking.',
    icon: Target,
  },
  {
    name: 'Direct Communication',
    description: 'Seamless interaction between entrepreneurs and investors.',
    icon: MessageSquare,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Every User
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to connect, collaborate, and succeed in the startup ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-900 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;