import { NextRequest, NextResponse } from "next/server";
import pool from "@/dbConfig/db";

// export const POST =

export const GET = async (req: NextRequest) => {
  try {
    console.log("headers", req.headers);
    const userEmail = req.headers.get("userEmail");
    // console.log("userEmail", userEmail);
    return NextResponse.json({ data: [] }, { status: 200 });
  } catch (er) {
    console.log("GET-CART-ITEMS---er", er);
    return NextResponse.json({ data: [] }, { status: 200 });
  }
};
