"use client"
import React, { useState } from "react";
import CardImage from "../atoms/CardImage";
import { IImageArray } from "../types/props";
import Slider from "../molecules/Slider";

const CardImageSlide = ({ images }: IImageArray) => {
    const [curr, setCurr] = useState(0)

    const handleClick = () => {
        if (curr+1 >= images.length) {
            setCurr(0)
        } else {
            setCurr(curr+1)
        }
    }

    const handleSlider = (id: number) => {
        setCurr(id)
    }

  return (
    <div className="relative h-full">
      {images.map((t, i) => (
        <div key={i} className={i===curr ? "absolute w-full z-10" : "absolute w-full"} onClick={handleClick}>
            <CardImage src={t.src} alt={t.alt} />
        </div>   
      ))}
      <div className="absolute bottom-3 z-20 w-full flex justify-center">
        <div>
            <Slider total={images.length} curr={curr} handleSlider={handleSlider}/>
        </div>
      </div>
    </div>
  );
};

export default CardImageSlide;
