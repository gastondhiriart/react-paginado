import { notFound } from "next/navigation";
import Posts from "@/components/posts";
import { ELEMENTS_PER_PAGE, pageCount, phoneImages } from "@/utils/data";

export default async function PostsPage({ params }) {
  const { page } = await params;
  const pageNum = Number(page);
  if (!Number.isInteger(pageNum) || pageNum < 1 || pageNum > pageCount) {
    notFound();
  }

  const end = pageNum * ELEMENTS_PER_PAGE;
  const start = end - ELEMENTS_PER_PAGE;
  const imagesToShow = phoneImages.slice(start, end);

  return <Posts items={imagesToShow} currentPage={pageNum} />;
}

export async function generateStaticParams() {
  return Array.from({ length: pageCount }, (_, i) => ({
    page: String(i + 1),
  }));
}
