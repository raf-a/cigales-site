import { Document } from "@prismicio/client/types/documents";
import { RichText } from "prismic-reactjs";
import React, { VFC } from "react";
import PrismicLink from "./PrismicLink";
import { FiArrowRight } from "react-icons/fi";

type DiscoverMenuProps = {
  homepageDoc: Document;
};

const DiscoverMenuItem: VFC<any> = ({ title, text, link }) => (
  <PrismicLink link={link}>
    <a>
      <h2>{RichText.asText(title)}</h2>
      <p>{RichText.asText(text)}</p>
      <div className="icon">
        <FiArrowRight />
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
          color: inherit;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 6px 12px;
          display: flex;
          flex-direction: column;
          transition: all ease-out 200ms;
          background-color: rgba(255, 255, 255, 0.5);
        }
        a:hover,
        a:focus {
          border-color: transparent;
          box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1),
            0px 4px 6px rgba(0, 0, 0, 0.05);
          transform: translateY(-6px);
        }
        h2 {
          font-size: 1rem;
          color: var(--color-primary);
        }
        p {
          line-height: 1.5;
          margin: 0;
        }
        .icon {
          margin-top: auto;
          margin-left: auto;
          color: var(--color-primary);
          font-size: 1.5rem;
        }
      `}</style>
    </a>
  </PrismicLink>
);

const DiscoverMenu: VFC<DiscoverMenuProps> = ({ homepageDoc }) => (
  <div className="discover-menu">
    {homepageDoc.data.discover_menu.map((item: any, i: number) => (
      <DiscoverMenuItem key={i} {...item} />
    ))}
    <style jsx>{`
      .discover-menu {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(auto-fit, 1fr);
        gap: 1rem;
      }
      @media (min-width: 425px) {
        .discover-menu {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: 1024px) {
        .discover-menu {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    `}</style>
  </div>
);

export default DiscoverMenu;
