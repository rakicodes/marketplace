import{ Types } from "mongoose";

export type TObjectId = Types.ObjectId

export type IListing = {
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