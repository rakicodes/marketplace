import React from "react";
import AddListingForm from "../organisms/AddListingForm";
import CenteredContentContainer from "./container/CenteredContentContainer";
import { IAddListingTemplate } from "../types/props";
import ErrorPopup from "../molecules/ErrorPopup";

const AddListingTemplate = ({
	name,
	images,
	price,
	warranty,
	category,
	serialNumber,
	numOfUnits,
	packageType,
	make,
	year,
	isUsed,
	isCertified,
	error,
	open,
	handleOpen,
	handleChangeName,
	handleChangeMake,
	handleChangePrice,
	handleChangeSerialNumber,
	handleChangePackage,
	handleClickIsCertified,
	handleClickIsUsed,
	handleClickWarranty,
	handleClickCategory,
	handleChangeImages,
	handleChangeYear,
	handleChangeNumOfUnits,
	handleSubmit,
}: IAddListingTemplate) => {
	return (
		<div className="relative">
			<CenteredContentContainer>
				<ErrorPopup
					open={open}
					handleOpen={handleOpen}>
					{error as unknown as string}
				</ErrorPopup>
				<div className="pt-20 pb-10">
					<div className="flex flex-col p-10 md:p-8 gap-y-10 bg-white border border-slate-500 rounded-lg">
						<h1 className="text-xl font-bold">Add a listing</h1>
						<AddListingForm
							name={name}
							images={images}
							price={price}
							warranty={warranty}
							category={category}
							serialNumber={serialNumber}
							numOfUnits={numOfUnits}
							packageType={packageType}
							make={make}
							year={year}
							isUsed={isUsed}
							isCertified={isCertified}
							handleChangeName={handleChangeName}
							handleChangeMake={handleChangeMake}
							handleChangePrice={handleChangePrice}
							handleChangeSerialNumber={handleChangeSerialNumber}
							handleChangePackage={handleChangePackage}
							handleClickIsCertified={handleClickIsCertified}
							handleClickIsUsed={handleClickIsUsed}
							handleClickWarranty={handleClickWarranty}
							handleClickCategory={handleClickCategory}
							handleChangeImages={handleChangeImages}
							handleChangeNumOfUnits={handleChangeNumOfUnits}
							handleChangeYear={handleChangeYear}
							handleSubmit={handleSubmit}
						/>
					</div>
				</div>
			</CenteredContentContainer>
		</div>
	);
};

export default AddListingTemplate;
