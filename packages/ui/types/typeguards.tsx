import { IListing } from "./data";

export const isListing = (data: any): data is IListing => {
    return (data as IListing).category !== undefined;
 };