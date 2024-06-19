import React from "react";
import { ICardContent } from "../types/props";

const CardContent = ({ listingId, name, category, price }: ICardContent) => {
  return (
    <div className="flex flex-col h-48 justify-between p-5 rounded-b-xl border-slate-200 border-x border-b-2">
      <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-1">
          <h4 className="text-sm text-slate-700">Listing Id</h4>
          <span className="text-sm text-slate-700">{listingId}</span>
        </div>
        <h5 className="text-lg font-bold">{name}</h5>
      </div>
      <div className="flex gap-x-2 justify-between">
        <span className="text-xs">{category}</span>
        <span className="text-sm font-bold text-orange-500">${price}</span>
      </div>
    </div>
  );
};

export default CardContent;
