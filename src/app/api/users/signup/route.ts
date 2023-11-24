import connection from "@/dbConfig/db";
import { NextRequest, NextResponse } from "next/server";

connection.connect();
export const POST = async (req: NextRequest, res: NextResponse) => {
  console.log("body", await req.json());
  const users = await connection.query("SELECT * FROM  users");
  console.log("users", users);
  return NextResponse.json({ data: JSON.stringify(users) });
};
