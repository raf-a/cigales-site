import React, { VFC } from "react";
import Image from "next/image";

type PrismicImageProps = {
  render: any;
  layout?: "fixed" | "fill" | "intrinsic" | "responsive";
};

const PrismicImage: VFC<PrismicImageProps> = ({
  render,
  layout = "intrinsic",
}) => {
  if (!render.url) return null;
  return (
    <Image
      src={render.url}
      alt={render.alt}
      width={render.dimensions.width}
      height={render.dimensions.height}
      layout={layout}
    />
  );
};

export default PrismicImage;
