import pool from "@/dbConfig/db";
import { RowDataPacket } from "mysql2";
import { NextResponse, NextRequest } from "next/server";

export const GET = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    const rowData: RowDataPacket[] = rows as RowDataPacket[];
    const emptyPassword = rowData.map((user) => ({ ...user, password: "" }));
    return NextResponse.json(
      { ok: true, data: emptyPassword },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
