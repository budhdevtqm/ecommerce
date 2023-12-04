import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { isAuth } from "./helpers/customMiddlewares";

export const middleware = async (req: NextRequest) => {
  const token = await cookies().get("token")?.value;
  const role = await cookies().get("role")?.value;
  const pathname = req.nextUrl.pathname;

  const isValidToken = await isAuth(token!);

  console.log("isValidToken", isValidToken);

  // if (pathname.includes("/users/")) {
  //   console.log("im here");
  // }
};

export const config = {
  matcher: "/users/:path*",
};
