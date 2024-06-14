import React from "react";
import ListingTemplate from "@ui/templates/ListingTemplate";
import { IParamsId } from "@ui/types/props";
import { IListing } from "@ui/types/data";
import { isListing } from "@ui/types/typeguards";

const page = async ({ params }: IParamsId) => {
	const { id } = params;

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/api/listing/${id}`
	);
	const data: IListing | Error = await res.json();
    if (isListing(data)) {
        return (
            <div>
                <ListingTemplate {...data} />
            </div>
        );
    } else {
        <div>Error</div>
    }
    


	
};

export default page;
