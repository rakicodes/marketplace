import React from "react";
import SearchSection from "../molecules/SearchSection";
import CardsContainer from "./container/CardsContainer";
import CategoryContainer from "./container/CategoryContainer";
import { IBuyerHomeTemplate } from "../types/props";

const BuyerHomeTemplate = ({
	items,
	searchValue,
	onChange,
	onSearch,
}: IBuyerHomeTemplate) => {
	return (
		<div>
			<div className="flex flex-col p-4 md:p-8 w-full bg-slate-900 h-96 justify-center gap-y-6">
				<div>
					<h1 className="text-xl font-bold text-white">
						Welcome to the Marketplace
					</h1>
					<p className="text-md text-white">Search items</p>
				</div>
				<SearchSection
					value={searchValue}
					onChange={onChange}
					onSearch={onSearch}
				/>
			</div>
			<div className="p-4 md:p-8 w-full">
				<CategoryContainer />
			</div>
			<div className="flex flex-col gap-y-5 p-4 md:p-8 w-full">
				<div className="flex border-b border-slate-300 py-2">
					<h3 className="text-xl font-bold">Recently Added</h3>
				</div>
				<CardsContainer items={items} />
			</div>
		</div>
	);
};

export default BuyerHomeTemplate;
