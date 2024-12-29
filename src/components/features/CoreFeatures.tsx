import React from 'react';
import { Users2, Lightbulb, BarChart3, Shield, MessageSquare, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Seamless Collaboration',
    description: 'Foster effortless communication and collaboration, enabling teams to work together more effectively.',
    icon: Users2,
    color: 'blue',
  },
  {
    title: 'AI-Driven Insights',
    description: 'Get data-driven recommendations and analytics tailored to your goals and objectives.',
    icon: Lightbulb,
    color: 'amber',
  },
  {
    title: 'Advanced Analytics',
    description: 'Track performance metrics and gain valuable insights with our comprehensive analytics tools.',
    icon: BarChart3,
    color: 'green',
  },
  {
    title: 'Enterprise Security',
    description: 'Rest easy knowing your data is protected with enterprise-grade security measures.',
    icon: Shield,
    color: 'red',
  },
  {
    title: 'Real-time Chat',
    description: 'Connect instantly with team members and stakeholders through our integrated chat system.',
    icon: MessageSquare,
    color: 'purple',
  },
  {
    title: 'Rapid Deployment',
    description: 'Launch your projects quickly with our streamlined deployment process.',
    icon: Rocket,
    color: 'indigo',
  },
];

const getColorClasses = (color: string) => {
  const classes = {
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
    green: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    red: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    indigo: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
  };
  return classes[color as keyof typeof classes];
};

const CoreFeatures = () => {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Nexus?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the powerful features that make Nexus the perfect platform for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-100 dark:hover:border-blue-900/50 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(feature.color)}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;