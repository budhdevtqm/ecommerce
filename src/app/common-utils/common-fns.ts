import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

export const getDate = (stamp: number) => new Date(stamp).toDateString();
export const getTime = (stamp: number) => new Date(stamp).toLocaleTimeString();

export const adjustProductName = (name: string) => {
  if (name.length < 20) return name;
  return name.slice(0, 19);
};

// export const verifyStatus = (status: number): void => {
//   const router = useRouter();

//   if (status === 401 || status === 498 || status === 500) {
//     toast.error("Invalid Token", { position: "top-right" });
//     setTimeout(() => router.push("/auth"), 1000);
//   }

//   if (status === 400) {
//     toast.error("Something went wrong!", { position: "top-right" });
//   }

//   if (status === 403) {
//     toast.error("Access Denied", { position: "top-right" });
//     setTimeout(() => router.push("/home"), 1000);
//   }
// };

export const successToast = (operationType: string) => {
  if (operationType === "delete") {
    toast.success("Deleted", { position: "top-right" });
    setTimeout(() => {}, 1000);
    return;
  }
  if (operationType === "update") {
    toast.success("Updated", { position: "top-right" });
    setTimeout(() => {}, 1000);
    return;
  }
  if (operationType === "create") {
    toast.success("Added", { position: "top-right" });
    setTimeout(() => {}, 1000);
    return;
  }
};
