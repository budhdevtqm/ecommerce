"use client";
import { useAppDispatch } from "../redux/hooks";
import useNotify from "./useNotifty";

const usePost = () => {
  const dispatch = useAppDispatch();
  const { checkStatus } = useNotify();

  const create = async (fn: any, values: any, path: string, prefix: string) => {
    const response = await dispatch(fn(values));
    checkStatus(response, path, prefix, "added");
  };

  return { create };
};

export default usePost;
