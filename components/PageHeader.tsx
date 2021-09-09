import classNames from "classnames";
import { ReactNode, VFC } from "react";
import Container from "./Container";

type PageHeaderProps = {
  title: ReactNode;
  body: ReactNode;
  image?: ReactNode;
};

const PageHeader: VFC<PageHeaderProps> = ({ title, body, image }) => (
  <Container>
    <div className={classNames("root", { "no-image": !image })}>
      {image && <div className="image">{image}</div>}
      <h1>{title}</h1>
      <div className="body">{body}</div>
    </div>
    <style jsx>{`
      .root {
        margin: 1rem 0;
      }
      .image {
        transform: rotate(2deg);
      }
      h1 {
        font-weight: 900;
        font-size: 2.5rem;
      }
      .body {
        line-height: 1.5;
      }
      @media (min-width: 1024px) {
        .root {
          display: grid;
          grid-template-columns: minmax(60ch, 1fr) 1fr;
          grid-template-rows: auto 1fr;
          column-gap: 2rem;
        }
        .image {
          order: 2;
          grid-row: 1 / 3;
        }
        h1 {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }
        .body {
          grid-column: 1 / 2;
          grid-row: 2 / 3;
          font-size: 1.125em;
        }
        .no-image h1 {
          grid-column: 1 / 3;
        }
      }
    `}</style>
  </Container>
);

export default PageHeader;
