import React from "react";
import CardImageSlide from "./CardImageSlide";
import CardContent from "./CardContent";
import { ICard } from "../types/props";

const Card = ({ content, images, id, handleClick }: ICard) => {
  return (
    <div className="flex flex-col min-w-60 md:min-w-72" >
      <div className="w-full h-56">
        <CardImageSlide images={images} />
      </div>
      <div className="cursor-pointer" onClick={() => handleClick(id)}>
        <CardContent listingId={content.listingId} name={content.name} price={content.price} category={content.category} />
      </div>
    </div>
  );
};

export default Card;
