import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  const { url, nextUrl, cookies } = request;
  const { pathname } = nextUrl;
  try {
    const token = cookies.get("token")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/auth", url));
    }

    const secret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET!);
    const { payload } = await jose.jwtVerify(token, secret);
    const { userRole } = payload;

    const allRole =
      userRole === "user" || userRole === "admin" || userRole === "seller";

    const admin = userRole === "admin";
    const seller = userRole === "seller";
    const user = userRole === "user";

    if (pathname.includes("/users") && admin) {
      return NextResponse.next();
    }

    if (pathname.includes("/categories") && (seller || admin)) {
      return NextResponse.next();
    }

    if (pathname.includes("/products") && userRole !== user) {
      return NextResponse.next();
    }

    if (pathname === "/" && allRole) {
      return NextResponse.next();
    }
    if (pathname === "/cart" && allRole) {
      return NextResponse.next();
    }


    if (pathname === "/users" && admin) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", url));
  } catch (error) {
    return NextResponse.redirect(new URL("/auth", url));
  }
}

export const config = {
  matcher: [
    "/users/:path*",
    "/categories/:path*",
    "/products/:path*",
    "/cart/:path*",
    "/",
  ],
};
