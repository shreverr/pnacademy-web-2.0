const nodemailer = require('nodemailer');

async function handler(req: Request, res: Response) {
  try {
    const username = process.env.EMAIL_USERNAME;
    const password = process.env.EMAIL_PASSWORD;
    const myEmail = process.env.EMAIL;
    const host = process.env.EMAIL_HOST;
    const port = process.env.EMAIL_PORT;

    console.log(username, password, myEmail, host, port);

    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: username,
        pass: password
      }
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error: any, success: any) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const data = await req.json();
    const { firstName, lastName, email, phone, message } = data;

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

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err: any, info: any) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    return Response.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: 'Server Error' }, { status: 500 });
  }
}

export { handler as POST }