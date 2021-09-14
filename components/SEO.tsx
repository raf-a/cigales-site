import React, { VFC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type SEOProps = {
  title: string;
  description?: string;
  image?: string;
  siteName: string;
};

const SEO: VFC<SEOProps> = ({ title, description, image, siteName }) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}

      <meta
        property="og:url"
        content={process.env.NEXT_PUBLIC_SITE_URL.concat(router.asPath)}
      />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}

      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />
    </Head>
  );
};

export default SEO;
