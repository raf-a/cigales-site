import { Document } from "@prismicio/client/types/documents";
import React, { VFC } from "react";
import Menu from "./Menu";
import PrismicRichText from "./PrismicRichText";

const Footer: VFC<{ homepageDoc: Document }> = ({ homepageDoc }) => (
  <footer>
    <div>
      <h2>Découvrir</h2>
      <Menu items={homepageDoc.data.discover_menu} />
    </div>
    <div>
      <h2>Ressources</h2>
      <Menu items={homepageDoc.data.resources_menu} />
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
        display: inline-block;
        border-bottom: 2px solid;
        padding-bottom: 0.5em;
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
