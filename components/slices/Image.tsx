import React from "react";

import Container from "components/Container";
import PrismicImage from "components/PrismicImage";
import { SliceProps } from "./SliceProps";

const Image: React.VFC<SliceProps> = ({ slice }) => (
  <Container>
    <PrismicImage render={slice.primary.image} />
  </Container>
);

export default Image;
