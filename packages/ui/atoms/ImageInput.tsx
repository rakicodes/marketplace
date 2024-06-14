import React from "react";

const ImageInput = () => {
	return (
		<>
			<input
				className="block w-full text-sm file:bg-white cursor-pointer file:cursor-pointer file:border file:rounded file:border-gray-950 file:py-2 file:px-4"
				type="file"
				multiple
			/>
		</>
	);
};

export default ImageInput;
