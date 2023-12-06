import { NextRequest, NextResponse } from "next/server";
import pool from "@/dbConfig/db";

interface UserInterface {
  id: number;
  password: string;
  name: string;
  email: string;
  createAt: string;
  updatedAt: string;
  status: string;
  role: string;
}

interface Category {
  createdAt: string;
  createdBy: number;
  id: number;
  name: string;
  status: number;
  updatedAt: null | string;
}

export const GET = async (req: NextRequest) => {
  try {
    const pathname = req.nextUrl.pathname;
    const categoryId = pathname.split("/").at(-1);

    const [row] = await pool.query("SELECT * FROM categories WHERE id=?", [
      categoryId,
    ]);

    const category = (row as Category[] | [])[0];
    return NextResponse.json({ data: category }, { status: 200 });
  } catch (er) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const pathname = req.nextUrl.pathname;
    const categoryId = pathname.split("/").at(-1);
    await pool.query("DELETE FROM categories WHERE id=?", [categoryId]);

    return NextResponse.json({ message: "Category Deleted" }, { status: 200 });
  } catch (er) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    console.log("body", await req.json());
    const pathname = req.nextUrl.pathname;
    const categoryId = pathname.split("/").at(-1);
    const { name, userEmail } = await req.json();

    const [users] = await pool.query("SELECT * FROM users WHERE email=?", [
      userEmail,
    ]);

    const [allCategory] = await pool.query(
      "SELECT * FROM categories WHERE name=?",
      [name]
    );

    if ((allCategory as Category[] | []).length > 1) {
      return NextResponse.json(
        { message: "Category name already exists" },
        { status: 409 }
      );
    }
    const userId = (users as UserInterface[])[0].id;
    const updated = await pool.query(
      `UPDATE categories SET name =?, created_by=? WHERE id = ${categoryId}`,
      [name, userId]
    );

    console.log("updated", updated);

    return NextResponse.json({ message: "Category updated" }, { status: 200 });
  } catch (er) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};
