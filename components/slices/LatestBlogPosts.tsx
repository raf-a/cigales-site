import BlogPostList from "components/BlogPostList";
import Container from "components/Container";
import Heading from "components/Heading";
import React, { VFC } from "react";
import { SliceProps } from "./SliceProps";

const LatestBlogPosts: VFC<SliceProps> = ({ slice }) => (
  <Container>
    <Heading title={slice.primary.title} mb={3} />
    <BlogPostList blogPosts={slice.blogPosts} />
  </Container>
);

export default LatestBlogPosts;
