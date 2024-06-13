import React from "react";
import { IFilledButton } from "../types/props";

const FilledButton = ({ onClick, children }: IFilledButton) => {
  return (
    <button
      className="bg-orange-500 py-4 rounded uppercase text-white text-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilledButton;
