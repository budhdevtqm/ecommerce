"use client";
import React, { useState, useEffect } from "react";
import Wrapper from "@/app/components/Wrapper";
import ImageSlider from "./ImageSlider";
import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";
import useFetch from "@/app/custom-hooks/useFetch";
import { getSingleProduct, Product } from "@/app/redux/homeSlice";
import { useAppSelector } from "@/app/redux/hooks";

const product = {
  _id: "lakdjsfl;ajd;lkfajdfk",
  name: "Watch",
  images: ["/images/user.png", "/images/watch.jpeg"],
  price: 999,
  status: true,
  description:
    "TIMEWEAR New Track Number Dial, Day & Date, Brown Leather Strap Analog Watch - For Men 305WDTG",
  createdAt: new Date().getTime(),
  updatedAt: new Date().getTime(),
  discount: 10,
};

const images = [
  "/images/user.png",
  "/images/watch.jpeg",
  "/images/watch.jpeg",
  "/images/watch.jpeg",
  "/images/user.png",
  "/images/watch.jpeg",
  "/images/watch.jpeg",
  "/images/watch.jpeg",
];

const ViewProduct = () => {
  const [img, setImg] = useState("");
  const { fetchById } = useFetch();
  const router = useRouter();
  const id = useParams().id as string;

  const product = useAppSelector(
    (state) => state.home.product
  ) as Product | null;

  const addToCartHandler = (id: number) => {
    console.log("add-to-cart-id", id);
  };

  useEffect(() => {
    fetchById(getSingleProduct, id);
  }, []);

  useEffect(() => {
    if (product !== null) {
      setImg(`/upload/products/${product?.images[0]}`);
    }
  }, [product]);

  return (
    <Wrapper>
      <div className="flex items-center justify-center">
        <div className="  bg-white p-4 rounded w-[80%]">
          <div className="flex items-center justify-center w-full">
            <ImageSlider setImg={setImg} images={product?.images ?? []} />
          </div>
          <div className="flex w-full mt-4 w-[80%] mx-auto border-t-2 border-primary py-2  ">
            <div className="ml-4">
              <Image
                src={img ?? ""}
                width={150}
                height={150}
                alt={img ?? ""}
                className="h-[150px] w-[150px] p-2 border rounded-xl"
              />
              <div className="flex items-center justify-center mt-4">
                <button
                  type="button"
                  onClick={() => addToCartHandler(product?.id as number)}
                  className="text-center flex items-center justify-center bg-primary p-1 rounded text-white gap-2 px-2"
                >
                  <span className="text-[20px]">
                    <MdShoppingCart />
                  </span>
                  <span className="font-semibold text-[14px]">ADD TO CART</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col px-8 py-2 shadow w-[800px] border ml-4 rounded-xl">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-gray-600">{product?.name}</h2>
                <div className="flex gap-2 items-center">
                  <span className="text-gray-500">₹</span>
                  <h1 className="font-semibold text-[20px] m-0 text-primary">
                    {product?.price}
                  </h1>
                </div>
                <p className="text-center font-thin">{product?.description}</p>
              </div>
              <div className="flex items-center justify-end mt-4 pr-8">
                <button
                  type="button"
                  onClick={() =>
                    router.push(`/product/place-order/${product?.id}`)
                  }
                  className="px-3 py-1 border rounded  font-normal text-primary hover:bg-primary hover:text-white"
                >
                  ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ViewProduct;
