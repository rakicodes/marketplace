import React from "react";
import AddListingForm from "../organisms/AddListingForm";
import CenteredContentContainer from "./container/CenteredContentContainer";

const AddListingTemplate = () => {
	return (
		<CenteredContentContainer>
			<div className="pt-20 pb-10">
				<div className="flex flex-col p-10 md:p-8 gap-y-10 bg-white border border-slate-500 rounded-lg">
					<h1 className="text-xl font-bold">Add a listing</h1>
					<AddListingForm />
				</div>
			</div>
		</CenteredContentContainer>
	);
};

export default AddListingTemplate;
