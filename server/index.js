import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

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

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.post('/api/contact', async (req, res) => {
  const { name, email, company, companySize, tools, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Notify you with the submission
    await transporter.sendMail({
      from: `"OpenBusiness.ai" <${process.env.SMTP_EMAIL}>`,
      replyTo: `"OpenBusiness.ai" <${process.env.RECEIVER_EMAIL}>`,
      to: [process.env.RECEIVER_EMAIL, process.env.RECEIVER_EMAIL_BACKUP].filter(Boolean).join(', '),
      subject: `New Contact from ${name} — OpenBusiness.ai`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#3B82F6;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:600;width:120px;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600;">Company:</td><td>${company || '—'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;">Company Size:</td><td>${companySize || '—'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;">Tools Used:</td><td>${tools || '—'}</td></tr>
          </table>
          <h3 style="margin-top:20px;">Message:</h3>
          <p style="background:#f5f5f5;padding:16px;border-radius:8px;white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });

    // Auto-reply to the user (temporarily disabled)
    // await transporter.sendMail({
    //   from: `"OpenBusiness.ai" <${process.env.SMTP_EMAIL}>`,
    //   replyTo: `"OpenBusiness.ai Team" <${process.env.RECEIVER_EMAIL}>`,
    //   to: email,
    //   subject: "We've received your message — OpenBusiness.ai",
    //   html: `
    //     <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
    //       <h2 style="color:#3B82F6;">Thanks for reaching out, ${name}!</h2>
    //       <p>We've received your message and our team will get back to you within 24 hours to schedule your 48-hour scan.</p>
    //       <p style="color:#666;">In the meantime, feel free to explore what OpenBusiness.ai can do for your business.</p>
    //       <br/>
    //       <p>Best regards,<br/><strong>The OpenBusiness.ai Team</strong></p>
    //     </div>
    //   `,
    // });

    // Save lead to Supabase (openbusiness schema)
    const { error: dbError } = await supabase
      .from('openbusiness_leads')
      .insert({
        name: name.trim(),
        email: email.trim(),
        company: company?.trim() || null,
        company_size: companySize || null,
        tools: tools?.trim() || null,
        message: message.trim(),
      });

    if (dbError) {
      console.error('Supabase insert error:', dbError.message);
    }

    res.json({ success: true });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

app.post('/api/demo', async (req, res) => {
  const { firstName, lastName, email, phone, company, message } = req.body;

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !phone?.trim()) {
    return res.status(400).json({ error: 'First name, last name, email and phone are required.' });
  }

  const name = `${firstName} ${lastName}`;

  try {
    await transporter.sendMail({
      from: `"OpenBusiness.ai" <${process.env.SMTP_EMAIL}>`,
      replyTo: `"OpenBusiness.ai" <${process.env.RECEIVER_EMAIL}>`,
      to: [process.env.RECEIVER_EMAIL, process.env.RECEIVER_EMAIL_BACKUP].filter(Boolean).join(', '),
      subject: `New Demo Request from ${name} — OpenBusiness.ai`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#3B82F6;">New Demo Request</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:600;width:100px;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600;">Phone:</td><td>${phone}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;">Company:</td><td>${company || '—'}</td></tr>
          </table>
          ${message ? `<h3 style="margin-top:20px;">Message:</h3><p style="background:#f5f5f5;padding:16px;border-radius:8px;white-space:pre-wrap;">${message}</p>` : ''}
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"OpenBusiness.ai" <${process.env.SMTP_EMAIL}>`,
      replyTo: `"OpenBusiness.ai Team" <${process.env.RECEIVER_EMAIL}>`,
      to: email,
      subject: "Your demo request is confirmed — OpenBusiness.ai",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#3B82F6;">Thanks, ${firstName}! Your demo is booked.</h2>
          <p>We've received your request and our team will reach out within 24 hours to schedule your personalized demo.</p>
          <p style="color:#666;">We're excited to show you what OpenBusiness.ai can do for your business.</p>
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
