"use client";
import React, { useEffect, useState } from "react";
import { CartItem, deleteCartItem, updateQuantity } from "../redux/cartSlice";
import Image from "next/image";
import Button from "../components/Button";
import { ImCross } from "react-icons/im";
import { cartItemName } from "../common-utils/common-fns";
import usePatch from "../custom-hooks/usePatch";

interface CardProps {
  item: CartItem;
  remover: (id: number) => void;
}

const CartCard: React.FC<CardProps> = ({ item, remover }) => {
  const update = usePatch();
  const [qty, setQty] = useState(0);
  const total = (a: number, b: number) => a * b;

  const handleIncrement = () => setQty(qty + 1);
  const handleDecrement = () => qty > 1 && setQty(qty - 1);

  const handleQuantityChange = async (operationType: string, id: number) => {
    if (operationType === "decrement" && qty <= 1) return;

    if (operationType === "increment") {
      handleIncrement();
    }

    if (operationType === "decrement") {
      handleDecrement();
    }

    await update(updateQuantity, { operationType, id });
  };

  useEffect(() => {
    if (item) {
      setQty(item.qty as number);
    }
  }, []);

  return (
    <div className="flex items-center justify-center my-3">
      <div className="w-[90%] bg-white flex items-center justify-between p-2  rounded-md shadow-xl">
        <div className="bg-white flex items-center justify-between gap-1 w-[70%]">
          <div>
            <Image
              src={`/upload/products/${item.image}`}
              alt={`${item.image}`}
              width={100}
              height={200}
            />
          </div>
          <p className="w-[40%]">{cartItemName(item.name)}</p>
          <p>{`₹ ${item.price}`}</p>
          <div className="flex gap-4 items-center">
            <span
              onClick={() => handleQuantityChange("decrement", item.id)}
              className={`px-3 py-1 font-bold text-red-900 border-red-900 ${
                qty === 1 ? "cursor-not-allowed" : "cursor-pointer"
              } hover:text-white rounded-md  border hover:bg-red-900`}
            >
              -
            </span>
            <span className="font-bold text-[20px]">{qty}</span>
            <span
              onClick={() => handleQuantityChange("increment", item.id)}
              className="px-3 py-1 font-bold text-red-900 border-red-900 cursor-pointer hover:text-white rounded-md border hover:bg-red-900"
            >
              +
            </span>
          </div>

          <span>{`₹${total(item.qty as number, item.price)} (total)`}</span>
        </div>
        <div className="flex items-center gap-4 mr-2">
          <span className="px-3 py-1">
            <ImCross
              className="text-red-300 cursor-pointer hover:text-red-500"
              title="Remove"
              onClick={() => remover(item.id as number)}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
