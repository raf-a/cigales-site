import classNames from "classnames";
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
      {slice.items.map(({ wide, image, content }: any, i: number) => {
        return (
          <div key={i} className={classNames("item", { wide })}>
            {image.url && (
              <div className="image">
                <PrismicImage render={image} />
              </div>
            )}
            {content.length > 0 && (
              <div className="content">
                <PrismicRichText render={content} />
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
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      @media (min-width: 1024px) {
        .items {
          grid-template-columns: 1fr 1fr;
        }
        .item.wide {
          grid-column: span 2;
        }
      }
    `}</style>
  </Container>
);

export default Content;
