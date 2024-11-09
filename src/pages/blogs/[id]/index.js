// pages/blogs/[id].js
import React from "react";
import { blogsData } from "../../../data/blogsData";
import Link from "next/link";
import Clamp from "../../clamp";
import Head from "next/head";
import Image from "next/image";

export async function getStaticPaths() {
  const paths = blogsData[0].map((blog) => ({
    params: { id: blog.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const blog = blogsData[0].find((item) => item.slug === id);

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: { blog },
  };
}

const BlogPost = ({ blog }) => {
  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div>
      <Head>
        <title>Eclat Medical | {blog.title}</title>
      </Head>
      <Image
        src={blog.image}
        alt={blog.title}
        width={1200}
        height={500}
        className="w-full h-[500px] pt-[120px] object-cover"
      />
      <div
        className="container mx-auto py-[50px]"
        style={{
          paddingLeft: Clamp(1.25, 15.62),
          paddingRight: Clamp(1.25, 15.62),
        }}
      >
        <h1 className="font-bold mt-4" style={{ fontSize: Clamp(1.4, 2.4) }}>
          {blog.title}
        </h1>
        <div className="flex items-center gap-2">
          <h3
            className="font-medium mt-2"
            style={{ fontSize: Clamp(0.7, 1.5) }}
          >
            By {blog.author}
          </h3>{" "}
          |
          <p
            className="mt-2 text-blue-500"
            style={{ fontSize: Clamp(0.7, 1.5) }}
          >
            Published on: {blog.date}
          </p>
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
