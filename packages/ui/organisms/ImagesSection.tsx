"use client"
import React, { useState } from 'react'
import ImageSlide from '../molecules/ImageSlide'
import { IImageArray } from '../types/props'

const ImagesSection = ({ images }: IImageArray) => {
  const [curr, setCurr] = useState(0)

  const handleCurr = (i: number) => {
    setCurr(i)
  }
  return (
    <div className="flex flex-col gap-y-3 h-96 w-full">
        <img src={images[curr].src} className="rounded h-64 object-cover" />
        <ImageSlide images={images} handleCurr={handleCurr} curr={curr}/>
    </div>
  )
}

export default ImagesSection