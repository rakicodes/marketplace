import React from "react";
import Input from "../atoms/Input";
import FilledButton from "../atoms/FilledButton";
import { ISearchSection } from "../types/props";

const SearchSection = ({ value, onChange, onSearch }: ISearchSection) => {
	return (
		<div className="flex gap-x-2 w-full">
			<Input
				name="search"
				value={value}
				placeholder="Search"
				onChange={onChange}
			/>
			<FilledButton onClick={onSearch}>Search</FilledButton>
		</div>
	);
};

export default SearchSection;
