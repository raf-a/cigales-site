import React, { VFC } from "react";
import Image from "next/image";

type PrismicImageProps = {
  render: any;
  layout?: "fixed" | "fill" | "intrinsic" | "responsive";
  sizes?: string;
};

const PrismicImage: VFC<PrismicImageProps> = ({
  render,
  layout,
  sizes
}) => {
  if (!render.url) return null;
  return (
    <Image
      src={render.url}
      alt={render.alt}
      width={render.dimensions.width}
      height={render.dimensions.height}
      layout={layout}
      sizes={sizes}
      quality={65}
    />
  );
};

export default PrismicImage;
