import { Document } from "@prismicio/client/types/documents";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { VFC } from "react";
import { createClient } from "utils/prismic";
import Prismic from "@prismicio/client";
import Layout from "components/Layout";
import { RichText } from "prismic-reactjs";
import PageHeader from "components/PageHeader";
import PrismicImage from "components/PrismicImage";
import PrismicRichText from "components/PrismicRichText";
import SEO from "components/SEO";

type BlogPostType = {
  homepageDoc: Document;
  blogPostDoc: Document;
};

const BlogPost: VFC<BlogPostType> = ({ homepageDoc, blogPostDoc }) => (
  <Layout homepageDoc={homepageDoc}>
    <SEO
      title={RichText.asText(blogPostDoc.data.title)}
      description={RichText.asText(blogPostDoc.data.chapo)}
      siteName={RichText.asText(homepageDoc.data.site_name)}
      image={blogPostDoc.data.image.url}
    />
    <PageHeader
      title={RichText.asText(blogPostDoc.data.title)}
      body={
        <>
          <p className="chapo">{RichText.asText(blogPostDoc.data.chapo)}</p>
          <PrismicRichText render={blogPostDoc.data.body} />
        </>
      }
      image={<PrismicImage render={blogPostDoc.data.image} sizes="540px" />}
    />
    <style jsx>{`
      .chapo {
        font-weight: 600;
        margin-bottom: 3rem;
      }
    `}</style>
  </Layout>
);

export default BlogPost;

export const getStaticProps: GetStaticProps<BlogPostType, { uid: string }> =
  async ({ params, previewData }) => {
    if (!params) throw new Error("Error");

    const client = createClient();

    const blogPostDoc = await client.getByUID(
      "blog_post",
      params.uid,
      typeof previewData === "string" ? { ref: previewData } : {}
    );

    const homepageDoc = await client.getSingle("homepage", {});

    return {
      props: { blogPostDoc, homepageDoc },
    };
  };

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();

  const getDocs = async (
    page = 1,
    docs: Document[] = []
  ): Promise<Document[]> => {
    const response = await client.query(
      Prismic.Predicates.at("document.type", "blog_post"),
      { pageSize: 100, page }
    );
    const allDocs = docs.concat(response.results);
    if (response.results_size + docs.length < response.total_results_size) {
      return getDocs(page + 1, allDocs);
    }
    return allDocs;
  };

  return {
    paths: (await getDocs()).map((doc) => ({
      params: {
        uid: doc.uid,
      },
    })),
    fallback: false,
  };
};
