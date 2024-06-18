import React from "react";
import { ICategoryCard } from "../types/props";

const CategoryCard = ({ category, onClick }: ICategoryCard) => {
	console.log(category)
	return (
		<div className="cursor-pointer rounded-lg p-4 bg-slate-500 flex items-center justify-center min-w-32" onClick={onClick}>
			<span className="text-white">{category}</span>
		</div>
	);
};

export default CategoryCard;
