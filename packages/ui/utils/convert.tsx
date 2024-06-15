import { IListing } from "../types/data";
import { ICard, ICardContent, ICardImage, IImageArray } from "../types/props";

export const imagesToCardImage = (
	images: String[],
	name: string
): ICardImage[] => {
	return images.map((image) => ({ src: image as string, alt: name }));
};

export const listingArrayToCardArray = (listing: IListing[]): ICard[] => {
	return listing.map((l) => ({
		content: {
			listingId: l.listingId,
			name: l.name,
			price: l.price,
			category: l.category,
		} as ICardContent,
		images: imagesToCardImage(l.images, l.name),
	}));
};