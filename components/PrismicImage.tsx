import React, { VFC } from "react";
import Image from "next/image";

type PrismicImageProps = {
  render: any;
};

const PrismicImage: VFC<PrismicImageProps> = ({ render }) => (
  <Image
    src={render.url}
    alt={render.alt}
    width={render.dimensions.width}
    height={render.dimensions.height}
    layout="responsive"
  />
);

export default PrismicImage;
