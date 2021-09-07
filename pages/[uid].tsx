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

type PageProps = {
  pageDoc: Document;
  homepageDoc: Document;
};

type PageQuery = {
  uid: string;
};

const Page: NextPage<PageProps> = ({ pageDoc, homepageDoc }) => (
  <Layout homepageDoc={homepageDoc}>
    <Container>
      <div className="main">
        <div className="image">
          <PrismicImage render={pageDoc.data.image} />
          <Cigales name={pageDoc.data.image_club} />
        </div>
        <div className="text">
          <h1>{RichText.asText(pageDoc.data.title)}</h1>
          <div className="body">
            <PrismicRichText render={pageDoc.data.main_body} />
          </div>
        </div>
      </div>
    </Container>
    <SliceZone sliceZone={pageDoc.data.body} />

    <style jsx>{`
      h1 {
        font-weight: 900;
        font-size: 2.5rem;
      }
      .main {
        margin: 1rem 0;
      }
      .image {
        transform: rotate(2deg);
      }
      .body {
        line-height: 1.5;
      }
      @media (min-width: 1024px) {
        .main {
          display: grid;
          grid-template-columns: minmax(60ch, 1fr) 1fr;
          column-gap: 2rem;
        }
        .image {
          order: 1;
        }
        .body {
          font-size: 1.125rem;
        }
      }
    `}</style>
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
