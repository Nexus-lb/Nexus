import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const SERVICE_ID = 'service_m4696gb';
const TEMPLATE_ID = 'template_u4di12n';
const PUBLIC_KEY = '7NKznKbgtE07tnpFu';

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export const emailService = {
  async sendOTP(email: string) {
    try {
      // Generate 6-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Store OTP in session storage
      sessionStorage.setItem(`otp_${email}`, otp);
      
      // Send email using EmailJS
      const templateParams = {
        to_email: email,
        message: `Your verification code is: ${otp}`,
        from_name: 'Nexus',
        to_name: email.split('@')[0],
      };

      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      if (response.status === 200) {
        toast.success('Verification code sent to your email');
        return true;
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Failed to send OTP:', error);
      toast.error('Failed to send verification code. Please try again.');
      throw error;
    }
  },

  verifyOTP(email: string, submittedOTP: string): boolean {
    const storedOTP = sessionStorage.getItem(`otp_${email}`);
    if (!storedOTP) return false;
    
    const isValid = storedOTP === submittedOTP;
    if (isValid) {
      sessionStorage.removeItem(`otp_${email}`);
    }
    
    return isValid;
  }
};