import React from 'react';
import { Briefcase } from 'lucide-react';

interface StepThreeProps {
  userType: string;
  onUpdate: (value: string) => void;
  onNext: () => void;
}

export const StepThree: React.FC<StepThreeProps> = ({ userType, onUpdate, onNext }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType) {
      onNext();
    } else {
      toast.error('Please select a user type');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="userType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          I am a
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Briefcase className="h-5 w-5 text-gray-400" />
          </div>
          <select
            id="userType"
            value={userType}
            onChange={(e) => onUpdate(e.target.value)}
            className="pl-10 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            required
          >
            <option value="">Select user type</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="investor">Investor</option>
            <option value="general">General User</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Next
      </button>
    </form>
  );
};