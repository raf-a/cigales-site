import React, { ReactNode, VFC } from "react";
import { RichText } from "prismic-reactjs";
import Link from "next/link";
import { linkResolver } from "utils/prismic";

const customLink = (
  type: string,
  element: any,
  content: ReactNode,
  children: any,
  index: any
) => (
  <Link key={element.data.id} href={linkResolver(element.data)}>
    <a>{content}</a>
  </Link>
);

const PrismicRichText: VFC<{ render: any }> = (props) => (
  <RichText {...props} serializeHyperlink={customLink} />
);

export default PrismicRichText;
