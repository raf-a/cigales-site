import Container from "components/Container";
import Wave from "components/Wave";
import React, { ReactNode, VFC } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type ItemProps = {
  title: ReactNode;
  description: ReactNode;
  href: string;
};

const Item: VFC<ItemProps> = ({ title, description, href }) => (
  <Link href={href}>
    <a>
      <h2>{title}</h2>
      <p>{description}</p>
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
          background-color: var(--color-bg);
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
  </Link>
);

type MainMenuProps = {
  footer: ReactNode;
  items: ItemProps[];
};

const MainMenu: VFC<MainMenuProps> = ({ footer, items }) => (
  <nav>
    <Wave />
    <Container colored>
      <div className="menu">
        {items.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>
      {footer && <footer>{footer}</footer>}
    </Container>
    <Wave bottom />
    <style jsx>{`
      nav {
        padding-top: 6rem;
      }
      .menu {
        transform: translateY(-6rem);
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(auto-fit, 1fr);
        gap: 1rem;
      }
      footer {
        margin-top: -5rem;
        padding-bottom: 1rem;
        text-align: center;
      }
      @media (min-width: 425px) {
        .menu {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: 1024px) {
        .menu {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    `}</style>
  </nav>
);

export default MainMenu;
