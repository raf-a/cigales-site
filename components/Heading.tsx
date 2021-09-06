import { RichText } from "prismic-reactjs";
import React, { FC } from "react";
import Container from "./Container";

type HeadingProps = {
  title: any;
  mb?: number;
};

const Heading: FC<HeadingProps> = ({ title, mb = 0 }) => {
  if (!title) return null;
  return (
    <h1>
      {RichText.asText(title)}
      <style jsx>{`
        h1 {
          font-weight: 900;
          color: var(--color-primary);
          margin-top: 0;
          margin-bottom: ${mb}rem;
        }
      `}</style>
    </h1>
  );
};

export default Heading;
