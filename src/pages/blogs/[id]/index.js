import React from "react";
import { useRouter } from "next/router";
import { blogsData } from "../../blogsData";
import Link from "next/link";

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = blogsData[0].find((item) => item.slug === id);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[500px] pt-[120px] object-cover"
      />
      <div className="container mx-auto px-[250px] py-[50px]">
        <h1 className="text-[40px] font-bold mt-4">{blog.title}</h1>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium mt-2">By {blog.author}</h3> |
          <p className="mt-2 text-blue-500">Published on: {blog.date}</p>
        </div>
        {blog.description.map((paragraph, index) => (
          <div key={index} className="flex flex-col gap-5 mt-4">
            <p>{paragraph}</p>
          </div>
        ))}
        <Link href="/blogs">
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
