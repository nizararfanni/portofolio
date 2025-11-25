import connectionMongoDb from "@/lib/mongoose";
import Articles from "@/models/ArticlesSchema";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectionMongoDb();
    const article = await Articles.findById(params.id);
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json({ data: article });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

//hnadle delete
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectionMongoDb();
    const deletedArticle = await Articles.findByIdAndDelete(params.id);
    if (!deletedArticle) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Article deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
