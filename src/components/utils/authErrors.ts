export class AuthError extends Error {
    constructor(message: string, public code?: string) {
      super(message);
      this.name = 'AuthError';
    }
  }
  
  export const handleAuthError = (error: unknown): AuthError => {
    if (error instanceof AuthError) {
      return error;
    }
  
    const message = error instanceof Error ? error.message : 'An unexpected error occurred';
    
    if (message.includes('rate limit')) {
      return new AuthError('Too many attempts. Please try again later.', 'rate_limit');
    }
  
    return new AuthError('Authentication failed. Please try again.', 'unknown');
  };