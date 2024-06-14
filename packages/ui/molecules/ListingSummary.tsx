import React from "react";

const ListingSummary = () => {
	return (
		<div className="flex flex-col gap-y-3">
			<h2 className="py-4 border-y border-slate-200 uppercase font-bold text-md">Listing Summary</h2>
			<ul className="flex flex-wrap gap-y-3">
				<li className="w-1/2">
					<h4 className="font-bold text-sm">Listing Id</h4>
					<span className="text-sm">XXX</span>
				</li>
				<li className="w-1/2">
					<h4 className="font-bold text-sm">Category</h4>
					<span className="text-sm">XXX</span>
				</li>
				<li className="w-1/2">
					<h4 className="font-bold text-sm">Package</h4>
					<span className="text-sm">XXX</span>
				</li>
				<li className="w-1/2">
					<h4 className="font-bold text-sm">Number of units</h4>
					<span className="text-sm">XXX</span>
				</li>
				<li className="w-1/2">
                    <h4 className="font-bold text-sm">Serial Number</h4>
					<span className="text-sm">XXX</span>
                </li>
                <li className="w-1/2">
                    <h4 className="font-bold text-sm">Year</h4>
					<span className="text-sm">XXX</span>
                </li>
			</ul>
		</div>
	);
};

export default ListingSummary;
