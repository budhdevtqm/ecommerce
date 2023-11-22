import connection from "@/dbConfig/db";
import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";

connection();

export const login = async (req: NextRequest, res: NextResponse) => {
  const body = req.json();
  console.log("body", body);
};
