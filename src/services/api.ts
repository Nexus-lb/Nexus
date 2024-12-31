import axios from 'axios';
import type { SignupFormData, OtpData } from '../types/auth';

const api = axios.create({
  baseURL: '/api',
});

export const authApi = {
  signup: (data: SignupFormData) => api.post('/auth/signup', data),
  verifyOtp: (data: OtpData) => api.post('/auth/verify-otp', data),
  resendOtp: (email: string) => api.post('/auth/resend-otp', { email }),
  login: (email: string, password: string) => api.post('/auth/login', { email, password }),
};