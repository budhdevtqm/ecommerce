"use client";
import React from "react";
import Image from "next/image";

interface SliderProps {
  images: [] | Array<string>;
  setImg: (url: string) => void;
}

const ImageSlider: React.FC<SliderProps> = ({ images, setImg }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1 ">
      {images.map((url, index) => (
        <Image
          key={index}
          src={`/upload/products/${url}`}
          width={40}
          height={40}
          alt="product-img"
          className="border p-1 cursor-pointer"
          onClick={() => setImg(url)}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
