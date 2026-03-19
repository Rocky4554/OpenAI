import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_APP_PASSWORD,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Notify you with the submission
    await transporter.sendMail({
      from: `"OpenBusiness.ai" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact from ${name} — OpenBusiness.ai`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#3B82F6;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:600;width:80px;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
          </table>
          <h3 style="margin-top:20px;">Message:</h3>
          <p style="background:#f5f5f5;padding:16px;border-radius:8px;white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });

    // Auto-reply to the user
    await transporter.sendMail({
      from: `"OpenBusiness.ai" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "We've received your message — OpenBusiness.ai",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#3B82F6;">Thanks for reaching out, ${name}!</h2>
          <p>We've received your message and our team will get back to you shortly.</p>
          <p style="color:#666;">In the meantime, feel free to explore what OpenBusiness.ai can do for your business.</p>
          <br/>
          <p>Best regards,<br/><strong>The OpenBusiness.ai Team</strong></p>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

// Serve static frontend in production
if (process.env.NODE_ENV === 'production') {
  const staticPath = path.resolve(__dirname, '../dist/public');
  app.use(express.static(staticPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
