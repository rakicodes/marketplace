"use client"
import React, { useState } from "react";
import { ISelectMenu } from "../types/props";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { HiOutlineChevronUp } from "react-icons/hi2";
import Label from "./Label";

const SelectMenu = ({ children, label }: ISelectMenu) => {
  const [open, setOpen] = useState(false)

	return (
		<button className="py-4 w-full h-14 border-b border-gray-950 relative" onClick={() => setOpen(!open)}>
			<div className="flex items-center justify-between">
				<Label>{label}</Label>
				<span>
            {
              open ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />

            }
				</span>
			</div>
			{open && children}
		</button>
	);
};

export default SelectMenu;
