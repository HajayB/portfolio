import { sendContactEmail } from "../services/emailService.js";

export const sendContactMessage = async (req, res) => {
  try {
    const {email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    await sendContactEmail({email, message });

    return res.status(200).json({
      message: "Message sent successfully. Check your email ✉️",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Failed to send message",
    });
  }
};