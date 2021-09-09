import { Document } from "@prismicio/client/types/documents";
import { GetStaticProps } from "next";
import React, { VFC } from "react";
import { createClient, linkResolver } from "utils/prismic";
import Prismic from "@prismicio/client";
import ApiSearchResponse from "@prismicio/client/types/ApiSearchResponse";
import Layout from "components/Layout";
import Container from "components/Container";
import PrismicRichText from "components/PrismicRichText";
import { RichText } from "prismic-reactjs";
import PageHeader from "components/PageHeader";
import BlogPostItem from "components/BlogPostItem";
import PrismicImage from "components/PrismicImage";

type BlogIndexProps = {
  homepageDoc: Document;
  blogDoc: Document;
  blogPosts: ApiSearchResponse;
};

const BlogIndex: VFC<BlogIndexProps> = ({
  homepageDoc,
  blogDoc,
  blogPosts,
}) => {
  return (
    <Layout homepageDoc={homepageDoc}>
      <PageHeader
        title={RichText.asText(blogDoc.data.title)}
        body={<PrismicRichText render={blogDoc.data.description} />}
      />
      <Container>
        <section className="blog-posts">
          {blogPosts.results.map((blogPostDoc) => (
            <div key={blogPostDoc.id}>
              <BlogPostItem
                href={linkResolver(blogPostDoc)}
                title={RichText.asText(blogPostDoc.data.title)}
                chapo={RichText.asText(blogPostDoc.data.chapo)}
                image={<PrismicImage render={blogPostDoc.data.image} />}
              />
            </div>
          ))}
        </section>
      </Container>
      <style jsx>{`
        .blog-posts {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));
          gap: 3rem;
          margin: 2rem 0;
          position: relative;
        }
      `}</style>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogIndexProps> = async ({
  previewData,
}) => {
  const client = createClient();

  const homepageDoc = await client.getSingle(
    "homepage",
    typeof previewData === "string" ? { ref: previewData } : {}
  );

  const blogDoc = await client.getSingle(
    "blog",
    typeof previewData === "string" ? { ref: previewData } : {}
  );

  const blogPosts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    { orderings: "[document.first_publication_date]", pageSize: 15 }
  );

  return {
    props: { homepageDoc, blogDoc, blogPosts },
  };
};

export default BlogIndex;
