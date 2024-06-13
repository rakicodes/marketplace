import React from "react";
import { ISlider } from "../types/props";

const Slider = ({ total, curr, handleSlider }: ISlider) => {
	return (
		<div className="flex gap-x-3">
			{Array(total)
				.fill(0)
				.map((item, i) => (
					<div key={i} className={curr===i ? "rounded-full h-3 w-3 bg-orange-500" : "rounded-full h-3 w-3 bg-slate-300"} onClick={() => handleSlider(i)}></div>
				))}
		</div>
	);
};

export default Slider;
