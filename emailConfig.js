// emailConfig.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "akakk3485@gmail.com",
    pass: "xhgc ncsl jglo vprp"
  }
});
