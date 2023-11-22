"use client";
import React, { useState } from "react";
import Image from "next/image";
import { adjustProductName } from "../common-utils/common-fns";
import { FaCartPlus } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import Link from "next/link";

let product = {
  name: "123456789012345678901234567",
  price: "19999",
  _id: "310923849028904kjfalkfajskdlkfj",
};

const ProductCard: React.FC = () => {
  return (
    <div className="bg-white rounded shadow w-[200px] flex items-center justify-center py-2">
      <div className="">
        <div className="border border-gray-200 p-1 flex items-center justify-center">
          <Image
            src={"/images/user.png"}
            width={100}
            height={100}
            alt="Product image"
          />
        </div>
        <div className="flex items-center justify-center flex-col my-3">
          <p
            className="text-center text-[11px] font-semibold"
            title={product.name}
          >
            {adjustProductName(product.name)}
          </p>
          <div className="flex items-center gap-1">
            <span className="text-primary text-[18px] font-bold">₹</span>
            <p className="font-semibold text-gray-500"> {product.price}</p>
          </div>
        </div>
        <div className="flex items-center justify-between my-1">
          <span className="bg-white text-gray-400 text-[20px] cursor-pointer hover:text-primary">
            <FaCartPlus title="Add To Cart" />
          </span>
          <Link
            href={`/product/${product._id}`}
            className="bg-white text-gray-400 text-[20px] mt-[2px] cursor-pointer hover:text-gray-500"
          >
            <FaCircleInfo title="More info..." />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
