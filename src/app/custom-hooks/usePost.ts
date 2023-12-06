"use client";
import { useAppDispatch } from "../redux/hooks";
import { toast } from "react-hot-toast";
import useNotify from "./useNotifty";

const usePost = () => {
  const dispatch = useAppDispatch();
  const { checkStatus } = useNotify();

  const create = async (fn: any, values: any, path: string, prefix: string) => {
    const response = await dispatch(fn(values));
    if (response.type.includes("fulfilled")) {
      toast.success(`${prefix} added`, { position: "top-right" });
      return;
    }

    if (response.type.includes("rejected")) {
      // console.log()
    }
  };

  return { create };
};

export default usePost;
