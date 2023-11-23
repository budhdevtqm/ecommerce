"use client";
import React from "react";
import Wrapper from "@/components/Wrapper";

const cartItems = [
  {
    _id: 1,
    name: "Iphone",
    price: 190000,
    discription:
      "iPhone is a line of smartphones produced by Apple Inc. that use Apples own iOS mobile operating system.",
    images: ["/images/watch.png", "/images/watch.png", "/images/watch.png"],
  },
];

const CartPage: React.FC = () => {
  return <Wrapper>My Cart</Wrapper>;
};

export default CartPage;
