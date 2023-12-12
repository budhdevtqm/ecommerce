"use client";
import React from "react";
import Image from "next/image";
import { adjustProductName } from "./common-utils/common-fns";
import { FaCartPlus } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import Link from "next/link";
import { Product } from "./redux/homeSlice";

interface ProductCartProps {
  product: Product;
}

const ProductCard: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <div className="bg-white rounded shadow w-[200px] flex items-center justify-center py-2">
      <div className="">
        <div className="border border-gray-200 p-1 flex items-center justify-center">
          <Image
            src={`/upload/products/${product.images[0]}`}
            width={150}
            height={150}
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
            href={`/product/${product.id}`}
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
