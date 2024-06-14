"use client"

import React, { useEffect, useContext } from "react";
import ProfileTemplate from "@ui/templates/ProfileTemplate";
import { ICard } from "@ui/types/props";
import { AuthContext } from "@/app/context/auth";
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
  const { currentUser, handleAuthCookie } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/")
    }
  }, [currentUser, router])

  return (
    <div>
      <ProfileTemplate items={items} onClick={() => router.push("/add")}/>
    </div>
  );
};

export default Page;
