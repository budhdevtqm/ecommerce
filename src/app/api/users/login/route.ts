import pool from "@/dbConfig/db";
require("dotenv").config();
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  RowDataPacket,
  FieldPacket,
  ResultSetHeader,
  ProcedureCallPacket,
} from "mysql2";

type QueryResultType = [
  (
    | RowDataPacket[]
    | ResultSetHeader
    | RowDataPacket[][]
    | ProcedureCallPacket
    | RowDataPacket[]
  ),
  FieldPacket[]
];

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { email, password } = await req.json();

    const [results]: QueryResultType = await pool.query(
      "SELECT * FROM users WHERE email=?",
      [email]
    );

    if (Array.isArray(results) && results.length === 0) {
      return NextResponse.json(
        { error: { message: "user not found" } },
        { status: 400 }
      );
    }

    const storedPassword =
      Array.isArray(results) && results.length !== 0 && "password" in results[0]
        ? results[0].password
        : "";

    const isValidPassword = await bcrypt.compare(password, storedPassword);

    if (!isValidPassword) {
      return NextResponse.json(
        { error: { message: "Invalid password" } },
        { status: 400 }
      );
    }

    const userRole =
      Array.isArray(results) && results.length !== 0 && "password" in results[0]
        ? results[0].role
        : "";

    const userId =
      Array.isArray(results) && results.length !== 0 && "password" in results[0]
        ? results[0].id
        : "";

    const token = await jwt.sign(
      { userId, userRole },
      process.env.ACCESS_TOKEN_SECRET!,
      {
        expiresIn: "1h",
      }
    );

    return NextResponse.json(
      { data: { token, message: "login successfully", role: userRole } },
      { status: 200 }
    );
  } catch (er) {
    return NextResponse.json({ error: er }, { status: 500 });
  }
};
