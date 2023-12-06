import { useAppDispatch } from "../redux/hooks";
import useNotify from "./useNotifty";

const useDelete = () => {
  const disptach = useAppDispatch();
  const { checkStatus } = useNotify();

  const handleDelete = async (fn: any, id: number) => {
    const response = await disptach(fn(id));
    checkStatus(response, "", "user", "delete");
  };
  return handleDelete;
};

export default useDelete;
