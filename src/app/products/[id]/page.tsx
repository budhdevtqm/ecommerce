"use client";
import React, { useEffect } from "react";
import ImageSlider from "@/app/components/ImageSlider";
import PageHeader from "@/app/components/PageHeader";
import Wrapper from "@/app/components/Wrapper";
import { useParams } from "next/navigation";
import useFetch from "@/app/custom-hooks/useFetch";
import { FetchedProduct, getProduct } from "@/app/redux/productSlice";
import { useAppSelector } from "@/app/redux/hooks";

const ViewProduct: React.FC = () => {
  const params = useParams() as { id: string };
  const { fetchById } = useFetch();
  const productId = params.id;

  const product = useAppSelector(
    (state) => state.product.product
  ) as FetchedProduct | null;

  console.log("product", product);

  useEffect(() => {
    if (productId) {
      fetchById(getProduct, productId);
    }
  }, []);

  return (
    <Wrapper>
      <PageHeader title={product?.name ?? ""} />
      <div className="flex bg-white my-8 rounded-lg ">
        <ImageSlider images={product?.images as string[] | []} />
        <div className="border-l border-gray-200 p-8 w-[60%] flex gap-4 flex-col items-center justify-center ">
          <div className="flex gap-4 flex-col border p-8 rounded-xl shadow-2xl">
            <p className="text-center" title="Category">{product?.category}</p>
            <p className="text-start font-bold text-gray-600 text-[20px]">{`₹ ${product?.price}`}</p>
            <div>
              <span className="text-gray-500 mr-8">Total Qty</span>
              <span className="text-primary font-bold ">{product?.total}</span>
            </div>
            <div>
              <span className="text-gray-500 mr-8">Left Qty</span>
              <span className="text-primary font-bold">{product?.rest}</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ViewProduct;
