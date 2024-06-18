import React from "react";
import Card from "../../organisms/Card";
import { ICardsContainer } from "../../types/props";

const CardsContainer = ({ items }: ICardsContainer) => {
  return (
    <div className="flex gap-x-5 overflow-x-auto w-full min-h-96">
      {items.length ? items.map((item, i) => (
        <Card key={i} content={item.content} images={item.images} id={item.id} handleClick={item.handleClick}/>
      )) : <p className="text-center">No listings found</p>}
    </div>
  );
};

export default CardsContainer;
