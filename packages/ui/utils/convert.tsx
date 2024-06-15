import { IListing } from "../types/data";
import { ICard, ICardContent, ICardImage } from "../types/props";

export const imagesToCardImage = (
	images: String[],
	name: string
): ICardImage[] => {
	return images.map((image) => ({ src: image as string, alt: name }));
};

export const listingArrayToCardArray = (listing: IListing[], handleClick: (id: string) => void): ICard[] => {
	return listing.map((l) => ({
		content: {
			listingId: l.listingId,
			name: l.name,
			price: l.price,
			category: l.category,
		} as ICardContent,
		id: l._id as unknown as string,
		images: imagesToCardImage(l.images, l.name),
		handleClick: handleClick
	}));
};