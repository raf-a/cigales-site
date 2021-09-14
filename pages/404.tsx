import { Document } from "@prismicio/client/types/documents";
import Layout from "components/Layout";
import MainContent from "components/MainContent";
import { GetStaticProps, NextPage } from "next";
import { getHomepage } from "utils/prismic";

type PageNotFoundProps = {
  homepageDoc: Document;
};

const PageNotFound: NextPage<PageNotFoundProps> = ({ homepageDoc }) => (
  <Layout homepageDoc={homepageDoc}>
    <MainContent title="404" body={<p>Désolé, cette page n’existe pas.</p>} />
  </Layout>
);

export default PageNotFound;

export const getStaticProps: GetStaticProps<PageNotFoundProps> = async ({
  previewData,
}) => {
  const homepageDoc = await getHomepage(previewData);

  return {
    props: { homepageDoc },
  };
};
