import React, { VFC } from "react";
import Head from "next/head";

type SEOProps = {
  title: string;
  description?: string;
  image?: string;
  siteName?: string;
};

const SEO: VFC<SEOProps> = ({ title, description, image, siteName }) => (
  <Head>
    {title && <title>{title}</title>}
    {description && <meta name="description" content={description} />}

    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={image} />}
    {siteName && <meta property="og:site_name" content={siteName} />}
  </Head>
);

export default SEO;
