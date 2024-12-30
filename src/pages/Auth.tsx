import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Users } from 'lucide-react';
import { AuthForms } from '../components/auth/AuthForms';

export const Auth = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 p-12 bg-blue-600 dark:bg-blue-900 text-white flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-900/90 dark:from-blue-900/90 dark:to-gray-900/90" />
        
        <div className="relative z-10">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <Lightbulb className="w-8 h-8 mr-2" />
            Nexus
          </Link>
        </div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl font-bold">Your journey to innovation starts here!</h2>
          <p className="text-xl text-blue-100">Connect, collaborate, and bring your ideas to life.</p>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-start space-x-3">
              <Users className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold">Community-Driven Innovation</h3>
                <p className="text-blue-100">Join a network of visionary entrepreneurs and strategic investors.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-sm text-blue-100">
            © {new Date().getFullYear()} Nexus. All rights reserved.
          </p>
        </div>

        {/* Background illustration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <AuthForms />
        </div>
      </div>
    </div>
  );
};