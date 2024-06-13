import React from "react";
import { ICardImage } from "../types/props";

const CardImage = ({ src, alt }: ICardImage) => {
  return (
    <img
      src={src}
      alt={alt}
      className="h-56 w-full object-cover rounded-t-xl"
    />
  );
};

export default CardImage;
