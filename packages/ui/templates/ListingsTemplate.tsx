import React from "react";
import SearchSection from "../molecules/SearchSection";
import { IListingsTemplate } from "../types/props";
import CardsGridContainer from "./container/CardsGridContainer";

const ListingsTemplate = ({
	searchValue,
	onChange,
	onSearch,
	items,
}: IListingsTemplate) => {
	return (
		<div className="flex flex-col min-h-screen pt-16 md:pt-6 pb-6 gap-y-2">
			<div className="flex flex-col px-4 md:px-8 w-full bg-slate-900 h-48 md:h-72 justify-center gap-y-6">
				<SearchSection
					value={searchValue}
					onChange={onChange}
					onSearch={onSearch}
				/>
			</div>
			<div className="px-4 md:px-8 w-full">
				{items.length ? <CardsGridContainer items={items} /> : <></>}				
			</div>
		</div>
	);
};

export default ListingsTemplate;
