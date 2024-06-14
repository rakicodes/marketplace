import React from "react";
import { IButton } from "../types/props";

const OutlineButton = ({ onClick, children }: IButton) => {
  return (
    <button
      className="border border-orange-500 py-2 px-4 rounded uppercase text-orange-500 text-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlineButton;