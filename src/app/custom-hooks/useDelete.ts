import { useAppDispatch } from "../redux/hooks";
import useNotify from "./useNotifty";

const useDelete = () => {
  const disptach = useAppDispatch();
  const { checkStatus } = useNotify();

  const handleDelete = async (fn: any, id: string) => {
    const response = await disptach(fn(id));
    checkStatus(response, "", "user", "deleteI");
  };
  return handleDelete;
};

export default useDelete;
