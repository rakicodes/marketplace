import React from "react";
import CardImageSlide from "./CardImageSlide";
import CardContent from "./CardContent";
import { ICard } from "../types/props";

const Card = ({ content, images }: ICard) => {
  return (
    <div className="flex flex-col min-w-60 md:min-w-72">
      <div className="w-full h-56">
        <CardImageSlide images={images} />
      </div>
      <CardContent listingId={content.listingId} name={content.name} price={content.price} category={content.category} />
    </div>
  );
};

export default Card;
