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