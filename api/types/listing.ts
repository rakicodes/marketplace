import{ Model, Types } from "mongoose";

export enum Status {
    sale = "for sale",
    pending = "pending",
    sold = "sold"
}
export type TObjectId = Types.ObjectId

export type TImage = {
    url: string,
    cloudinaryId: string
}

export type TListing = {
    _id?: TObjectId,
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
    isUsed: boolean,
    isCertified: boolean
    user: TObjectId
}

export type TListingModel = Model<TListing>

export type TListingFilters = Partial<{
    name: string,
    listingId: string,
    warranty: boolean,
    category: string,
    serialNumber: string,
    numOfUnits: number,
    packageType: string,
    make: string,
    featuredListing: boolean,
    status: string,
    isUsed: boolean,
    isCertified: boolean
}>