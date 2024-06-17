"use client"

import React, { useState, useEffect } from "react";
import ListingTemplate from "@ui/templates/ListingTemplate";
import { IParamsId } from "@ui/types/props";
import { IListing } from "@ui/types/data";
import { isListing } from "@ui/types/typeguards";
import { useRouter } from "next/navigation";
import ErrorPageTemplate from "@ui/templates/ErrorPageTemplate";

const Page = ({ params }: IParamsId) => {
	const { id } = params;
    const router = useRouter();
    const [data, setData] = useState({} as IListing)
    const [error,  setError] = useState<Error | null>(null) 

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/listing/${id}`
            );
            const resData: IListing | Error = await res.json(); 
            if (res.status === 200) {
                setData(resData as IListing)
            } else {
                setError(resData as Error)
            }
        }

        fetchData()
    }, [id])

    if (isListing(data)) {
        return (
            <div>
                <ListingTemplate {...data} />
            </div>
        );
    } else {
        <ErrorPageTemplate link={() => router.push("/")}/>
    }
};

export default Page;
