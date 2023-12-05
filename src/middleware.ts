import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export interface JwtError {
  code: string;
  name: string;
  claim: string;
  reason: string;
}

export interface JwtUserInfo {
  userEmail: string;
  userRole: string;
  exp: number;
}

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
    const { userRole, userEmail } = payload;

    if (pathname.includes("/users") && userRole === "admin") {
      return NextResponse.next();
    }

    // if(pathname.includes("/category"))

    return NextResponse.redirect(new URL("/", url));
  } catch (error) {
    return NextResponse.redirect(new URL("/auth", url));
  }
}

export const config = {
  matcher: ["/users/:path*"],
};
