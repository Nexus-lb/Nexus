import React from 'react';
import { Shield, Rocket, Users, LineChart, Target, Award } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Trusted Platform',
    description: 'Enterprise-grade security and verified user profiles ensure safe interactions.',
  },
  {
    icon: Rocket,
    title: 'Fast Growth',
    description: 'Access tools and resources designed to accelerate your startup journey.',
  },
  {
    icon: Users,
    title: 'Strong Network',
    description: 'Connect with a diverse community of entrepreneurs and investors.',
  },
  {
    icon: LineChart,
    title: 'Data-Driven',
    description: 'Make informed decisions with comprehensive analytics and insights.',
  },
  {
    icon: Target,
    title: 'Perfect Match',
    description: 'Our matching algorithm ensures meaningful connections.',
  },
  {
    icon: Award,
    title: 'Expert Support',
    description: '24/7 dedicated support team to guide you through your journey.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Nexus?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs and investors who trust Nexus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <reason.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;