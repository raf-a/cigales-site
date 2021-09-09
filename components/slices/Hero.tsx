import React, { ReactNode, VFC } from "react";
import Container from "../Container";

type HeroProps = {
  title: ReactNode;
  subtitle: ReactNode;
  image: ReactNode;
};

const Hero: VFC<HeroProps> = ({ title, subtitle, image }) => (
  <Container>
    <div className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {image}
    </div>
    <style jsx>{`
      .hero {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 30px;
        align-items: center;
      }
      .hero-content h1 {
        font-weight: 900;
        font-size: 2.5rem;
        color: var(--color-secondary);
      }
      .hero-content p {
        font-size: 1.25rem;
        line-height: 1.5;
        font-weight: 500;
      }
    `}</style>
  </Container>
);

export default Hero;
