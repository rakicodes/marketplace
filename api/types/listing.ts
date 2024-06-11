import{ Model, Types } from "mongoose";

export enum Status {
    sale = "for sale",
    pending = "pending",
    sold = "sold"
}
export type TListingId = Types.ObjectId

export type TImage = {
    url: string,
    cloudinaryId: string
}

export type TListing = {
    _id?: TListingId,
    name: string,
    listingId: string,
    images: Array<String>,
    cloudinaryIds: Array<String>,
    price: number,
    warranty: boolean,
    category: string,
    serialNumber: string,
    numOfUnits: number,
    packageType: string,
    make: string,
    featuredListing: boolean,
    status: string,
    year: number,
    isNew: boolean,
    isCertified: boolean
}

export type TListingModel = Model<TListing>