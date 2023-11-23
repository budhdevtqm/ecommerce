import React from "react";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import UpdateProfile from "./UpdateProfile";

const Profile: React.FC = () => {
  const profile = {
    name: "Admin",
  };
  return (
    <Wrapper>
      <div className="w-full h-full ">
        <div className="w-full">
          <div className="w-[53%] flex items-center justify-between">
            <Link
              href="/"
              className="p-2 rounded-2xl hover:bg-gray-300"
              title="Back"
            >
              <span className="">
                <MdArrowBackIosNew />
              </span>
            </Link>
            <h1 className="font-bold text-xl text-gray-600 hover:text-primary">
              {`Hii, ${profile.name}`}
            </h1>
          </div>
        </div>
        <UpdateProfile />
      </div>
    </Wrapper>
  );
};

export default Profile;
