import React from "react";
import { IListingSummary } from "../types/props";

const ListingSummary = ({ listingId, make, packageType, numOfUnits, serialNumber, year}: IListingSummary) => {
	return (
		<div className="flex flex-col gap-y-3">
			<h2 className="py-4 border-y border-slate-200 uppercase font-bold text-md">Listing Summary</h2>
			<ul className="flex flex-wrap gap-y-3">
				<li className="w-1/2">
					<h4 className="font-bold text-sm">Listing Id</h4>
					<span className="text-sm">{listingId}</span>
				</li>
				<li className="w-1/2">
					<h4 className="font-bold text-sm">Make</h4>
					<span className="text-sm">{make}</span>
				</li>
				<li className="w-1/2">
					<h4 className="font-bold text-sm">Package</h4>
					<span className="text-sm">{packageType}</span>
				</li>
				<li className="w-1/2">
					<h4 className="font-bold text-sm">Number of units</h4>
					<span className="text-sm">{numOfUnits}</span>
				</li>
				<li className="w-1/2">
                    <h4 className="font-bold text-sm">Serial Number</h4>
					<span className="text-sm">{serialNumber}</span>
                </li>
                <li className="w-1/2">
                    <h4 className="font-bold text-sm">Year</h4>
					<span className="text-sm">{year}</span>
                </li>
			</ul>
		</div>
	);
};

export default ListingSummary;
