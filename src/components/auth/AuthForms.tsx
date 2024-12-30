import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

export const AuthForms = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {isLogin ? 'Welcome Back!' : 'Create Account'}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {isLogin
            ? 'Sign in to continue your journey'
            : 'Join our community of innovators'}
        </p>
      </div>

      {isLogin ? <LoginForm /> : <SignupForm />}

      <div className="text-center">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : 'Already have an account? Log in'}
        </button>
      </div>
    </div>
  );
};