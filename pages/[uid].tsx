import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { createClient, linkResolver } from "utils/prismic";
import Prismic from "@prismicio/client";
import { Document } from "@prismicio/client/types/documents";
import { RichText } from "prismic-reactjs";

type PageProps = {
  page: Document;
};

type PageQuery = {
  uid: string;
};

const Page: NextPage<PageProps> = ({ page }) => (
  <>
    <RichText render={page.data.title} linkResolver={linkResolver} />
  </>
);

export default Page;

export const getStaticProps: GetStaticProps<PageProps, PageQuery> = async ({
  params,
  previewData,
}) => {
  if (!params) throw new Error("Error");

  const client = createClient();

  const page = await client.getByUID(
    "page",
    params.uid,
    typeof previewData === "string" ? { ref: previewData } : {}
  );

  return {
    props: { page },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();

  const docs = await client.query(
    Prismic.Predicates.at("document.type", "page"),
    { pageSize: 100 }
  );

  console.log(docs);

  console.log(docs);
  return {
    paths: docs.results.map((doc) => ({
      params: {
        uid: doc.uid,
      },
    })),
    fallback: false,
  };
};
