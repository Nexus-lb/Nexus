export const emailTemplates = {
    confirmSignUp: {
      subject: 'Welcome to Nexus - Verify Your Email',
      content: `
        <h2>Welcome to Nexus!</h2>
        <p>Thank you for signing up. Please use the following code to verify your email address:</p>
        <div style="background-color: #f3f4f6; padding: 12px; margin: 16px 0; text-align: center; font-size: 24px; letter-spacing: 4px; font-family: monospace;">
          {{ .Token }}
        </div>
        <p>This code will expire in 1 hour.</p>
        <p>If you didn't create an account with Nexus, please ignore this email.</p>
        <br>
        <p>Best regards,</p>
        <p>The Nexus Team</p>
      `,
    },
  };