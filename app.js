import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { sendContactMessage } from "./controller/emailController.js";
import "./config/env.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 4600;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/contact", sendContactMessage);

app.listen(PORT, () => {
  console.log(`Portfolio running on http://localhost:${PORT}`);
});