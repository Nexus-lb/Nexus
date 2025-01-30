import React from 'react';
import { useInView } from 'react-intersection-observer';
import { UserPlus, Search, HandshakeIcon, Rocket, ChevronRight } from 'lucide-react';

export const HowItWorks = () => {
  const { ref: stepsRef, inView: stepsInView } = useInView({ triggerOnce: true });
  const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true });

  const steps = [
    {
      icon: <UserPlus className="h-12 w-12" />,
      title: 'Sign Up',
      description: 'Create your profile and specify your role as an entrepreneur or investor.'
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: 'Explore',
      description: 'Browse through curated startup profiles or investment opportunities.'
    },
    {
      icon: <HandshakeIcon className="h-12 w-12" />,
      title: 'Collaborate',
      description: 'Connect with potential partners and engage in meaningful discussions.'
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      title: 'Grow',
      description: 'Achieve milestones and celebrate success stories together.'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started?',
      answer: 'Simply sign up for an account, complete your profile, and start exploring opportunities that match your interests.'
    },
    {
      question: 'Is my information secure?',
      answer: 'Yes, we use enterprise-grade security measures to protect all user data and transactions.'
    },
    {
      question: 'How are startups verified?',
      answer: 'We have a thorough verification process that includes document verification and background checks.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Your journey to success starts here. Learn how Nexus connects great ideas with the right opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div
        ref={stepsRef}
        className={`dark:bg-gray-900 py-16 px-4 md:px-8 max-w-7xl mx-auto transition-all duration-1000 ${
          stepsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-blue-600 dark:text-blue-400 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div
        ref={faqRef}
        className={`py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-800 transition-all duration-1000 ${
          faqInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="dark:bg-gray-900 py-16 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join Nexus today and become part of a thriving community of entrepreneurs and investors.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;