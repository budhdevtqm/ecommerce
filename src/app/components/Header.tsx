"use client";
import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import Navbar from "./Navbar";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import Button from "./Button";
import { handleLogout } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(handleLogout());
    toast.success("logout successfuly", { position: "top-right" });
    router.push("/auth");
  };

  return (
    <header className="flex items-center justify-between py-4 px-8 shadow-[#32326926_0px_2px_5px_0px,_#0000000d_0px_1px_1px_0px] z-10">
      <Link className="flex  text-[25px] drop-shadow-lg" href="/">
        <span className="font-semibold text-textPrimary text-[14px] ">TQM</span>
        <span className="font-bold text-primary ">Mart</span>
      </Link>
      <div>
        <Navbar />
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/cart"
            title="Cart"
            className="p-2 cursor-pointer  hover:bg-gray-300 rounded-2xl "
          >
            <FaCartShopping className="h-full " />
          </Link>
          <Link
            href="/profile"
            title="Profile"
            className="p-2 cursor-pointer  hover:bg-gray-300 rounded-2xl "
          >
            <FaUserLarge className="h-full " />
          </Link>
        </div>

        <Button onClick={handleClick} variant="primary">
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
