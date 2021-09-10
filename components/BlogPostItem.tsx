import { Document } from "@prismicio/client/types/documents";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import React, { ReactNode, VFC } from "react";
import { FiArrowRight } from "react-icons/fi";
import { linkResolver } from "utils/prismic";
import PrismicImage from "./PrismicImage";

export type BlogPostItemProps = {
  blogPost: Document;
};

const BlogPostItem: VFC<BlogPostItemProps> = ({ blogPost }) => {
  const image = <PrismicImage render={blogPost.data.image} />;
  const title = RichText.asText(blogPost.data.title);
  const chapo = RichText.asText(blogPost.data.chapo);
  const href = linkResolver(blogPost);

  return (
    <article>
      {image && <div className="image">{image}</div>}
      <h1>
        <Link href={href}>{title}</Link>
      </h1>
      <p>{chapo}</p>
      <Link href={href}>
        <a className="read-more">
          Lire la suite <FiArrowRight className="icon" />
        </a>
      </Link>
      <style jsx>{`
        article {
          display: flex;
          flex-direction: column;
        }
        h1 {
          font-size: 1.125rem;
        }
        p {
          line-height: 1.5;
          color: var(--color-text);
        }
        .read-more {
          font-weight: 600;
          margin-top: auto;
        }
        .read-more :global(svg) {
          vertical-align: middle;
        }
      `}</style>
    </article>
  );
};

export default BlogPostItem;
