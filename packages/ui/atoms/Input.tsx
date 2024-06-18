import React from "react";
import { IInput } from "../types/props";

const Input = ({ type="text", name, value, placeholder, onChange }: IInput) => {
	return (
		<>
			<input
				className="rounded bg-white p-2 w-full"
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</>
	);
};

export default Input;
