"use client";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

interface ImageGalleryProsp {
  images: string[];
}

const ImageSlider: React.FC<ImageGalleryProsp> = ({ images }) => {
  return (
    <div className="w-[40%] bg-white p-8 rounded-lg shadow-lg ">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={images?.length ?? 0}
      >
        <Slider>
          {images?.map((i, index) => (
            <Slide index={0} key={index}>
              <div className="flex items-center justify-center mx-auto my-auto w-[150px] border shadow-lg  rounded-lg  p-4">
                <img src={`/upload/products/${i}`} className="my-8" />
              </div>
            </Slide>
          ))}
        </Slider>
        <div className="flex items-center justify-center py-2 text-[30px] gap-8">
          <ButtonBack>
            <FaArrowAltCircleLeft className="text-gray-500 hover:text-primary" />
          </ButtonBack>
          <ButtonNext>
            <FaArrowAltCircleRight className="text-gray-500 hover:text-primary" />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default ImageSlider;
