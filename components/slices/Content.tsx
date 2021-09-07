import Container from "components/Container";
import Heading from "components/Heading";
import PrismicImage from "components/PrismicImage";
import PrismicRichText from "components/PrismicRichText";
import React, { VFC } from "react";
import { SliceProps } from "./SliceProps";

const Content: VFC<SliceProps> = ({ slice }) => (
  <Container>
    {slice.primary.title.length > 0 && (
      <div className="title">
        <Heading title={slice.primary.title} />
      </div>
    )}

    <div className="items">
      {slice.items.map((item: any, i: number) => {
        return (
          <div key={i} className="item">
            {item.image.url && (
              <div className="image">
                <PrismicImage render={item.image} />
              </div>
            )}
            {item.content.length > 0 && (
              <div className="content">
                <PrismicRichText render={item.content} />
              </div>
            )}
          </div>
        );
      })}
    </div>
    <style jsx>{`
      .title {
        margin-bottom: 2rem;
      }
      .items {
        margin-bottom: -2rem;
      }
      .item {
        margin-bottom: 2rem;
      }
      @media (min-width: 1024px) {
        .items {
          display: flex;
          flex-wrap: wrap;
          margin: -1rem;
        }
        .item {
          box-sizing: border-box;
          width: 50%;
          padding: 1rem;
          margin: 0;
        }
      }
    `}</style>
  </Container>
);

export default Content;
