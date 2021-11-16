import Container from "components/Container";
import Heading from "components/Heading";
import React, { VFC } from "react";
import { SliceProps } from "./SliceProps";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import Cigales from "components/Cigales";
import PrismicRichText from "components/PrismicRichText";
import PrismicImage from "components/PrismicImage";

const QuoteList: VFC<SliceProps> = ({ slice }) => (
  <Container>
    <Heading title={slice.primary.title} mb={3} />
    <div className="list">
      {slice.items.map((item: any, index: number) => (
        <div key={index} className="item">
          <div className="picture">
            <PrismicImage
              render={item.picture}
              sizes="96px"
            />
          </div>
          <div className="author">
            <h3>{RichText.asText(item.author_name)}</h3>
            <Cigales name={item.author_club} />
          </div>
          <div className="quote">
            <PrismicRichText render={item.quote} />
          </div>
        </div>
      ))}
    </div>

    <style jsx>{`
      .list {
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 2rem;
        row-gap: 2rem;
      }
      .item {
        display: grid;
        grid-template-columns: 80px 1fr;
        grid-template-rows: 80px auto;
        column-gap: 1rem;
      }
      .picture {
        border-radius: 40px;
        overflow: hidden;
        width: 80px;
        height: 80px;
      }
      .author h3 {
        margin: 0.5rem 0;
        font-size: 1rem;
      }
      .quote {
        grid-column: 1 / 3;
        line-height: 1.5;
      }
      @media (min-width: 640px) {
        .list {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: 1024px) {
        .list {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    `}</style>
  </Container>
);

export default QuoteList;
