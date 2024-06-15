import React from "react";
import Label from "../atoms/Label";
import Switch from "../atoms/Switch";
import { ISwitchWithLabel } from "../types/props";

const SwitchWithLabel = ({ label, value, handleClick }: ISwitchWithLabel) => {
	return (
		<>
			<label className="inline-flex items-center cursor-pointer gap-x-2 w-full justify-between">
				<Label>{label}</Label>
				<Switch value={value} handleClick={handleClick} />
			</label>
		</>
	);
};

export default SwitchWithLabel;
