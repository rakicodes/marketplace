import React from "react";
import Card from "../../organisms/Card";
import { ICardsContainer } from "../../types/props";

const CardsContainer = ({ items }: ICardsContainer) => {
  return (
    <div className="flex gap-x-5">
      {items.map((item, i) => (
        <Card key={i} content={item.content} images={item.images} />
      ))}
    </div>
  );
};

export default CardsContainer;
