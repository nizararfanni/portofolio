"use client";

import { useGetArticles } from "@/hooks/useArticles";
import { Article } from "@/types/Articles";
import Link from "next/link";

export default function ArticlesPage() {
  const { data, loading, error } = useGetArticles();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6 space-y-4 w-full min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold">All Articles</h1>
      {data.length === 0 && <p>No articles yet.</p>}

      {/* menampilkan semua artikel */}
      <div className="space-y-3 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-4">
        {data.map((article: Article) => (
          <Link
            key={article._id}
            className="
          border p-4 rounded bg-white text-black flex flex-col justify-between
          w-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px]
        "
            href={`/articles/detail/${article._id}`}
          >
            {/* Judul */}
            <p className="font-semibold text-left">{article.text}</p>

            {/* Gambar */}
            {article.image?.length > 0 && (
              <div className="mt-2 flex justify-center rounded-md">
                <img
                  src={article.image ? article.image : ""}
                  alt="Article image"
                  className="rounded-md 
                 object-contain
                w-full max-w-[90%] max-h-[180px]
                sm:max-h-[220px]
                md:max-h-[300px]
              "
                />
              </div>
            )}

            {/* Tanggal */}
            <h1 className="text-sm text-black mt-2 flex space-x-2  text-left">
              <span className="font-semibold">Created At:</span>
              <p>
                {" "}
                {article.createdAt &&
                  new Date(article.createdAt).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
              </p>
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
