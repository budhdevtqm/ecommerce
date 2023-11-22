"use client";
import React from "react";
import Wrapper from "../../components/Wrapper";
import PageHeader from "../../components/PageHeader";
import { MdInfo, MdEdit, MdDelete } from "react-icons/md";
import { getDate, getTime } from "../../common-utils/common-fns";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import IamgeGallery from "../../components/ImageSlider";

const products = [
  {
    _id: 1,
    name: "Watch",
    price: "999",
    images: ["/images/watch.jpeg", "/images/watch.jpeg", "/images/watch.jpeg"],
    quantity: 100,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    category: "Watches",
    storeId: { name: "DM Store", id: "123498203840923840" },
  },
];

const Products: React.FC = () => {
  return (
    <Wrapper>
      <PageHeader title="All Products" navigate="/products/create" />

      {/* <Modal open={true} center onClose={() => false}>
        <div className="min-w-[500px] p-8">
          <div>
        
          </div>
          <div></div>
        </div>
      </Modal> */}

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
            {products.map((user: any, index) => (
              <tr key={index}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    <Image
                      src={user.images[0]}
                      alt={user.name + "image"}
                      width={50}
                      height={50}
                    />
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {user.name}
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {user.price}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {user.status ? (
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
                    <Link href={`/products/${user._id}`}>
                      <MdInfo
                        title="Info"
                      
                      />
                    </Link>

                    <Link href={`/products/update/${user._id}`}>
                      <MdEdit title="Edit" />
                    </Link>
                    <MdDelete
                      title="Delete"
                      // onClick={() => deleteHandler(user._id as String)}
                    />
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

export default Products;
