import React from "react";
import { IDropdown } from "../types/props";

const Dropdown = ({ options }: IDropdown) => {
	return (
		<ul className="w-full flex flex-col gap-y-2 absolute top-14 left-0 rounded-b-lg py-5 bg-white border-b border-x border-gray-500 z-50">
            {
                options.map((option, i) => (
                    <li key={i} className="py-2 rounded hover:bg-orange-100">{option}</li>
                ))
            }
		</ul>
	);
};

export default Dropdown;
