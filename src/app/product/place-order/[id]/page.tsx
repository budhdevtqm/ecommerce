"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Wrapper from "@/app/components/Wrapper";
import Address from "@/app/components/Address";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  AddressTypes,
  getMyAddresses,
  setAddressId,
} from "@/app/redux/homeSlice";
import useFetch from "@/app/custom-hooks/useFetch";
import Payment from "@/app/components/payment";

const OrderForm: React.FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { handleFetch } = useFetch();

  let { addresses, addressId } = useAppSelector((state) => state.home) as {
    addresses: AddressTypes[];
    addressId: number;
  };

  useEffect(() => {}, [addressId as number]);

  useEffect(() => {
    handleFetch(getMyAddresses);
    dispatch(setAddressId(null));
  }, []);

  // useEffect(()=> {})

  return (
    <Wrapper>
      <div className="flex gap-4 flex-col">
        <div className="rounded  w-full flex flex-col gap-4">
          <Address addresses={addresses} />
          <span className="font-bold">2. Confirm Payment</span>
        </div>
        <div>
          <Payment />
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderForm;
