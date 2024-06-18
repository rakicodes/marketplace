"use client"
import BuyerHomeTemplate from "@ui/templates/BuyerHomeTemplate";
import { useState, useEffect } from "react";
import { listingArrayToCardArray } from "@ui/utils/convert";
import { useRouter } from "next/navigation";
import { IListing } from "@ui/types/data";
import { isListingArray } from "@ui/types/typeguards";
import { ICard } from "@ui/types/props";

export default function Home() {
  const [searchValue, setSearchValue] = useState("")
  const [newListings, setNewListings] = useState([] as ICard[])
  const [error, setError] = useState<Error | null>(null)
  const router = useRouter()

  useEffect(() => {
    const handleCardClick = (id: string) => {
      router.push(`/listings/${id}`)
    }
    
		const fetchData = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/listing/latest`)
			const data: IListing[] | Error = await res.json()
      if (isListingArray(data)) {
        setNewListings(listingArrayToCardArray(data, handleCardClick))
      } else {
        setError(data)
      }		}

		fetchData()

  }, [router])

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
