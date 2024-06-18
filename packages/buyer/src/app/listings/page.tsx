"use client";
import React, { useState, useEffect } from "react";
import ListingsTemplate from "@ui/templates/ListingsTemplate";

const Page = () => {
	const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([])

    useEffect(() => {

    }, [])

    const handleSearch = () => {

    }

	return (
		<>
			<ListingsTemplate
				searchValue={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
                onSearch={handleSearch}
                items={data}
			/>
		</>
	);
};

export default Page;
