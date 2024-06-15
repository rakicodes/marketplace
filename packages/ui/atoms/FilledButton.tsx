import React from "react";
import { IButton } from "../types/props";

const FilledButton = ({ onClick, children, type="button" }: IButton) => {
  return (
    <button
      className="bg-orange-500 py-2 px-4 rounded uppercase text-white text-sm"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilledButton;
