import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { createClient, getByUID, getHomepage } from "utils/prismic";
import Prismic from "@prismicio/client";
import { Document } from "@prismicio/client/types/documents";
import Layout from "components/Layout";
import SliceZone, { getMainImage } from "components/SlizeZone";
import { RichText } from "prismic-reactjs";
import SEO from "components/SEO";

type PageProps = {
  pageDoc: Document;
  homepageDoc: Document;
};

type PageQuery = {
  uid: string;
};

const Page: NextPage<PageProps> = ({ pageDoc, homepageDoc }) => (
  <Layout homepageDoc={homepageDoc}>
    <SEO
      title={RichText.asText(pageDoc.data.meta_title)}
      description={RichText.asText(pageDoc.data.meta_description)}
      siteName={RichText.asText(homepageDoc.data.site_name)}
      image={getMainImage(pageDoc.data.body) || getMainImage(homepageDoc.data.body)}
    />
    <SliceZone sliceZone={pageDoc.data.body} />
  </Layout>
);

export default Page;

export const getStaticProps: GetStaticProps<PageProps, PageQuery> = async ({
  params,
  previewData,
}) => {
  if (!params) throw new Error("Error");

  const pageDoc = await getByUID("page", params.uid, previewData);
  const homepageDoc = await getHomepage(previewData);

  return {
    props: { pageDoc, homepageDoc },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();

  const docs = await client.query(
    Prismic.Predicates.at("document.type", "page"),
    { pageSize: 100 }
  );

  return {
    paths: docs.results.map((doc) => ({
      params: {
        uid: doc.uid,
      },
    })),
    fallback: false,
  };
};
