import { NextRequest, NextResponse } from "next/server";
import pool from "@/dbConfig/db";
import { RowDataPacket } from "mysql2";

export const POST = async (req: NextRequest) => {
  try {
    const userEmail = req.headers.get("userEmail");
    const { addressId, items } = await req.json();

    const [users] = await pool.query("SELECT * FROM users WHERE email=?", [
      userEmail,
    ]);
    const { id: userId } = (users as RowDataPacket[])[0];
    console.log("users", userId);

    return NextResponse.json({ message: "Order Placed" }, { status: 200 });
  } catch (er) {
    console.log("er", er);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};
