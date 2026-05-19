import { Metadata } from "next";
import { blogs } from "@/lib/blogs";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | PergoClean — Pergola Bakım ve Restorasyon",
  description: "Pergola, tente, BioClimatic, RollingRoof, zip perde bakımı ve temizliği hakkında uzman bilgileri.",
};

export default function BlogPage() {
  const posts = blogs.slice(0, 12);
  return <BlogClient posts={posts} />;
}