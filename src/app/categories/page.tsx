import React from "react";
import Wrapper from "../../components/Wrapper";
import PageHeader from "../../components/PageHeader";
import { MdInfo, MdEdit, MdDelete } from "react-icons/md";
import Link from "next/link";
import { getDate, getTime } from "../../common-utils/common-fns";

const categoreis = [
  {
    _id: 1,
    name: "Electronics",
    createdBy: { name: "ADMIN", id: "123123" },
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    status: false,
  },
  {
    _id: 1,
    name: "Mobiles",
    createdBy: { name: "ADMIN", id: "123123" },
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    status: true,
  },
  {
    _id: 1,
    name: "Shirts",
    createdBy: { name: "ADMIN", id: "123123" },
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    status: true,
  },
  {
    _id: 1,
    name: "Jeans",
    createdBy: { name: "ADMIN", id: "123123" },
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    status: true,
  },
  {
    _id: 1,
    name: "Watches",
    createdBy: { name: "ADMIN", id: "123123" },
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    status: false,
  },
  {
    _id: 1,
    name: "Shoes",
    createdBy: { name: "ADMIN", id: "123123" },
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    status: false,
  },
];

const Categories: React.FC = () => {
  const role = "superAdmin";
  return (
    <Wrapper>
      <PageHeader title="Categories" navigate="/categories/create" />
      <div className="my-8 p-2  border-t-2 border-primary">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Added On
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Active
              </th>
              {role === "superAdmin" && (
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Created By
                </th>
              )}
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            {categoreis.map((c: any, index) => (
              <tr key={index}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {c.name}
                </td>

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {getDate(c.createdAt)}
                  </p>
                  <p className="text-gray-600 whitespace-no-wrap">
                    {getTime(c.createdAt)}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {c.status ? (
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Yes</span>
                    </span>
                  ) : (
                    <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">No</span>
                    </span>
                  )}
                </td>
                {role === "superAdmin" && (
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {c?.createdBy?.name}
                  </td>
                )}

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                  <span className="flex text-[20px] gap-3 cursor-pointer">
                    {/* <MdInfo
                      title="Info"
                      onClick={() => viewUserHandler(user)}
                    /> */}

                    <Link href={`/categories/update/${c._id}`}>
                      <MdEdit title="Edit" />
                    </Link>
                    <MdDelete
                      title="Delete"
                      // onClick={() => deleteHandler(user._id as String)}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Categories;
