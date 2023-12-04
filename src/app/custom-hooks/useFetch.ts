"use client";
import { useAppDispatch } from "../redux/hooks";
// import verifyStatus from "./verifyStatus";

const useFetch = () => {
  const disptach = useAppDispatch();

  const handleFetch = async (fn: any) => {
    const response = await disptach(fn());

    if (response.type?.includes("rejected")) {
      console.log("rejected");
      return;
    }

    console.log("response", response);
  };

  const fetchById = async (fn: any, id: string) => {
    const response = await disptach(fn(id));
    if (response.type?.includes("rejected")) {
      return;
    }
  };

  return { handleFetch, fetchById };
};

export default useFetch;
