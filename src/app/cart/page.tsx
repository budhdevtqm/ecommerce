"use client";
import React, { useEffect } from "react";
import Wrapper from "@/app/components/Wrapper";
import PageHeader from "../components/PageHeader";
import Link from "next/link";
import { MdDelete, MdEdit } from "react-icons/md";
import Image from "next/image";
import useFetch from "../custom-hooks/useFetch";
import { getAllCartItems } from "../redux/cartSlice";

const cartItmes = [
  {
    id: 1,
    user_id: 2,
    user_name: "developer",
    product_id: 2,
    product_name: "Nokia 1100",
    product_image: "/upload/products/1702381956649-1100-4.jpeg",
    price: 1299,
    quantity: 1,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
    status: true,
  },
  {
    id: 1,
    user_id: 2,
    user_name: "developer",
    product_id: 2,
    product_name: "Nokia 1100",
    product_image: "/upload/products/1702381956649-1100-4.jpeg",
    price: 1299,
    quantity: 1,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
    status: true,
  },
  {
    id: 1,
    user_id: 2,
    user_name: "developer",
    product_id: 2,
    product_name: "Nokia 1100",
    product_image: "/upload/products/1702381956649-1100-4.jpeg",
    price: 1299,
    quantity: 1,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
    status: true,
  },
  {
    id: 1,
    user_id: 2,
    user_name: "developer",
    product_id: 2,
    product_name: "Nokia 1100",
    product_image: "/upload/products/1702381956649-1100-4.jpeg",
    price: 1299,
    quantity: 1,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
    status: true,
  },
];

const CartPage: React.FC = () => {
  const { handleFetch } = useFetch();


  useEffect(() => {
    handleFetch(getAllCartItems)
  }, []);
  return (
    <Wrapper>
      <PageHeader title="My Cart" />
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
            {cartItmes.map((i: any) => (
              <tr key={i.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <Image
                    src={i.product_image}
                    alt={`${i.product_name} image`}
                    width={50}
                    height={50}
                  />
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {i.name}
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{i.price}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {i.status ? (
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
                    {/* <Link href={`/products/${product.id}`}>
                      <MdInfo title="Info" />
                    </Link>

                    <Link href={`/products/update/${product.id}`}>
                      <MdEdit title="Edit" />
                    </Link>
                    <MdDelete
                      title="Delete"
                      onClick={() => deleteHandler(product.id as number)}
                    /> */}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default CartPage;
