import { Document } from "@prismicio/client/types/documents";
import { RichText } from "prismic-reactjs";
import React, { FC } from "react";
import Container from "./Container";
import Header from "./Header";
import PrismicLink from "./PrismicLink";
import PrismicRichText from "./PrismicRichText";
import Wave from "./Wave";

const Layout: FC<{ homeDoc: Document }> = ({ children, homeDoc }) => (
  <>
    <Header />
    {children}
    <Wave />
    <Container padding colored>
      <footer>
        <div>
          <h2>Découvrir</h2>
          {homeDoc.data.discover_menu
            .concat(homeDoc.data.discover_menu_extra)
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
          {homeDoc.data.resources_menu.map((item: any, i: number) => (
            <p key={i}>
              <PrismicLink link={item.link}>
                <a>{RichText.asText(item.title)}</a>
              </PrismicLink>
            </p>
          ))}
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <PrismicRichText render={homeDoc.data.contact_info} />
        </div>
      </footer>
    </Container>
    <style jsx>{`
      footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 40px;
        row-gap: 40px;
      }
      footer h2 {
        margin: 0 0 1.5rem;
        font-size: 1rem;
      }
      footer :global(a) {
        color: var(--color-text);
      }
      .contact {
        grid-column: 1 / 3;
      }
      @media (min-width: 1024px) {
        footer {
          grid-template-columns: 1fr 1fr 2fr;
        }
        .contact {
          grid-column: auto;
        }
      }
    `}</style>
  </>
);

export default Layout;
