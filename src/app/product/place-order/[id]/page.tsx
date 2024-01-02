"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Wrapper from "@/app/components/Wrapper";
import Address from "@/app/components/Address";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  AddressTypes,
  Product,
  getMyAddresses,
  getSingleProduct,
} from "@/app/redux/homeSlice";
import useFetch from "@/app/custom-hooks/useFetch";
import Payment from "@/app/components/payment";

const OrderForm: React.FC = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState<number>(0);
  const product = useAppSelector((state) => state.home.product) as Product;
  const { handleFetch, fetchById } = useFetch();

  const { addresses, addressId } = useAppSelector((state) => state.home) as {
    addresses: AddressTypes[];
    addressId: number;
  };

  useEffect(() => {
    if (id) {
      handleFetch(getMyAddresses);
      fetchById(getSingleProduct, id as string);
    }
  }, []);

  useEffect(() => {
    if (product && Object.keys(product).length > 0) {
      setAmount(product.price);
    }
  }, [product]);

  return (
    <Wrapper>
      <div className="flex gap-4 flex-col">
        <div className="rounded  w-full flex flex-col gap-4">
          <Address addresses={addresses} />
        </div>
        {addressId && amount && (
          <div>
            <Payment amount={amount} />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default OrderForm;
