import { NextRequest, NextResponse } from "next/server";
import pool from "@/dbConfig/db";

export const GET = (req: NextRequest) => {
  try {
  } catch (er) {
    return NextResponse.json({ error: er }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log("body", body);
    // const [rows] = await pool.query("");
    return NextResponse.json({ message: "Added successfuly" }, { status: 201 });
  } catch (er) {
    return NextResponse.json(
      { message: "Something went worng" },
      { status: 400 }
    );
  }
};
