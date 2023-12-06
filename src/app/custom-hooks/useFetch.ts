"use client";
import { useAppDispatch } from "../redux/hooks";

const useFetch = () => {
  const disptach = useAppDispatch();

  const handleFetch = async (fn: any) => await disptach(fn());

  const fetchById = async (fn: any, id: string) => await disptach(fn(id));

  return { handleFetch, fetchById };
};

export default useFetch;
