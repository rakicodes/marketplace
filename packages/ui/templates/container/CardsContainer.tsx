import React from "react";
import Card from "../../organisms/Card";
import { ICardsContainer } from "../../types/props";

const CardsContainer = ({ items }: ICardsContainer) => {
  return (
    <div className="flex gap-x-5 overflow-x-auto w-full">
      {items.map((item, i) => (
        <Card key={i} content={item.content} images={item.images} id={item.id} handleClick={item.handleClick}/>
      ))}
    </div>
  );
};

export default CardsContainer;
