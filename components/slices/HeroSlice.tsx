import Hero from "components/Hero";
import PrismicImage from "components/PrismicImage";
import { RichText } from "prismic-reactjs";
import React, { VFC } from "react";
import { SliceProps } from "./SliceProps";

const HeroSlice: VFC<SliceProps> = ({ slice }) => (
  <Hero
    title={RichText.asText(slice.primary.title)}
    subtitle={RichText.asText(slice.primary.subtitle)}
    image={<PrismicImage render={slice.primary.hero_image} />}
  />
);

export default HeroSlice;
