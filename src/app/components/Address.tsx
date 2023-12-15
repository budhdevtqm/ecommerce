"use client";
import React, { useState } from "react";
import AddressCard from "./AddressCard";
import Button from "./Button";

export interface Address {
  id: number;
  full_name: string;
  apartment: string;
  area: string;
  city: string;
  state: string;
  pin: number;
  country: string;
}

const first = {
  id: 1,
  full_name: "Developer",
  apartment: "616",
  area: "GH3 Housing Board, Sector 31",
  city: "Panchkula",
  state: "Haryana",
  pin: 134109,
};

const addresses = [
  {
    id: 1,
    full_name: "Developer",
    apartment: "616",
    area: "GH3 Housing Board, Sector 31",
    city: "Panchkula",
    state: "Haryana",
    pin: 134109,
    country: "India",
  },
  {
    id: 1,
    full_name: "Developer",
    apartment: "616",
    area: "GH3 Housing Board, Sector 31",
    city: "Panchkula",
    state: "Haryana",
    pin: 134109,
    country: "India",
  },
  {
    id: 1,
    full_name: "Developer",
    apartment: "616",
    area: "GH3 Housing Board, Sector 31",
    city: "Panchkula",
    state: "Haryana",
    pin: 134109,
    country: "India",
  },
  {
    id: 1,
    full_name: "Developer",
    apartment: "616",
    area: "GH3 Housing Board, Sector 31",
    city: "Panchkula",
    state: "Haryana",
    pin: 134109,
    country: "India",
  },
];

const Address: React.FC = () => {
  const [change, setChange] = useState<boolean>(false);
  const [defaultAddress, setDefaultAddress] = useState(first);
  return (
    <div className="flex flex-col p-8 bg-white shadow-lg">
      <div className="flex justify-between">
        <div className="my-2">
          <h1 className="font-bold text-[20px]">1. Delivery address</h1>
        </div>
        <div className="flex flex-col text-[15px] my-2">
          <p>{defaultAddress.full_name}</p>
          <p>{defaultAddress.apartment},</p>
          <p>{defaultAddress.area},</p>
          <p>{`${defaultAddress.city}, ${defaultAddress.state} ${defaultAddress.pin}`}</p>
        </div>
        <div className="my-2">
          <button
            onClick={() => setChange(!change)}
            className="text-blue-500 w-[100px]"
          >
            {change ? "Close" : "Change"}
          </button>
        </div>
      </div>
      {change && (
        <div>
          <div className="my-1">
            <h5 className="font-semibold px-4 py-1">Your Addresses</h5>
          </div>
          <div className="px-8">
            {addresses.length > 0 &&
              addresses.map((address) => (
                <AddressCard key={address.id} address={{ ...address }} />
              ))}
            <div className="my-3">
              <Button variant="primary">Add address</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Address;
