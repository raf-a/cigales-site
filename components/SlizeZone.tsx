import { RichText } from "prismic-reactjs";
import React, { ComponentType, VFC } from "react";
import { getLinkUrl } from "utils/prismic";
import Cigales from "./Cigales";
import PrismicImage from "./PrismicImage";
import PrismicRichText from "./PrismicRichText";
import Content from "./slices/Content";
import Hero from "./slices/Hero";
import MainContent from "./slices/MainContent";
import MainMenu from "./slices/MainMenu";
import Numbers from "./slices/Numbers";
import QuoteList from "./slices/QuoteList";
import { SliceProps } from "./slices/SliceProps";

const slices: Record<string, ComponentType<SliceProps>> = {
  content: Content,
  numbers: Numbers,
  quote_list: QuoteList,
};

const SliceZone: VFC<{ sliceZone: any }> = ({ sliceZone }) => {
  return (
    <div className="container">
      {sliceZone.map((slice: any, key: number) => {
        switch (slice.slice_type) {
          case "hero":
            return (
              <Hero
                key={key}
                title={RichText.asText(slice.primary.title)}
                subtitle={RichText.asText(slice.primary.subtitle)}
                image={<PrismicImage render={slice.primary.hero_image} />}
              />
            );
          case "main_menu":
            return (
              <MainMenu
                key={key}
                footer={<PrismicRichText render={slice.primary.footer} />}
                items={slice.items.map((item: any) => ({
                  title: RichText.asText(item.title),
                  description: RichText.asText(item.description),
                  href: getLinkUrl(item.link),
                }))}
              />
            );
          case "main_content":
            return (
              <MainContent
                key={key}
                image={
                  <>
                    <PrismicImage render={slice.primary.image} />
                    <Cigales name={slice.primary.image_club} />
                  </>
                }
                title={RichText.asText(slice.primary.title)}
                body={<PrismicRichText render={slice.primary.body} />}
              />
            );
        }

        const Slice = slices[slice.slice_type];
        if (!Slice) {
          console.warn("Unhandled slice in SliceZone");
          console.log(slice);
          return null;
        }
        return (
          <div key={key} className="slice">
            <Slice slice={slice} />
          </div>
        );
      })}
      <style jsx>{`
        .slice {
          margin: 8rem 0;
        }
      `}</style>
    </div>
  );
};

export default SliceZone;
