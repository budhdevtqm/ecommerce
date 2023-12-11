import { NextRequest, NextResponse } from "next/server";
import pool from "@/dbConfig/db";
import { OkPacket } from "mysql";
import { FetchedProduct } from "@/app/redux/productSlice";

interface Inventory {
  id: number;
  product_id: number;
  added: number;
  rest: number;
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
}

export const GET = async (req: NextRequest) => {
  try {
    const productId = req.nextUrl.pathname.split("/").at(-1);

    const [products] = await pool.query("SELECT * FROM products WHERE id=?", [
      productId,
    ]);

    const [inventory] = await pool.query(
      "SELECT * FROM inventory WHERE product_id=?",
      [productId]
    );

    const added = (inventory as Inventory[]).map(
      (inventory: Inventory) => inventory.added
    );

    const rest = (inventory as Inventory[]).map(
      (inventory: Inventory) => inventory.rest
    );

    const addedTotal = added.reduce((a, b) => a + b, 0);
    const restTotal = rest.reduce((a, b) => a + b, 0);

    const product = (products as Product[] | [])[0];

    return NextResponse.json(
      { data: { ...product, total: addedTotal, rest: restTotal } },
      { status: 200 }
    );
  } catch (er) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const productId = req.nextUrl.pathname.split("/").at(-1);

    return NextResponse.json({ message: "updated" }, { status: 200 });
  } catch (er) {
    console.log("errrr----rrrrrr", er);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const productId = req.nextUrl.pathname.split("/").at(-1);

    return NextResponse.json({ message: "deleted" }, { status: 200 });
  } catch (er) {
    console.log("errrr----rrrrrr", er);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};
