import { Document } from "@prismicio/client/types/documents";
import React, { VFC } from "react";
import Menu from "./Menu";
import PrismicRichText from "./PrismicRichText";
import Link from "next/link";
import { getLinkUrl } from "utils/prismic";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

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
    <div className="social-media">
      {homepageDoc.data.social_media.map((item: any, key: number) => (
        <Link key={key} href={getLinkUrl(item.link)}>
          <a title={item.name}>
            {item.name === "Facebook" && <FaFacebookF />}
            {item.name === "Twitter" && <FaTwitter />}
            {item.name === "LinkedIn" && <FaLinkedinIn />}
          </a>
        </Link>
      ))}
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
      .social-media a {
        display: inline-block;
        padding: 0.5rem;
        font-size: 1.5rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 1.5rem;
        background-color: var(--color-text2);
        color: var(--color-bg2);
      }
      .social-media a:not(:first-child) {
        margin-left: 0.5rem;
      }
      @media (min-width: 1024px) {
        footer {
          grid-template-columns: 1fr 1fr 2fr auto;
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
