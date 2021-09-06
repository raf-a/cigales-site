import { Document } from "@prismicio/client/types/documents";
import Container from "components/Container";
import DiscoverMenu from "components/DiscoverMenu";
import Layout from "components/Layout";
import PrismicImage from "components/PrismicImage";
import PrismicRichText from "components/PrismicRichText";
import SliceZone from "components/SlizeZone";
import Wave from "components/Wave";
import type { GetStaticProps, NextPage } from "next";
import { RichText } from "prismic-reactjs";
import React from "react";
import { createClient, linkResolver } from "utils/prismic";

type HomeProps = {
  doc: Document;
};

const Home: NextPage<HomeProps> = ({ doc }) => {
  return (
    <Layout homepageDoc={doc}>
      <div className="root">
        <Container>
          <div className="hero">
            <div className="hero-content">
              <h1>{RichText.asText(doc.data.tagline)}</h1>
              <p>{RichText.asText(doc.data.main_body)}</p>
            </div>
            <PrismicImage render={doc.data.image} />
          </div>
        </Container>

        <div className="discover">
          <Wave />
          <Container colored>
            <div className="discover-menu">
              <DiscoverMenu homepageDoc={doc} />
            </div>
            <div className="discover-footer">
              <PrismicRichText render={doc.data.discover_footer} />
            </div>
          </Container>
          <Wave bottom />
        </div>

        <SliceZone sliceZone={doc.data.body} />

        <style jsx>{`
          .hero {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            column-gap: 30px;
            align-items: center;
          }
          .hero-content h1 {
            font-weight: 900;
            font-size: 2.5rem;
            color: var(--color-secondary);
          }
          .hero-content p {
            font-size: 1.25rem;
            line-height: 1.5;
            font-weight: 500;
          }
          .discover {
            padding-top: 6rem;
          }
          .discover-menu {
            transform: translateY(-6rem);
          }
          .discover-footer {
            margin-top: -5rem;
            padding-bottom: 1rem;
            text-align: center;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({
  previewData,
}) => {
  const client = createClient();

  const doc = await client.getSingle(
    "homepage",
    typeof previewData === "string" ? { ref: previewData } : {}
  );

  return {
    props: { doc },
  };
};

export default Home;
