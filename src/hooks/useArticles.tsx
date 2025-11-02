import { getArticles, postArticles } from "@/lib/articlesService";
import { Article } from "@/types/Articles";
import { useEffect, useState } from "react";

export const useGetArticles: () => {
  data: Article[];
  loading: boolean;
  error: Error | null;
} = () => {
  const [data, setData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  //panggik api
  useEffect(() => {
    const fetchArticles: () => Promise<void> = async () => {
      try {
        const articles = await getArticles();
        console.log("data articles", articles.data);
        setData(articles.data || []);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { data, loading, error };
};

export const usePostArticle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const postArticle = async (articleData: Omit<Article, "id">) => {
    setLoading(true);
    setError(null);
    try {
      const newArticle = await postArticles(articleData); // return Article
      return newArticle;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { postArticle, loading, error };
};


