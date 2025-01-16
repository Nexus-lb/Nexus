import React, { useState, useEffect } from 'react';
import { KeyRound } from 'lucide-react';
import { emailService } from '../../../services/emailService';
import { toast } from 'react-hot-toast';

interface StepTwoProps {
  email: string;
  onVerified: () => void;
}

export const StepTwo: React.FC<StepTwoProps> = ({ email, onVerified }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setInterval(() => setCountdown(c => c - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const isValid = emailService.verifyOTP(email, otp);
      
      if (!isValid) {
        toast.error('Invalid verification code. Please try again.');
        return;
      }

      toast.success('Email verified successfully');
      onVerified();
    } catch (error) {
      toast.error('Invalid verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      await emailService.sendOTP(email);
      setCountdown(30);
      toast.success('Verification code resent successfully');
    } catch (error) {
      toast.error('Failed to resend verification code');
    }
  };

  return (
    <form onSubmit={handleVerifyOTP} className="space-y-6">
      <div className="text-center">
        <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
          <KeyRound className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Enter Verification Code
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          We've sent a verification code to <strong>{email}</strong>
        </p>
      </div>

      <div>
        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
          className="block w-full text-center text-2xl tracking-widest rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="000000"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading || otp.length !== 6}
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Verifying...' : 'Verify Code'}
      </button>

      <div className="text-center">
        {countdown > 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Resend code in {countdown}s
          </p>
        ) : (
          <button
            type="button"
            onClick={handleResendOTP}
            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Resend verification code
          </button>
        )}
      </div>
    </form>
  );
};