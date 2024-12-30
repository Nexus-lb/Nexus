export interface SignupFormData {
    name: string;
    email: string;
    userType: 'entrepreneur' | 'investor' | 'general';
    password: string;
    confirmPassword: string;
  }
  
  export interface OtpData {
    email: string;
    otp: string;
  }