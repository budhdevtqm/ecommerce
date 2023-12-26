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

    return NextResponse.json(
      { data: (products as Product[] | [])[0] },
      { status: 200 }
    );
  } catch (er) {
    console.log("errrrr", er);
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

    await pool.query("DELETE from products WHERE id=?", [productId]);

    return NextResponse.json({ message: "Product Deleted" }, { status: 200 });
  } catch (er) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};
