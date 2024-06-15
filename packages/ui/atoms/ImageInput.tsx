import React from "react";
import { IImageInput } from "../types/props";

const ImageInput = ({ handleChange }: IImageInput) => {
	return (
		<>
			<input
				className="block w-full text-sm file:bg-white cursor-pointer file:cursor-pointer file:border file:rounded file:border-gray-950 file:py-2 file:px-4"
				type="file"
				onChange={handleChange}
				multiple
			/>
		</>
	);
};

export default ImageInput;
