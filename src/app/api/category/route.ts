import { NextRequest, NextResponse } from "next/server";
import pool from "@/dbConfig/db";

export const GET = (req: NextRequest) => {
  try {
  } catch (er) {
    return NextResponse.json({ error: er }, { status: 500 });
  }
};
