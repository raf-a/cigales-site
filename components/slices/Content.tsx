import Container from "components/Container";
import Heading from "components/Heading";
import React, { VFC } from "react";
import { SliceProps } from "./SliceProps";

const Content: VFC<SliceProps> = ({ slice }) => (
  <Container>
    <Heading title={slice.primary.title} />
  </Container>
);

export default Content;
