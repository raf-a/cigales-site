import MainMenu from "components/MainMenu";
import PrismicRichText from "components/PrismicRichText";
import { RichText } from "prismic-reactjs";
import React, { VFC } from "react";
import { getLinkUrl } from "utils/prismic";
import { SliceProps } from "./SliceProps";

const MainMenuSlice: VFC<SliceProps> = ({ slice }) => (
  <MainMenu
    footer={<PrismicRichText render={slice.primary.footer} />}
    items={slice.items.map((item: any) => ({
      title: RichText.asText(item.title),
      description: RichText.asText(item.description),
      href: getLinkUrl(item.link),
    }))}
  />
);

export default MainMenuSlice;
