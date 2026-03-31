import { resend, emailConfig } from "../config/email.js";

export const sendContactEmail = async ({ email, message }) => {
  // Email to admin
  await resend.emails.send({
    from: emailConfig.EMAIL_FROM,
    to: emailConfig.ADMIN_EMAIL,
    subject: "📩 New Contact Message",
    html: `
      <h2>New message from your portfolio site</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  // Auto-reply to sender
  await resend.emails.send({
    from: emailConfig.EMAIL_FROM,
    to: email,
    subject: "Message Received 📩",
    html: `
      <h3>Hi,</h3>
      <p>Thanks for reaching out!</p>
      <p>Your message has been received and I will get back to you shortly.</p>
      <br/>
      <p><strong>Your message:</strong></p>
      <p>${message}</p>
    `,
  });
};