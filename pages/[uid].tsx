import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { createClient, linkResolver } from "utils/prismic";
import Prismic from "@prismicio/client";
import { Document } from "@prismicio/client/types/documents";
import { RichText } from "prismic-reactjs";
import Layout from "components/Layout";
import Container from "components/Container";
import PrismicImage from "components/PrismicImage";
import PrismicRichText from "components/PrismicRichText";
import Cigales from "components/Cigales";
import SliceZone from "components/SlizeZone";
import PageHeader from "components/PageHeader";

type PageProps = {
  pageDoc: Document;
  homepageDoc: Document;
};

type PageQuery = {
  uid: string;
};

const Page: NextPage<PageProps> = ({ pageDoc, homepageDoc }) => (
  <Layout homepageDoc={homepageDoc}>
    <PageHeader
      image={
        <>
          <PrismicImage render={pageDoc.data.image} />
          <Cigales name={pageDoc.data.image_club} />
        </>
      }
      title={RichText.asText(pageDoc.data.title)}
      body={<PrismicRichText render={pageDoc.data.main_body} />}
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

  const client = createClient();

  const pageDoc = await client.getByUID(
    "page",
    params.uid,
    typeof previewData === "string" ? { ref: previewData } : {}
  );

  const homepageDoc = await client.getSingle("homepage", {});

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
