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
  <div>
    <RichText {...props} serializeHyperlink={customLink} />
    <style jsx>{`
      div {
        line-height: 1.5;
      }
      div :global(h1) {
        font-size: 1.5em;
      }
      div :global(h2) {
        font-size: 1.125em;
        color: var(--color-secondary);
        margin: 1em 0;
      }
    `}</style>
  </div>
);

export default PrismicRichText;
