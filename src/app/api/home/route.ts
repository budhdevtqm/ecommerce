import { NextRequest, NextResponse } from "next/server";
import pool from "@/dbConfig/db";

export const GET = async () => {
  try {
    const [products] = await pool.query("SELECT * FROM products");
    return NextResponse.json({ data: products }, { status: 200 });
  } catch (er) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};
