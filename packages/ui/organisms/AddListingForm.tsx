"use client";
import React from "react";
import UnderlineInputWithLabel from "../molecules/UnderlineInputWithLabel";
import SwitchWithLabel from "../molecules/SwitchWithLabel";
import SelectMenu from "../atoms/SelectMenu";
import FilledButton from "../atoms/FilledButton";
import Dropdown from "../molecules/Dropdown";
import ImageInput from "../atoms/ImageInput";
import { IListingForm } from "../types/props";

const AddListingForm = ({
	name,
	serialNumber,
	price,
	make,
	packageType,
	warranty,
	isCertified,
	isUsed,
	category,
    year,
    numOfUnits,
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
}: IListingForm) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col gap-y-3">
				<UnderlineInputWithLabel
					label="name"
					name="name"
					placeholder="name"
					value={name}
					onChange={handleChangeName}
				/>
                <div className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-3">
					<div className="w-full md:w-1/2">
						<UnderlineInputWithLabel
                            type="number"
							label="number of units"
							name="numOfUnits"
							placeholder="number of units"
							value={numOfUnits}
							onChange={handleChangeNumOfUnits}
						/>
					</div>
					<div className="w-full md:w-1/2">
						<UnderlineInputWithLabel
							label="year"
							name="year"
							placeholder="0000"
							value={year}
							onChange={handleChangeYear}
						/>
					</div>
				</div>
				<div className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-3">
					<div className="w-full md:w-1/2">
						<UnderlineInputWithLabel
							label="serial number"
							name="serialNumber"
							placeholder="serial number"
							value={serialNumber}
							onChange={handleChangeSerialNumber}
						/>
					</div>
					<div className="w-full md:w-1/2">
						<UnderlineInputWithLabel
							label="price"
							name="price"
							placeholder="0.00"
							value={price}
							onChange={handleChangePrice}
						/>
					</div>
				</div>
				<div className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-3">
					<div className="w-full md:w-1/2">
						<UnderlineInputWithLabel
							label="make"
							name="make"
							placeholder="make"
							value={make}
							onChange={handleChangeMake}
						/>
					</div>
					<div className="w-full md:w-1/2">
						<UnderlineInputWithLabel
							label="package"
							name="packageType"
							placeholder="package"
							value={packageType}
							onChange={handleChangePackage}
						/>
					</div>
				</div>
				<SelectMenu
					label="category"
					category={category}>
					<Dropdown
						options={["option", "option2", "option3"]}
						handleClick={handleClickCategory}
					/>
				</SelectMenu>
				<div className="w-full flex flex-col gap-y-3">
					<SwitchWithLabel
						label="warranty"
						value={warranty}
						handleClick={handleClickWarranty}
					/>
					<SwitchWithLabel
						label="certified"
						value={isCertified}
						handleClick={handleClickIsCertified}
					/>
					<SwitchWithLabel
						label="used"
						value={isUsed}
						handleClick={handleClickIsUsed}
					/>
				</div>
				<div>
					<ImageInput handleChange={handleChangeImages} />
				</div>
				<FilledButton type="submit">Submit</FilledButton>
			</div>
		</form>
	);
};

export default AddListingForm;
