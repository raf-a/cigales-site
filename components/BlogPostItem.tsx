import Link from "next/link";
import React, { ReactNode, VFC } from "react";
import { FiArrowRight } from "react-icons/fi";

type BlogPostItemProps = {
  href: string;
  title: ReactNode;
  chapo: ReactNode;
  image?: ReactNode;
};

const BlogPostItem: VFC<BlogPostItemProps> = ({
  href,
  title,
  chapo,
  image,
}) => {
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
