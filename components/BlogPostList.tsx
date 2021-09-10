import { Document } from "@prismicio/client/types/documents";
import React, { VFC } from "react";
import BlogPostItem from "./BlogPostItem";

type BlogPostListProps = {
  blogPosts: Document[];
};

const BlogPostList: VFC<BlogPostListProps> = ({ blogPosts }) => (
  <div className="blog-posts">
    {blogPosts.map((blogPost) => (
      <div key={blogPost.id}>
        <BlogPostItem blogPost={blogPost} />
      </div>
    ))}
    <style jsx>{`
      .blog-posts {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));
        gap: 3rem;
        margin: 2rem 0;
        position: relative;
      }
    `}</style>
  </div>
);

export default BlogPostList;
