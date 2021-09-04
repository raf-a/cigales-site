import React, { FC } from "react";
import NextLink from "next/link";
import { Link } from "prismic-reactjs";
import { linkResolver } from "utils/prismic";

const PrismicLink: FC<any> = ({ link, children }) => (
  <NextLink href={Link.url(link, linkResolver)}>{children}</NextLink>
);

export default PrismicLink;
