import React, { useState } from 'react';
import { StepOne } from './steps/StepOne';
import { StepTwo } from './steps/StepTwo';
import { StepThree } from './steps/StepThree';
import { StepFour } from './steps/StepFour';
import type { SignupFormData } from '../../types/auth';
import { toast } from 'react-hot-toast';
import { authService } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

export const SignupForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    userType: 'entrepreneur',
    password: '',
    confirmPassword: '',
  });

  const updateFormData = (field: keyof SignupFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      await authService.signUp(formData);
      toast.success('Please check your email to verify your account');
      navigate('/auth', { replace: true });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to create account');
    }
  };

  const handleEmailVerification = () => {
    // Move to next step after user confirms they've verified their email
    setStep(3);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between mb-8">
        {[1, 2, 3, 4].map((number) => (
          <div
            key={number}
            className={`w-1/4 h-1 rounded-full transition-colors ${
              number <= step ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {step === 1 && (
        <StepOne
          formData={{ name: formData.name, email: formData.email }}
          onUpdate={updateFormData}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <StepTwo
          email={formData.email}
          onVerified={handleEmailVerification}
        />
      )}

      {step === 3 && (
        <StepThree
          userType={formData.userType}
          onUpdate={(value) => updateFormData('userType', value)}
          onNext={() => setStep(4)}
        />
      )}

      {step === 4 && (
        <StepFour
          password={formData.password}
          confirmPassword={formData.confirmPassword}
          onUpdate={updateFormData}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};