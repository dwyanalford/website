import nodemailer from 'nodemailer';
import fetch from 'node-fetch';

export default async (req, res) => {
  const { firstName, lastName, email, subject, details, recaptcha } = req.body;

  // Verify recaptcha
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptcha}`;
  const verifyRes = await fetch(verifyUrl, { method: 'POST' });
  const verifyData = await verifyRes.json();
  
  if (!verifyData.success) {
    res.status(403).json({ status: 'error', message: 'reCAPTCHA verification failed' });
    return;
  }

  let transporter = nodemailer.createTransport({
    service: 'iCloud', // replace with your email service
    auth: {
      user: ICLOUD_USER,
      pass: ICLOUD_PASSWORD,
    },
  });

  let mailOptions = {
    from: email,
    to: ICLOUD_USER,
    subject: subject,
    text: `${firstName} ${lastName}: ${details}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).json({ status: 'error', message: error.message });
    } else {
      res.status(200).json({ status: 'success', message: 'Email sent: ' + info.response });
    }
  });
};
