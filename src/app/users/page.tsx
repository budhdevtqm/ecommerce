"use client";
import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import PageHeader from "../components/PageHeader";
import { MdEdit, MdDelete } from "react-icons/md";
import { getDate, getTime } from "../common-utils/common-fns";
import Link from "next/link";
import useFetch from "../custom-hooks/useFetch";
import { FetchedUser, deleteUser, getAllUsers } from "../redux/userSlice";
import { useAppSelector } from "../redux/hooks";
import useDelete from "../custom-hooks/useDelete";

const Users: React.FC = () => {
  const { handleFetch } = useFetch();
  const handleDelete = useDelete();
  const users = useAppSelector((state) => state.users.users) as
    | FetchedUser[]
    | [];

  const deleteHandler = async (id: string) => {
    await handleDelete(deleteUser, id);
    await handleFetch(getAllUsers);
  };

  useEffect(() => {
    handleFetch(getAllUsers);
  }, []);

  return (
    <Wrapper>
      <PageHeader title="Users" navigate="/users/create" />
      <div className="my-8 p-2 border-t-2 border-primary">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                User Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Added On
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Active
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Permissions
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, index) => (
              <tr key={index}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10">
                      {/* <Image
                        className="w-full h-full border border-gray-500 rounded-full"
                        src={user.image ?? "/images/user.png"}
                        alt="user-logo"
                        width={50}
                        height={50}
                      /> */}
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {user.email}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {getDate(user.createdAt)}
                  </p>
                  <p className="text-gray-600 whitespace-no-wrap">
                    {getTime(user.createdAt)}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {user.status == "1" ? (
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
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {user?.role}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                  <span className="flex text-[20px] gap-3 cursor-pointer">
                    {/* <MdInfo
                      title="Info"
                      onClick={() => viewUserHandler(user)}
                    /> */}

                    <Link href={`/users/update/${user.id}`}>
                      <MdEdit title="Edit" />
                    </Link>
                    <MdDelete
                      title="Delete"
                      onClick={() => deleteHandler(user.id as string)}
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
export default Users;
