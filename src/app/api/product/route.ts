import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import pool from "@/dbConfig/db";

export const fileUploder = async (files: File[] | [], uploadPath: string) => {
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

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const category = formData.get("category");
    const price = Number(formData.get("price"));
    const description = formData.get("description");
    const quantity = Number(formData.get("quantity"));
    const files = formData.getAll("files") as File[] | [];
    const fileNames = await fileUploder(files, "products");

    (await pool.query(
      `INSERT INTO products (name, category, price, description, status, created_by, quantity, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
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

    return NextResponse.json(
      {
        message: "Product added.",
      },
      { status: 201 }
    );
  } catch (er) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 400 }
    );
  }
};

export const GET = async () => {
  try {
    const [products] = await pool.query("SELECT * FROM products");
    return NextResponse.json({ data: products }, { status: 200 });
  } catch (er) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 400 }
    );
  }
};
