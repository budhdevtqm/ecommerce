import { NextRequest, NextResponse } from "next/server";
import pool from "@/dbConfig/db";
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

export const POST = async (req: NextRequest) => {
  try {
    const { email, password, name } = await req.json();
    const [results]: QueryResultType = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (Array.isArray(results) && results.length != 0) {
      return NextResponse.json(
        {
          error: {
            ok: false,
            message: "This email is already in use.",
            status: 409,
          },
        },
        { status: 409 }
      );
    }

    const hash = await bcrypt.hash(password, 10);
    await pool.query(
      "INSERT INTO  users (name, email, password, role, status) VALUES (?,?,?,?,?)",
      [name, email, hash, "user", true]
    );

    return NextResponse.json(
      { data: { status: 201, message: "Signup successfully" } },
      { status: 201 }
    );
  } catch (er) {
    return NextResponse.json({ error: er }, { status: 500 });
  }
};
