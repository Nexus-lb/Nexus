import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.VITE_SMTP_HOST,
  port: Number(process.env.VITE_SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.VITE_SMTP_USER,
    pass: process.env.VITE_SMTP_PASS
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, otp } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.VITE_FROM_EMAIL,
      to: to,
      subject: 'Your Verification Code',
      html: `
        <h2>Welcome to Nexus!</h2>
        <p>Your verification code is:</p>
        <h1 style="font-size: 32px; letter-spacing: 4px;">${otp}</h1>
        <p>This code will expire in 5 minutes.</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}