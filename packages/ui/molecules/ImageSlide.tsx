"use client";
import React from "react";
import { IImageSlide } from "../types/props";

const ImageSlide = ({ images, curr, handleCurr }: IImageSlide) => {
	return (
		<div className="w-full overflow-x-auto flex gap-x-3 h-24 bg-slate-50 rounded p-2">
			{images.map((image, i) => (
				<div
					key={i}
					className="min-w-24 md:max-w-24 grow md:grow-0">
					<img
						key={i}
						src={image.src}
						className={
							i === curr
								? "rounded h-full border w-full object-cover"
								: "rounded h-full w-full object-cover"
						}
						onClick={() => handleCurr(i)}
					/>
				</div>
			))}
		</div>
	);
};

export default ImageSlide;
