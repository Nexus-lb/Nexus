import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Lightbulb, TrendingUp } from 'lucide-react';

export const About = () => {
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true });
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true });

  const values = [
    { icon: <Users className="h-8 w-8" />, title: 'Connect', description: 'Bridging Startups and Investors' },
    { icon: <Target className="h-8 w-8" />, title: 'Transparency', description: 'Building Trust Through Data and Insights' },
    { icon: <TrendingUp className="h-8 w-8" />, title: 'Growth', description: 'Empowering Success Stories' },
    { icon: <Lightbulb className="h-8 w-8" />, title: 'Innovation', description: 'Fostering Creative Solutions' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Who We Are</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Empowering the next generation of entrepreneurs and investors through meaningful connections and innovative solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div
        ref={missionRef}
        className={`dark:bg-gray-900 py-16 px-4 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            At Nexus, we believe in the power of connection. Our mission is to create a seamless bridge between visionary entrepreneurs and strategic investors, fostering an ecosystem where groundbreaking ideas meet the resources they need to thrive.
          </p>
          <div className="h-1 w-20 bg-blue-600"></div>
        </div>
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
              alt="Team collaboration"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div
        ref={valuesRef}
        className={`py-16 bg-gray-50 dark:bg-gray-800 transition-all duration-1000 ${
          valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="dark:bg-gray-900 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Start your journey with Nexus today and be part of the future of entrepreneurship.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;