"use client"
import BuyerHomeTemplate from "@ui/templates/BuyerHomeTemplate";
import { useState, useEffect } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("")
  const [newListings, setNewListings] = useState([])

  useEffect(() => {

  }, [])

  const handleSearch = () => {

  }

	return (
		<>
			<BuyerHomeTemplate
        items={newListings}
				searchValue={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
        onSearch={handleSearch}
			/>
		</>
	);
}
