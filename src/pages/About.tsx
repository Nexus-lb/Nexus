import React from 'react';

const About = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Nexus</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Nexus is a revolutionary platform connecting visionary entrepreneurs with strategic investors.
            Our mission is to democratize access to funding and support for innovative startups.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;