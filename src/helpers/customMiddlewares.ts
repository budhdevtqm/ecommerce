import { verify } from "jsonwebtoken";
export const isAuth = async (token: string) => {
  // try {
  //   const secret = process.env.ACCESS_TOKEN_SECRET!;
  //   console.log('secret--->',secret);
  //   const isValidToken = verify(token, secret,(result)=>{
  //     console.log("isValidToken", result);
  //   });

  // } catch (er) {
  //   console.log("isValidToken---er", er);
  // }
};
