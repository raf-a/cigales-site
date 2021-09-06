import Container from "components/Container";
import Heading from "components/Heading";
import PrismicRichText from "components/PrismicRichText";
import { RichText } from "prismic-reactjs";
import React, { VFC } from "react";
import { SliceProps } from "./SliceProps";

const Numbers: VFC<SliceProps> = ({ slice }) => (
  <Container>
    <Heading title={slice.primary.title} mb={3} />
    <div className="numbers">
      {slice.items.map((item: any, index: number) => (
        <div key={index}>
          <h3>{RichText.asText(item.number)}</h3>
          <PrismicRichText render={item.text} />
        </div>
      ))}
    </div>
    <style jsx>{`
      .numbers {
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 3rem;
        row-gap: 2rem;
      }
      .numbers h3 {
        color: var(--color-secondary);
        font-size: 3rem;
        font-weight: 900;
        margin: 0 0 -0.5rem;
      }
      @media (min-width: 1024px) {
        .numbers {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    `}</style>
  </Container>
);

export default Numbers;
