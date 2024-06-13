import React from "react";
import CardsContainer from "./container/CardsContainer";
import { ICardsContainer } from "../types/props";

const ProfileTemplate = ({ items }: ICardsContainer) => {
  return (
    <div className="flex flex-col gap-y-5 p-4 md:p-8">
      <div className="flex border-b border-slate-300 justify-between py-2">
        <h1 className="text-xl font-bold">Your Listings</h1>
        <button className="text-xl">+</button>
      </div>
      <CardsContainer items={items} />
    </div>
  );
};

export default ProfileTemplate;
