import { NextRequest, NextResponse } from "next/server";
import pool from "@/dbConfig/db";
import { OkPacket } from "mysql";
import { FetchedProduct } from "@/app/redux/productSlice";
import path from "path";
import fs from "fs/promises";

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

const fileUploder = async (files: File[] | [], uploadPath: string) => {
  const filesArrayBuffer = await Promise.all(
    files.map(async (file: File) => await file.arrayBuffer())
  );

  const fileNames = files.map(
    (file: File) => `${new Date().getTime()}-${file.name}`
  );

  const destinationDirPath = path.join(
    process.cwd(),
    `public/upload/${uploadPath}`
  );

  await Promise.all(
    fileNames.map(
      async (fileName, index) =>
        await fs.writeFile(
          path.join(destinationDirPath, fileName),
          Buffer.from(filesArrayBuffer[index])
        )
    )
  );

  return fileNames;
};

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
    const formData = await req.formData();
    const name = formData.get("name");
    const category = formData.get("category");
    const price = Number(formData.get("price"));
    const description = formData.get("description");
    const quantity = Number(formData.get("quantity"));
    const files = formData.getAll("files") as File[] | [];
    const fileNames = await fileUploder(files, "products");

    (await pool.query(
      `UPDATE products SET name=?, category=?, price=?, description=?, status=?, created_by=?, quantity=?, images=? WHERE id=${productId}`,
      [
        name,
        category,
        price,
        description,
        1,
        2,
        Number(quantity),
        JSON.stringify(fileNames),
      ]
    )) as any;

    return NextResponse.json({ message: "updated" }, { status: 200 });
  } catch (er) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const productId = req.nextUrl.pathname.split("/").at(-1);

    const deleted = await pool.query("DELETE from products WHERE id=?", [
      productId,
    ]);

    console.log("deleted", deleted);

    return NextResponse.json({ message: "deleted" }, { status: 200 });
  } catch (er) {
    console.log("errrr----rrrrrr", er);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};
