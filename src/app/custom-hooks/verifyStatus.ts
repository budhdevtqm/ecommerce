// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// const VerifyStatus: React.FC<{ status: number }> = ({ status }) => {
//   const router = useRouter();

//   const handleStatus = (status: number) => {
//     if (status === 401 || status === 498 || status === 500) {
//       toast.error("Invalid Token", { position: "top-right" });
//       setTimeout(() => router.push("/auth"), 1000);
//     }

//     if (status === 400) {
//       toast.error("Something went wrong!", { position: "top-right" });
//     }

//     if (status === 403) {
//       toast.error("Access Denied", { position: "top-right" });
//       setTimeout(() => router.push("/home"), 1000);
//     }
//   };

//   return { handleStatus };
// };

// export default VerifyStatus;
