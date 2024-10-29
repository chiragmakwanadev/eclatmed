import React, { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogsData } from "../../data/blogsData";
import Link from "next/link";
import Clamp from "../clamp";

const flattenedBlogsData = blogsData[0];

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const lastIndex = currentPage * blogsPerPage;
  const firstIndex = lastIndex - blogsPerPage;

  const currentBlogs = flattenedBlogsData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(flattenedBlogsData.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Breadcrumbs currentPage="Blogs" />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-[50px]"
        style={{
          paddingLeft: Clamp(1.25, 15.62),
          paddingRight: Clamp(1.25, 15.62),
        }}
      >
        {currentBlogs.map((blog) => (
          <div key={blog.slug} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
            <p className="mt-1">
              {blog.description[0].split(" ").slice(0, 20).join(" ") + "..."}
            </p>
            <Link href={`/blogs/${blog.slug}`}>
              <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                Show More
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center py-[50px]">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Index;
