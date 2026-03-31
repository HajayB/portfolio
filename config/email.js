import { Resend } from "resend";
import { env } from "./env.js";

export const emailConfig = {
  EMAIL_FROM: env.email.from,
  ADMIN_EMAIL: env.email.admin_email,
};

export const resend = new Resend(env.email.resend);