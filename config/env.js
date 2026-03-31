import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

export const env = {
    email: {
    resend: process.env.RESEND_API_KEY, 
    from: process.env.EMAIL_FROM ,
    admin_email: process.env.ADMIN_EMAIL,
  },
};