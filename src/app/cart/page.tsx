"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/app/components/Wrapper";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Link from "next/link";
import useFetch from "../custom-hooks/useFetch";
import { CartItem, deleteCartItem, getAllCartItems } from "../redux/cartSlice";
import { useAppSelector } from "../redux/hooks";
import CartCard from "./CartCard";
import useDelete from "../custom-hooks/useDelete";

const CartPage: React.FC = () => {
  const [myCart, setMyCart] = useState<CartItem[] | []>([]);
  const [total, setTotal] = useState<number>(0);
  const { handleFetch } = useFetch();
  const handleDelete = useDelete();

  const cartItems = useAppSelector((state) => state.cart.cartItems) as
    | CartItem[]
    | [];

  useEffect(() => {
    handleFetch(getAllCartItems);
  }, []);

  const deleteHandler = async (id: number) => {
    await handleDelete(deleteCartItem, id);
    await handleFetch(getAllCartItems);
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      setMyCart(cartItems);
      const allItemsTotal = cartItems.map(
        (item: CartItem) => item.qty! * item.price
      );
      setTotal(allItemsTotal.reduce((a, b) => a + b, 0));
    }
  }, [cartItems]);

  return (
    <Wrapper>
      <PageHeader title="My Cart" />
      <div>
        {myCart &&
          myCart.map((i: CartItem) => (
            <CartCard
              key={i.id}
              item={i}
              remover={deleteHandler}
              myCart={myCart}
              setMyCart={setMyCart}
              setTotal={setTotal}
            />
          ))}
      </div>
      {total !== 0 && (
        <div className="w-[90%] mx-auto flex items-center justify-end my-4">
          <div className="w-[60%] flex items-center justify-between pr-36">
            <Button>Place Order</Button>
            <span className="font-semibold text-[18px]">{`₹ ${total}`}</span>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default CartPage;
