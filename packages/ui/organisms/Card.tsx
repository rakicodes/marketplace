import React from "react";
import CardImageSlide from "./CardImageSlide";
import CardContent from "./CardContent";
import { ICard } from "../types/props";

const Card = ({ content, images }: ICard) => {
  return (
    <div className="flex flex-col w-1/2 md:w-80">
      <div className="w-full h-56">
        <CardImageSlide images={images} />
      </div>
      <CardContent {...content} />
    </div>
  );
};

export default Card;
