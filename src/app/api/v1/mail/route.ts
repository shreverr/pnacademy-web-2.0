// app/api/v1/mail/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Validate environment variables
    const username = process.env.EMAIL_USERNAME;
    const password = process.env.EMAIL_PASSWORD;
    const myEmail = process.env.EMAIL;
    const host = process.env.EMAIL_HOST;
    const port = process.env.EMAIL_PORT;

    if (!username || !password || !myEmail || !host || !port) {
      console.error('Missing environment variables');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create transporter with more detailed error handling
    const transporter = nodemailer.createTransport({
      host: host,
      port: parseInt(port),
      secure: false, // true for 465, false for other ports
      auth: {
        user: username,
        pass: password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify transporter
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        { message: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Parse request body
    const data = await req.json();
    const { firstName, lastName, email, phone, message } = data;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: `"Contact Form" <${myEmail}>`,
      to: myEmail,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email with better error handling
    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { message: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}