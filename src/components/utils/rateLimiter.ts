interface RateLimitAttempt {
  count: number;
  lastAttempt: number;
}

export class RateLimiter {
  private attempts: Map<string, RateLimitAttempt>;
  private windowMs: number;
  private maxAttempts: number;

  constructor(windowMs: number, maxAttempts: number) {
    this.attempts = new Map();
    this.windowMs = windowMs;
    this.maxAttempts = maxAttempts;
  }

  checkLimit(key: string): { allowed: boolean; waitSeconds?: number } {
    const now = Date.now();
    const attempt = this.attempts.get(key) || { count: 0, lastAttempt: 0 };

    if (now - attempt.lastAttempt > this.windowMs) {
      attempt.count = 0;
    }

    if (attempt.count >= this.maxAttempts) {
      const waitTime = Math.ceil((this.windowMs - (now - attempt.lastAttempt)) / 1000);
      return { allowed: false, waitSeconds: waitTime };
    }

    this.attempts.set(key, {
      count: attempt.count + 1,
      lastAttempt: now
    });

    return { allowed: true };
  }

  blockKey(key: string) {
    this.attempts.set(key, {
      count: this.maxAttempts,
      lastAttempt: Date.now()
    });
  }
}