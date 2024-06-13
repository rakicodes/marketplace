import React from "react";
import ProfileTemplate from "@ui/templates/ProfileTemplate";
import { ICard } from "@ui/types/props";

const items: ICard[] = [
  {
    content: {
      listingId: "1234",
      name: "name",
      location: "Calgary, AB",
      price: 250,
    },
    images: [
      {
        src: "https://res.cloudinary.com/dfdecuoci/image/upload/v1718178291/zy9ekkx1h9illjazfv61.jpg",
        alt: "",
      },
      {
        src: "https://res.cloudinary.com/dfdecuoci/image/upload/v1718178291/zy9ekkx1h9illjazfv61.jpg",
        alt: "",
      },
      {
        src: "https://res.cloudinary.com/dfdecuoci/image/upload/v1718178291/zy9ekkx1h9illjazfv61.jpg",
        alt: "",
      },
    ],
  },
  {
    content: {
      listingId: "1234",
      name: "name",
      location: "Calgary, AB",
      price: 250,
    },
    images: [
      {
        src: "https://res.cloudinary.com/dfdecuoci/image/upload/v1718178291/zy9ekkx1h9illjazfv61.jpg",
        alt: "",
      },
      {
        src: "https://res.cloudinary.com/dfdecuoci/image/upload/v1718178291/zy9ekkx1h9illjazfv61.jpg",
        alt: "",
      },
      {
        src: "https://res.cloudinary.com/dfdecuoci/image/upload/v1718178291/zy9ekkx1h9illjazfv61.jpg",
        alt: "",
      },
    ],
  },
];
const Page = () => {
  return (
    <div>
      <ProfileTemplate items={items} />
    </div>
  );
};

export default Page;
