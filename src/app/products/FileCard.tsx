"use client";

import React from "react";
import { FaImage } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

interface FileCardProps {
  name: string;
}

const FileCard: React.FC<FileCardProps> = ({ name }) => {
  return (
    <div className=" border border-gray-400 rounded-lg ">
      <div className="flex items-center justify-end text-red-500 pt-1 pr-1 text-[18px]">
        <MdCancel className="cursor-pointer" title="Remove" />
      </div>
      <div className=" px-auto py-4 text-[50px] flex items-center justify-center">
        <FaImage title={name} />
      </div>
    </div>
  );
};

export default FileCard;
