import mongoose, { Schema } from "mongoose";
import { TImage, TListing, TListingModel } from "../types/listing";

const ListingSchema = new Schema<TListing, TListingModel>({
        name: {
            type: String,
            required: true,
        },
        listingId: {
            type: String,
            require: true,
        },
        images: {
            type: [String],
            required: true,
        },
        cloudinaryIds: {
            type: [String],
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        warranty: {
            type: Boolean,
            required: true
        },
        category: {
            type: String,
            required: true,
        },
        serialNumber: {
            type: String,
            required: true
        },
        numOfUnits: {
            type: Number,
            required: true,
            default: 1,
        },
        packageType: {
            type: String,
            required: true
        },
        make: {
            type: String,
            required: true
        },
        featuredListing: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String, 
            default: "for sale"
        },
        year: {
            type: Number,
            required: true
        },
        isUsed: {
            type: Boolean,
            required: true
        },
        isCertified: {
            type: Boolean,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        }
    },
    {
        timestamps: true,
    });

export const ListingModel: TListingModel = mongoose.model("Listing", ListingSchema);