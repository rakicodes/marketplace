"use client"
import React, { useState } from 'react'
import ImageSlide from '../molecules/ImageSlide'

const temp = [
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
      {
        src: "https://res.cloudinary.com/dfdecuoci/image/upload/v1718178286/tuxllrueuv1zykjamlwb.jpg",
        alt: "",
      },
      {
        src: "https://res.cloudinary.com/dfdecuoci/image/upload/v1718178286/tuxllrueuv1zykjamlwb.jpg",
        alt: "",
      },
]
const ImagesSection = () => {
  const [curr, setCurr] = useState(0)

  const handleCurr = (i: number) => {
    setCurr(i)
  }
  return (
    <div className="flex flex-col gap-y-3 h-96 w-full">
        <img src={temp[curr].src} className="rounded h-64 object-cover" />
        <ImageSlide images={temp} handleCurr={handleCurr} curr={curr}/>
    </div>
  )
}

export default ImagesSection