"use client";
import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import PageHeader from "../components/PageHeader";
import { MdEdit, MdDelete } from "react-icons/md";
import Link from "next/link";
import { getDate, getTime } from "../common-utils/common-fns";
import useFetch from "../custom-hooks/useFetch";
import {
  FetchedCategory,
  deleteCategory,
  getAllCategory,
} from "../redux/categorySlice";
import { useAppSelector } from "../redux/hooks";
import useDelete from "../custom-hooks/useDelete";
import { Toaster } from "react-hot-toast";

const Categories: React.FC = () => {
  const { handleFetch } = useFetch();
  const handleDelete = useDelete();

  const categoreis = useAppSelector((state) => state.category.categories) as
    | FetchedCategory[]
    | [];

  const deleteHandler = async (id: number) => {
    await handleDelete(deleteCategory, id);
    await handleFetch(getAllCategory);
  };

  useEffect(() => {
    handleFetch(getAllCategory);
  }, []);
  return (
    <Wrapper>
      <PageHeader title="Categories" navigate="/categories/create" />
      {categoreis.length > 0 ? (
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
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
              </tr>
            </thead>
            <tbody>
              {categoreis.map((c: FetchedCategory, index) => (
                <tr key={index}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {c.name}
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {getDate(c.created_at)}
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      {getTime(c.created_at)}
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
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                    <span className="flex text-[20px] gap-3 cursor-pointer">
                      <Link href={`/categories/update/${c.id}`}>
                        <MdEdit title="Edit" />
                      </Link>
                      <MdDelete
                        title="Delete"
                        onClick={() => deleteHandler(c.id as number)}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[300px]">
          <h1 className="font-bold text-[20px]">No Categories Yet!</h1>
        </div>
      )}
      <Toaster />
    </Wrapper>
  );
};

export default Categories;
