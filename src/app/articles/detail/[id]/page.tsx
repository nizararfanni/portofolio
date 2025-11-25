"use client";

import { useGetArticlesByid } from "@/hooks/useArticles";
import { useParams } from "next/navigation";

export default function ArticleDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const { data, loading, error } = useGetArticlesByid(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;
  console.log(data);

  if (!data) return <p>Article not found</p>;

  return (
    <div className="max-w-5xl mx-auto py-10 min-h-screen flex justify-center items-center flex-col">
      <img
        src={data.image}
        alt="Article image"
        className="w-full h-auto rounded-md mb-6"
      />

      <div className="w-full text-left">
        <h1 className="text-2xl font-bold mb-2">{data.text}</h1>
        <p className="text-white opacity-50">
          Created at:{" "}
          {new Date(data.createdAt ?? "").toLocaleString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}
