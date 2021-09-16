import Container from "components/Container";
import { RichText } from "prismic-reactjs";
import React, { VFC } from "react";
import { SliceProps } from "./SliceProps";

const HTML: VFC<SliceProps> = ({ slice }) => (
  <Container>
    <div
      dangerouslySetInnerHTML={{ __html: RichText.asText(slice.primary.html) }}
    />
  </Container>
);

export default HTML;
