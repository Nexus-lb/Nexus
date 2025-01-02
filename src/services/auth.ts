import { supabase } from '../lib/supabase';
import type { SignupFormData } from '../types/auth';
import { RateLimiter } from '../components/utils/rateLimiter';
import { AuthError, handleAuthError } from '../components/utils/authErrors';

const emailLimiter = new RateLimiter(60000, 3); // 1 minute window, 3 attempts

export const authService = {
  async verifyOTP(email: string, token: string) {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'signup'
      });

      return { data, error };
    } catch (error) {
      throw handleAuthError(error);
    }
  },

  async resendOTP(email: string) {
    const { allowed, waitSeconds } = emailLimiter.checkLimit(email);
    
    if (!allowed) {
      throw new AuthError(
        `Too many attempts. Please wait ${waitSeconds} seconds.`,
        'rate_limit'
      );
    }

    try {
      const { error } = await supabase.auth.resend({
        email,
        type: 'signup'
      });

      if (error) {
        if (error.message.includes('rate limit')) {
          emailLimiter.blockKey(email);
        }
        throw error;
      }
    } catch (error) {
      throw handleAuthError(error);
    }
  },

  // ... other methods remain the same
};