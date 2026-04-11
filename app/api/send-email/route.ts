import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getConsultationEmailTemplate } from "@/lib/email-templates";

export async function POST(request: Request) {
  try {
    const { name, email, message, services } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // false for STARTTLS, true for 465
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Your email where you receive submissions
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nServices: ${services || "None selected"}\nMessage: ${message}`,
      html: getConsultationEmailTemplate(name, email, services, message),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
