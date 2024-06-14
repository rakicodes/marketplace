"use client"

import React from "react";
import ProfileTemplate from "@ui/templates/ProfileTemplate";
import { ICard } from "@ui/types/props";
import { useRouter } from "next/navigation";

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
        src: "https://res.cloudinary.com/dfdecuoci/image/upload/v1718178289/fmliwsbscxcoi1xpbprv.jpg",
        alt: "",
      },
      {
        src: "https://res.cloudinary.com/dfdecuoci/image/upload/v1718178286/tuxllrueuv1zykjamlwb.jpg",
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
  const router = useRouter();
  return (
    <div>
      <ProfileTemplate items={items} onClick={() => router.push("/add")}/>
    </div>
  );
};

export default Page;
