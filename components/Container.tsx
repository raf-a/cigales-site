import React, { FC } from "react";

type ContainerProps = {
  padding?: boolean;
  colored?: boolean;
};

const Container: FC<ContainerProps> = ({ padding, colored, children }) => (
  <>
    <div className="wrapper">
      <div className="inner">{children}</div>
    </div>
    <style jsx>{`
      .wrapper {
        padding: ${padding ? "4rem" : "0"} 0;
        background-color: ${colored ? "var(--color-bg2)" : "none"};
      }
      .inner {
        max-width: 1110px;
        margin: 0 auto;
        padding: 0 20px;
      }
    `}</style>
  </>
);

export default Container;
