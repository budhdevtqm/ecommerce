import { NextRequest, NextResponse } from "next/server";
import pool from "@/dbConfig/db";

interface User {
  id: number;
  password: string;
  name: string;
  email: string;
  createAt: string;
  updatedAt: string;
  status: string;
  role: string;
}

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

// id	user_id	payment_id	product_id	amount	quantity	name	is_cancelled	is_returned	created_at	updated_at	status

export const POST = async (req: NextRequest) => {
  try {
    const { productId, amount, quantity } = await req.json();
    const userEmail = req.headers.get("userEmail");

    const [users] = await pool.query("SELECT * FROM users WHERE email=?", [
      userEmail,
    ]);

    const [products] = await pool.query("SELECT * FROM products WHERE id=?", [
      productId,
    ]);

    console.log({ users, products });

    const userId = (users as User[])[0].id;
    const { name, images } = (products as Product[])[0];

    // await 

    return NextResponse.json({ message: "Order placed" }, { status: 200 });
  } catch (er) {
    console.log("er---", er);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};
