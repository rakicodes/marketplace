import React from "react";
import CardImage from "../atoms/CardImage";
import { IImageArray } from "../types/props";

const CardImageSlide = ({ images }: IImageArray) => {
  return (
    <div className="relative">
      {images.map((t, i) => (
        <div key={i} className="absolute w-full">
          <CardImage src={t.src} alt={t.alt} />
        </div>
      ))}
    </div>
  );
};

export default CardImageSlide;
