import { useAppDispatch } from "../redux/hooks";

const usePatch = () => {
  const dispatch = useAppDispatch();
  //   const navigate = useNavigate();

  const update = async (fn: any, values: any) => {
    const response = await dispatch(fn(values));

    if (response.type?.includes("fulfilled")) {
      console.log("ffilled");
      //   successToast("update");
    }

    if (response.type?.includes("rejected")) {
      console.log("update-rejected");
      //   verifyStatus(response.payload.status, navigate);
    }
  };
  return update;
};

export default usePatch;
