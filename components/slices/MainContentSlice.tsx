import Cigales from "components/Cigales";
import MainContent from "components/MainContent";
import PrismicImage from "components/PrismicImage";
import PrismicRichText from "components/PrismicRichText";
import { RichText } from "prismic-reactjs";
import React, { VFC } from "react";
import { SliceProps } from "./SliceProps";

const MainContentSlice: VFC<SliceProps> = ({ slice }) => (
  <MainContent
    image={
      <>
        <PrismicImage render={slice.primary.image} sizes="540px" />
        <Cigales name={slice.primary.image_club} />
      </>
    }
    title={RichText.asText(slice.primary.title)}
    body={<PrismicRichText render={slice.primary.body} />}
  />
);

export default MainContentSlice;
