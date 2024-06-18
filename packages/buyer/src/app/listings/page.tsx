"use client";
import React, { useState, useEffect } from "react";
import ListingsTemplate from "@ui/templates/ListingsTemplate";
import { useSearchParams, useRouter } from 'next/navigation'
import { ICard, IListing } from "@ui/types/props";
import { listingArrayToCardArray } from "@ui/utils/convert";
import { isListingArray } from "@ui/types/typeguards";

const Page = () => {
	const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([] as ICard[])
	const [error, setError] = useState<Error | null>()
	const router = useRouter()
	const searchParams = useSearchParams()
	const category = searchParams.get('category')
	const name = searchParams.get('name')
    useEffect(() => {
		const handleCardClick = (id: string) => {
			router.push(`/listings/${id}`)
		}
        const fetchData = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/listing/search?category=${category || ""}&name=${name || ""}`
            );
            const resData: IListing[] | Error = await res.json(); 
            if (isListingArray(resData)) {
				console.log(resData)
                setData(listingArrayToCardArray(resData, handleCardClick))
            } else {
                setError(resData as Error)
            }
        }

        fetchData()

    }, [category, name, router])

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
