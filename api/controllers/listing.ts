import asyncHandler from "express-async-handler";
import { ListingModel as Listing } from "../models/Listing";
import { AnalyticModel as Analytic } from "../models/Analytic";
import { Request, Express } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { Status, TListing } from "../types/listing";
import { generateListingId } from "../utils/listing";
import cloudinary from "../middleware/cloudinary";

/**
 ** @desc    get listing by its id
 ** @route   GET /api/:id
 ** @access  Public
 */
export const getOne = asyncHandler(async (req, res) => {});

/**
 ** @desc    get all listings
 ** @route   GET /api
 ** @access  Public
 */
export const getAll = asyncHandler(async (req, res) => {});

/**
 ** @desc    add new listing
 ** @route   POST /api
 ** @access  Private
 */
export const add = asyncHandler(
	async (req: Request<ParamsDictionary, any, TListing>, res) => {
		try {
			const {
				name,
				price,
				warranty,
				category,
				serialNumber,
				numOfUnits,
				packageType,
				make,
				year,
				isNew,
				isCertified,
			} = req.body;

			/*
            if (!req.user) {
            res.status(401).json("Unauthorized. You are not logged in.");
            return;
            }
            */

			if (!req.files) {
				res
					.status(400)
					.json(
						"Please add at least one image and ensure image is the right file"
					);
				return;
			}
			if (!name) {
				res.status(400).json("Please name your listing");
				return;
			}
			if (!price) {
				res.status(400).json("Please add a price");
				return;
			}
			if (!serialNumber) {
				res.status(400).json("Please add a serial number");
				return;
			}
			if (!packageType) {
				res.status(400).json("Please add package");
				return;
			}
			if (!make) {
				res.status(400).json("Please add make or manufacturer");
				return;
			}
			if (!year) {
				res.status(400).json("Please add year");
				return;
			}
			if (!category) {
				res.status(400).json("Please select category");
				return;
			}

			let cloudinaryImages: Array<string> | null = null;
            let cloudinaryIds: Array<string> | null = null;

            interface MulterRequest extends Request {
                files?: Express.Multer.File[];
            }

			for (const f in req.files) {
				const img: MulterRequest = req.files[f as keyof Request["files"]];
				const cloudinaryImg = await cloudinary.uploader.upload(img.path);
                if (!cloudinaryImages) {
                    cloudinaryImages = [cloudinaryImg.secure_url];
                } else {
                    cloudinaryImages = [cloudinaryImg.secure_url, ...cloudinaryImages];
                }
                if (!cloudinaryIds) {
                    cloudinaryIds = [cloudinaryImg.public_id]
                } else {
                    cloudinaryIds = [cloudinaryImg.public_id, ...cloudinaryIds]
                }
			}

			const analytic = await Analytic.findOne({ name: "totalListing" });

			const listing: TListing = await Listing.create({
				name,
				price,
				warranty,
				category,
				serialNumber,
				numOfUnits,
				packageType,
				make,
				year,
				isNew,
				isCertified,
                cloudinaryIds,
                images: cloudinaryImages,
				featuredListing: false,
				status: Status.sale,
				listingId: generateListingId(analytic?.data ? analytic.data + 1 : 0),
			});

			await Analytic.updateOne({ name: "totalListing" }, { $inc: { data: 1 }}, { upsert: true });

			res.status(201).json(listing);
		} catch (error) {
			console.log(error);
			res
				.status(400)
				.json("Sorry something went wrong. Couldn't create listing");
		}
	}
);

/**
 ** @desc    edit listing
 ** @route   PUT /api/:id
 ** @access  Private
 */
export const edit = asyncHandler(async (req, res) => {});

/**
 ** @desc    delete listing
 ** @route   DELETE /api
 ** @access  Private
 */
export const remove = asyncHandler(async (req, res) => {});