import { supabase } from '../lib/supabase';
import axios from 'axios';

const EMAIL_SERVICE_URL = 'https://api.nexuslb.org/send-otp'; // Replace with actual API endpoint

export const otpService = {
  async sendOTP(email: string) {
    try {
      // Call your email service API to send OTP
      const response = await axios.post(EMAIL_SERVICE_URL, {
        to: email,
        from: 'nexuslb.org@gmail.com',
      });
      
      return response.data;
    } catch (error) {
      throw new Error('Failed to send OTP');
    }
  },

  async verifyOTP(email: string, otp: string) {
    try {
      // Verify OTP with your backend
      const response = await axios.post(`${EMAIL_SERVICE_URL}/verify`, {
        email,
        otp
      });
      
      return response.data.valid;
    } catch (error) {
      throw new Error('Failed to verify OTP');
    }
  }
};