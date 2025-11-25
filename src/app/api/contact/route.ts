import { contactFormSchema } from "@/lib/contactFormSchema";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    //validasi zod
    const parsedData = contactFormSchema.safeParse(data);
    if (!parsedData.success) {
      return NextResponse.json(
        { error: parsedData.error.issues[0].message },
        { status: 400 }
      );
    }

    //ambil data
    const { name, email, message, subject } = parsedData.data;
    // console.log({
    //   user: process.env.GOOGLE_GMAIL_USER,
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET ? "ada" : "kosong",
    //   refreshToken: process.env.GOOGLE_REFRESH_TOKEN?.slice(0, 10),
    // });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GOOGLE_GMAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" ${email}`,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    });
    return NextResponse.json(
      { success: true, msg: "Pesan berhasil dikirim" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
