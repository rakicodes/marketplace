import React from "react";
import CardsContainer from "./container/CardsContainer";
import { IProfileTemplate } from "../types/props";
import CenteredContentContainer from "./container/CenteredContentContainer";

const ProfileTemplate = ({ items, onClick }: IProfileTemplate) => {
	return (
		<CenteredContentContainer>
			<div className="flex flex-col gap-y-5 p-4 md:p-8 w-full">
				<div className="flex border-b border-slate-300 justify-between py-2">
					<h1 className="text-xl font-bold">Your Listings</h1>
					<button
						className="text-xl"
						onClick={onClick}>
						+
					</button>
				</div>
				<CardsContainer items={items} />
			</div>
		</CenteredContentContainer>
	);
};

export default ProfileTemplate;
