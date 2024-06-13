import React from "react";
import { IUnderlineInput } from "../types/props";

export const UnderlineInput = ({ name, value, placeholder, type="text", onChange }: IUnderlineInput) => {
	return <input className="border-b border-gray-950 outline-0 py-2 focus:border-orange-500" type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />;
};
