import { NextRequest, NextResponse } from "next/server";
import pool from "@/dbConfig/db";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  created_by: number;
  created_at: string;
  updated_at: string;
  status: number;
  images: string[] | [];
  quantity: number;
}

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

export const POST = async (req: NextRequest) => {
  try {
    const { id, user_id } = await req.json();

    const [products] = await pool.query(
      "SELECT * FROM products WHERE id=? LIMIT 1",
      [id]
    );

    const { name, images, price } = (products as Product[])[0];

    await pool.query(
      "INSERT INTO cart (user_id, product_id, name, image, price,status) VALUES (?, ?, ?, ?, ?, ?)",
      [user_id, id, name, images[0], price, 1]
    );

    return NextResponse.json({ message: "Added to cart" }, { status: 201 });
  } catch (er) {
    console.log("Added to cart ERROR", er);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};
