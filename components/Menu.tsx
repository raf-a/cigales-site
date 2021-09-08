import { RichText } from "prismic-reactjs";
import React, { VFC } from "react";
import PrismicLink from "./PrismicLink";

const Menu: VFC<{ items: { title: any; link: any }[] }> = ({ items }) => (
  <div>
    {items.map((item, i) => (
      <PrismicLink key={i} link={item.link}>
        <a>{RichText.asText(item.title)}</a>
      </PrismicLink>
    ))}
    <style jsx>{`
      a {
        display: block;
        font-weight: 600;
        padding: 0.5rem 0;
      }
    `}</style>
  </div>
);

export default Menu;
