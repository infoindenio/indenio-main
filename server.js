const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Hostinger SMTP Configuration (Working version)
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 587, // Changed from 465 to 587
  secure: false, // false for port 587
  auth: {
    user: process.env.SMTP_USER || 'info@indenio.com',
    pass: process.env.SMTP_PASS // set SMTP_PASS in your hosting environment variables; never write the password here
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', smtp: 'Hostinger configured' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    await transporter.sendMail({
      from: `"${name}" <info@indenio.com>`,
      to: 'info@indenio.com',
      replyTo: email,
      subject: `Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });
    
    res.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to send. Please try again.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
