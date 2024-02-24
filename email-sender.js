const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // replace with your email
    pass: 'your_password' // replace with your password
  }
});

// Setup email data
const mailOptions = {
  from: 'your_email@gmail.com', // sender address
  to: 'recipient_email@gmail.com', // list of receivers
  subject: 'Test Email', // Subject line
  text: 'This is a test email sent from Node.js', // plain text body
  html: '<b>This is a test email sent from Node.js</b>' // html body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});