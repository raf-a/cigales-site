import React, { ComponentType, VFC } from "react";
import Content from "./slices/Content";
import LatestBlogPosts from "./slices/LatestBlogPosts";
import Numbers from "./slices/Numbers";
import QuoteList from "./slices/QuoteList";
import { SliceProps } from "./slices/SliceProps";
import HeroSlice from "./slices/HeroSlice";
import MainContentSlice from "./slices/MainContentSlice";
import MainMenuSlice from "./slices/MainMenuSlice";
import HTML from "./slices/HTML";

const slices: Record<string, ComponentType<SliceProps>> = {
  content: Content,
  hero: HeroSlice,
  html: HTML,
  latest_blog_posts: LatestBlogPosts,
  main_content: MainContentSlice,
  main_menu: MainMenuSlice,
  numbers: Numbers,
  quote_list: QuoteList,
};

export const getMainImage = (sliceZone: any[]): string | undefined => {
  for (const slice of sliceZone) {
    if (slice.slice_type === 'hero') {
      return slice.primary.hero_image.url;
    }
    if (slice.slice_type === 'main_content') {
      return slice.primary.image.url;
    }
  }
}

const SliceZone: VFC<{ sliceZone: any }> = ({ sliceZone }) => {
  return (
    <div>
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
        .slice + .slice {
          margin: 8rem 0;
        }
      `}</style>
    </div>
  );
};

export default SliceZone;

