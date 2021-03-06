import { Document } from "@prismicio/client/types/documents";
import Layout from "components/Layout";
import SEO from "components/SEO";
import SliceZone, { getMainImage } from "components/SlizeZone";
import type { GetStaticProps, NextPage } from "next";
import { RichText } from "prismic-reactjs";
import React from "react";
import { getHomepage, getLatestBlogPosts } from "utils/prismic";

type HomeProps = {
  doc: Document;
};

const Home: NextPage<HomeProps> = ({ doc }) => {
  return (
    <Layout homepageDoc={doc}>
      <SEO
        title={RichText.asText(doc.data.meta_title)}
        description={RichText.asText(doc.data.meta_description)}
        siteName={RichText.asText(doc.data.site_name)}
        image={getMainImage(doc.data.body)}
      />
      <SliceZone sliceZone={doc.data.body} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({
  previewData,
}) => {
  const doc = await getHomepage(previewData);

  return {
    props: { doc },
  };
};

export default Home;
