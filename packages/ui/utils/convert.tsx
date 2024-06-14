import { ICardImage } from "../types/props";

export const imagesToCardImage = (images: String[], name: string): ICardImage[] => {
    return images.map(image => ({ src: image as string, alt: name }))
  
}