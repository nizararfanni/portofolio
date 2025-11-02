import { Article, ArticlesResponse } from "@/types/Articles";
import api from "./axios";
import { AxiosResponse } from "axios";

export const getArticles = async (): Promise<ArticlesResponse> => {
  const res: AxiosResponse<ArticlesResponse> = await api.get<ArticlesResponse>(
    "/Articles"
  );
  return res.data;
};

//fungsi post article
export const postArticles = async (article: Article): Promise<Article> => {
  const res: AxiosResponse<Article> = await api.post<Article>(
    "/Articles",
    article
  );
  return res.data;
};
