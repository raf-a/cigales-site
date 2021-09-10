import { RichText } from "prismic-reactjs";
import React, { ComponentType, VFC } from "react";
import { getLinkUrl } from "utils/prismic";
import Cigales from "./Cigales";
import PrismicImage from "./PrismicImage";
import PrismicRichText from "./PrismicRichText";
import Content from "./slices/Content";
import Hero from "./Hero";
import LatestBlogPosts from "./slices/LatestBlogPosts";
import MainContent from "./slices/MainContentSlice";
import MainMenu from "./MainMenu";
import Numbers from "./slices/Numbers";
import QuoteList from "./slices/QuoteList";
import { SliceProps } from "./slices/SliceProps";
import HeroSlice from "./slices/HeroSlice";
import MainContentSlice from "./slices/MainContentSlice";
import MainMenuSlice from "./slices/MainMenuSlice";

const slices: Record<string, ComponentType<SliceProps>> = {
  content: Content,
  hero: HeroSlice,
  latest_blog_posts: LatestBlogPosts,
  main_content: MainContentSlice,
  main_menu: MainMenuSlice,
  numbers: Numbers,
  quote_list: QuoteList,
};

const SliceZone: VFC<{ sliceZone: any }> = ({ sliceZone }) => {
  return (
    <div className="container">
      {sliceZone.map((slice: any, key: number) => {
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
