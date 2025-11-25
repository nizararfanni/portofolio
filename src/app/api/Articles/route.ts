import { NextResponse } from "next/server";
import connectionMongoDb from "@/lib/mongoose";
import Articles from "@/models/ArticlesSchema";

//route buat buat artikel
export async function POST(request: Request) {
  const body = await request.json();
  try {
    //buat koneksi ke mongodb
    await connectionMongoDb();

    //upload image/file ke cloudinary
    const formData = await Articles.create(body);

    return NextResponse.json({
      message: "Article created successfully",
      data: formData,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

//route buat dapatkan semua pstingan
export async function GET() {
  try {
    await connectionMongoDb();
    const data = await Articles.find();

    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
