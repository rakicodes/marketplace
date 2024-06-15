import { IAuth, IListing } from "./data";

export const isListing = (data: any): data is IListing => {
    return (data as IListing).category !== undefined;
 };

 export const isAuth = (data: any): data is IAuth => {
    if (data) {
        return (data as IAuth)?.token !== undefined;
    } else {
        return false;
    }
 }

 export const isListingArray = (data: any): data is IListing[] => {
    return (Array.isArray(data as IListing[]) && (data.length === 0)) || (Array.isArray(data as IListing[]) && (data[0].listingId !== undefined))
 }