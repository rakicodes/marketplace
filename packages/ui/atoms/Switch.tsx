import React from "react";
import { ISwitch } from "../types/props";

const Switch = ({ value, handleClick }: ISwitch) => {
	return (
		<>
			<input
				type="checkbox"
				value={value}
				onClick={handleClick}
				className="sr-only peer"
			/>
			<div className="relative w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-500 peer-checked:bg-orange-500"></div>
		</>
	);
};

export default Switch;
