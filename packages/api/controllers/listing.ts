import asyncHandler from "express-async-handler";
import { ListingModel as Listing } from "../models/Listing";
import { AnalyticModel as Analytic } from "../models/Analytic";
import { Request } from "express";
import { Status, TListing } from "../types/listing";
import { generateListingId, listingFiltersToArray } from "../utils/listing";
import cloudinary from "../middleware/cloudinary";
import { TAnalytic } from "../types/analytic";
import { IRequestExtendsUser } from "../types/user";
import { MulterRequest } from "../types/util";

/**
 ** @desc    get listing by its id
 ** @route   GET /api/:id
 ** @access  Public
 */
export const getOne = asyncHandler(async (req, res) => {
	try {
		const listing = await Listing.findById(req.params.id)
		res.status(200).json(listing)
	} catch (error) {
		console.log(error)
		res.status(400).json("Sorry something went wrong. Couldn't get listing");
	}
});

/**
 ** @desc    get all listings
 ** @route   GET /api
 ** @access  Public
 */
export const getAll = asyncHandler(async (req, res) => {
	try {
		const listings = await Listing.find()
		res.status(200).json(listings)
	} catch (error) {
		console.log(error)
		res.status(400).json("Sorry something went wrong. Couldn't get listings");
	}
});

/**
 ** @desc    get latest listings
 ** @route   GET /api/latest
 ** @access  Public
 */
 export const getLatest = asyncHandler(async (req, res) => {
	try {
		const listings = await Listing.find({ "createdAt": { $gte : new Date(Date.now() - 24*60*60 * 1000) } })
		res.status(200).json(listings)
	} catch (error) {
		console.log(error)
		res.status(400).json("Sorry something went wrong. Couldn't get listings");
	}
});

/**
 ** @desc    search listing
 ** @route   GET /api/listing/search
 ** @access  Public
 */
 export const search = asyncHandler(async (req, res) => {
	try {
		const { priceFrom, priceTo, yearFrom, yearTo, ...filters } = req.query
		const filtersArr = listingFiltersToArray(filters)

		const listings = await Listing.find(
			{
				$and: [
					...filtersArr,
					{ price: { $lte: priceTo || Infinity }},
					{ price: { $gt: priceFrom || 0 }},
					{ year: { $lte: yearTo || Infinity }},
					{ year: {$gt: yearFrom || 0 } },
				],
				
			}
		)

		res.status(200).json(listings)
	} catch (error) {
		console.log(error)
		res.status(400).json("Sorry something went wrong. Couldn't get listings");
	}
});

/**
 ** @desc    add new listing
 ** @route   POST /api
 ** @access  Private
 */
export const add = asyncHandler(
	async (req: IRequestExtendsUser, res) => {
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
				isUsed,
				isCertified,
			} = req.body;

            if (!req.user) {
            res.status(401).json("Unauthorized. You are not logged in.");
            return;
            }
			if (!req.files || (req.files && req.files.length===0)) {
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

			const analytic: TAnalytic | null = await Analytic.findOne({ name: "totalListing" });

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
				isUsed,
				isCertified,
                cloudinaryIds,
                images: cloudinaryImages,
				featuredListing: false,
				status: Status.sale,
				listingId: generateListingId(analytic?.data ? analytic.data + 1 : 0),
				user: req.user._id
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
export const edit = asyncHandler(async (req: IRequestExtendsUser, res) => {
	try {
		if (!req.user) {
			res.status(401).json("Unauthorized. You are not logged in.");
			return;
		}

		const listing = await Listing.findById(req.params.id)
		if (!listing) {
			res.status(400).json("Listing not found");
			return;
		}
		if (req.user._id?.toString() !== listing.user._id.toString()) {
			res.status(400).json("User not authorized");
			return;
		}

		let editedListingValues: Partial<TListing> = {}
		if (req.files && req.files.length as number > 0) {
			let cloudinaryImages: Array<string> | undefined = undefined;
            let cloudinaryIds: Array<string> | undefined = undefined;

			listing.cloudinaryIds.forEach(async (cId) => {
				await cloudinary.uploader.destroy(String(cId))
			})

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

			editedListingValues = {
				cloudinaryIds,
                images: cloudinaryImages,
			}
		}
		editedListingValues = {
			...req.body,
			...editedListingValues
		}
		
		const editedListing = await Listing.updateOne({ _id: req.params.id}, editedListingValues)

		res.status(200).json(editedListing)
	} catch (error) {
		console.log(error);
		res.status(400).json("Sorry something went wrong. Couldn't edit listing");
	}
});

/**
 ** @desc    delete listing
 ** @route   DELETE /api
 ** @access  Private
 */
export const remove = asyncHandler(async (req: IRequestExtendsUser, res) => {
	try {
		if (!req.user) {
			res.status(401).json("Unauthorized. You are not logged in.");
			return;
		}
	
		const listing = await Listing.findById(req.params.id)
		if (!listing) {
			res.status(400).json("Listing not found");
			return;
		}
		if (req.user._id?.toString() !== listing.user._id.toString()) {
			res.status(400).json("User not authorized");
			return;
		}
	
		listing.cloudinaryIds.forEach(async (cId) => {
			await cloudinary.uploader.destroy(String(cId))
		})
	
		await Listing.deleteOne({ _id: req.params.id })
	
		res.status(200).json({ id: req.params.id });
	} catch (error) {
		console.log(error);
		res.status(400).json("Sorry something went wrong. Couldn't delete listing");
	}
});
