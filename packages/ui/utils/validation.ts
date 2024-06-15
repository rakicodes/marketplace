import { IListing } from "../types/props";
import { IMAGES_MAX_LEN } from "./constant";

export const isYearValid = (num: string): boolean => {
	return !isNaN(+num) && +num >= 1800 && +num <= new Date().getFullYear();
};

export const isPriceValid = (num: string): boolean => {
	return (
		!isNaN(+num) &&
		+num > 0 &&
		((+num).toFixed(0) === num ||
			(+num).toFixed(1) === num ||
			(+num).toFixed(2) === num)
	);
};

export const isFieldEmpty = (data: string | FileList): boolean => {
	return data.length === 0;
};

export const isFieldGteOne = (num: number): boolean => {
	return num >= 1;
};
export const isLenLteMax = (len: number, mx: number): boolean => {
	return len <= mx;
};
export const areRequiredFieldsFilled = (data: IListing): boolean => {
	return (
		!isFieldEmpty(data.name) &&
		!isFieldEmpty(data.price) &&
		!isFieldEmpty(data.category) &&
		!isFieldEmpty(data.serialNumber) &&
		!isFieldEmpty(data.make) &&
		!isFieldEmpty(data.packageType) &&
		!isFieldEmpty(data.images)
	);
};

export const isAddListingFormValid = (data: IListing): boolean => {
	return (
		areRequiredFieldsFilled(data) &&
		isYearValid(data.year) &&
		isPriceValid(data.price) &&
		isFieldGteOne(data.numOfUnits) &&
		isLenLteMax(data.images.length, IMAGES_MAX_LEN)
	);
};
