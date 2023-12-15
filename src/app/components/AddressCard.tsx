"use client";
import React from "react";
import { Address } from "./Address";
import { MdDelete, MdEdit } from "react-icons/md";
interface PropsTypes {
  address: Address;
}

const AddressCard: React.FC<PropsTypes> = ({ address }) => {
  const { id, full_name, apartment, area, city, state, pin, country } = address;
  return (
    <div className="flex items-center justify-between my-1 p-2 border rounded-lg">
      <div>
        <p>{`${full_name}  ${apartment}, ${area}, ${city}, ${state}, ${pin}, ${country}`}</p>
      </div>
      <div className="flex items-center gap-2 text-[20px]">
        <span className="p-2 rounded hover:bg-gray-200 cursor-pointer">
          <MdEdit className="text-gray-800" />
        </span>
        <span className="p-2 rounded hover:bg-red-200 cursor-pointer">
          <MdDelete className="text-red-800" />
        </span>
      </div>
    </div>
  );
};

export default AddressCard;
