import { Document } from "@prismicio/client/types/documents";
import { RichText } from "prismic-reactjs";
import React, { VFC } from "react";
import PrismicLink from "./PrismicLink";
import PrismicRichText from "./PrismicRichText";

const Footer: VFC<{ homepageDoc: Document }> = ({ homepageDoc }) => (
  <footer>
    <div>
      <h2>Découvrir</h2>
      {homepageDoc.data.discover_menu
        .concat(homepageDoc.data.discover_menu_extra)
        .map((item: any, i: number) => (
          <p key={i}>
            <PrismicLink link={item.link}>
              <a>{RichText.asText(item.title)}</a>
            </PrismicLink>
          </p>
        ))}
    </div>
    <div>
      <h2>Ressources</h2>
      {homepageDoc.data.resources_menu.map((item: any, i: number) => (
        <p key={i}>
          <PrismicLink link={item.link}>
            <a>{RichText.asText(item.title)}</a>
          </PrismicLink>
        </p>
      ))}
    </div>
    <div className="contact">
      <h2>Contact</h2>
      <PrismicRichText render={homepageDoc.data.contact_info} />
    </div>
    <style jsx>{`
      footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
        row-gap: 40px;
        color: var(--color-text2);
      }
      footer h2 {
        margin: 0 0 1.5rem;
        font-size: 1rem;
      }
      footer :global(a) {
        color: var(--color-text2);
      }
      .contact {
        grid-column: 1 / 3;
      }
      @media (min-width: 1024px) {
        footer {
          grid-template-columns: 1fr 1fr 2fr;
          column-gap: 40px;
        }
        .contact {
          grid-column: auto;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
