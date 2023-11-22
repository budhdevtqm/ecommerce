import React from "react";
import Link from "next/link";

interface HeaderProps {
  title: string;
  navigate?: string;
}

const PageHeader: React.FC<HeaderProps> = ({ title, navigate }) => {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-l-4 border-primary rounded">
      <h1 className="font-bold text-[20px] text-gray-600">{title}</h1>
      {navigate && (
        <Link
          href={`${navigate}`}
          className="bg-gray-500 px-8 py-1 text-white rounded hover:bg-primary "
        >
          Add
        </Link>
      )}
    </div>
  );
};

export default PageHeader;
