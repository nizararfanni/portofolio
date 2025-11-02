"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { usePostArticle } from "@/hooks/useArticles";
import { Article } from "@/types/Articles";
import { useState } from "react";

export default function ArticleForm() {
  const [form, setForm] = useState<Article>({
    text: "",
    image: "",
  });
  const { postArticle, loading, error } = usePostArticle();

  if (loading) return <p>Posting article...</p>;
  if (error) return <p>Error posting article: {error.message}</p>;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //function buat handle image dan ubah ke base64
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // console.log("file", file);

    const imageDecoded: string = await convertToBase64(file);
    // console.log(imageDecoded);

    setForm({ ...form, image: imageDecoded });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newArticle = await postArticle(form);
      console.log("succes upload data from next", newArticle);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <Card className="w-full max-w-5xl border-0 ">
        <CardContent className="flex gap-2 mt-6">
          <Avatar className="w-8 h-8 md:w-10 md:h-10">
            <AvatarImage
              src="http://localhost:3000/images/me.jpg"
              alt="Profile Picture"
              className="object-cover object-center"
            />
            <AvatarFallback>Profile Picture</AvatarFallback>
          </Avatar>
          <div className="flex-1  space-y-2 ">
            <Label htmlFor="message" className="">
              Your message
            </Label>
            <form onSubmit={handleSubmit} className="flex-1 space-y-2">
              <Textarea
                name="text"
                onChange={handleChange}
                placeholder="What's happening?"
                className="w-[280px] md:w-3xl h-52"
              />
              <Input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="w-[280px] md:w-3xl"
              />
              <div className="flex justify-start">
                <Button
                  type="submit"
                  variant="outline"
                  className="cursor-pointer"
                >
                  Post
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// convert images to base64
const convertToBase64: (file: File) => Promise<string> = (file: File) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (): void => {
      // fileReader.result bisa null, jadi pastikan string
      if (typeof fileReader.result === "string") {
        resolve(fileReader.result);
      } else {
        reject("FileReader result is not a string");
      }
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
