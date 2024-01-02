"use client";
import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import PageHeader from "../components/PageHeader";
import { MdInfo, MdEdit, MdDelete } from "react-icons/md";
import { getDate, getTime } from "../common-utils/common-fns";
import Link from "next/link";
import Image from "next/image";
import "react-responsive-modal/styles.css";
import useFetch from "../custom-hooks/useFetch";
import {
  FetchedProduct,
  deleteProduct,
  getAllProducts,
} from "../redux/productSlice";
import { useAppSelector } from "../redux/hooks";
import useDelete from "../custom-hooks/useDelete";
import { Toaster } from "react-hot-toast";

const Products: React.FC = () => {
  const { handleFetch } = useFetch();
  const handleDelete = useDelete();

  const products = useAppSelector((state) => state.product.products) as
    | FetchedProduct[]
    | [];

  useEffect(() => {
    handleFetch(getAllProducts);
  }, []);

  const deleteHandler = async (id: number) => {
    await handleDelete(deleteProduct, id);
    await handleFetch(getAllProducts);
  };
  return (
    <Wrapper>
      <PageHeader title="All Products" navigate="/products/create" />
      <div className="my-8 p-2 border-t-2 border-primary">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Image
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Price (₹)
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Active
              </th>

              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: FetchedProduct) => (
              <tr key={product.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap text-center">
                    <Image
                      src={product.images.length > 0 ? `/upload/products/${product.images[0]}`: `/images/no-image.png`}
                      alt={product.name + "image"}
                      width={50}
                      height={50}
                    />
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {product.name}
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {product.price}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {product.status ? (
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Yes</span>
                    </span>
                  ) : (
                    <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">No</span>
                    </span>
                  )}
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                  <span className="flex text-[20px] gap-3 cursor-pointer items-center justify-center">
                    <Link href={`/products/${product.id}`}>
                      <MdInfo title="Info" />
                    </Link>

                    <Link href={`/products/update/${product.id}`}>
                      <MdEdit title="Edit" />
                    </Link>
                    <MdDelete
                      title="Delete"
                      onClick={() => deleteHandler(product.id as number)}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster />
    </Wrapper>
  );
};

export default Products;
