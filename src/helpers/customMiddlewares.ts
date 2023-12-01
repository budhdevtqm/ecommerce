  import { verify } from "jsonwebtoken";

  export const isAuth =  (token: string) => {
    if (!token) {
      return null;
    }

    const isValid =  verify(token, process.env.ACCESS_TOKEN_SECRET!);
    console.log("isValid", isValid);
  };


