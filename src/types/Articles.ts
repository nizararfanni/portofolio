export type Article = {
  _id?: string;
  text: string;
  image: string;
  createdAt?: string;
};

export type ArticlesResponse = {
  data: Article[];
};
