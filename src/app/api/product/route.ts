// import { NextRequest, NextResponse } from "next/server";
// import pool from "@/dbConfig/db";
// import multer from "multer";
// import path from "path";

// // const upload = multer({
// //   storage: multer.diskStorage({
// //     destination: "./public/uploads/products/",
// //     filename: (req, file) => console.log("file", file),
// //   }),
// // });

// // export const POST = async (req: NextRequest, res: NextResponse) => {
// //   try {
// //     const formData = await req.formData();

// //     const files = formData.getAll("files");
// //     const name = formData.get("name");
// //     const price = formData.get("price");
// //     const quantity = formData.get("quantity");
// //     const category = formData.get("category");
// //     const description = formData.get("description");

// //     console.log({ name, price, quantity, category, description, files });

// //     return NextResponse.json({ message: "Product added." }, { status: 201 });
// //   } catch (er) {
// //     console.log("----er", er);
// //     return NextResponse.json(
// //       { message: "Something went wrong" },
// //       { status: 400 }
// //     );
// //   }
// // };

// // export default async function handler(
// //   req: MulterRequest,
// //   res: NextApiResponse
// //   ) {
// //   upload.array("images")(req, res, (err) => {
// //   // handle the error, if any
// //   if (err) {
// //   res.status(400).json({ error: err.message })
// //   } else {
// //   // access the uploaded files
// //   const files = req.files
// //   // do something with the files, such as saving them to the database or cloud storage
// //   // send a response to the client
// //   res.status(200).json({ message: "Images uploaded successfully" })
// //   }
// //   })
// //   }

// // Set up multer middleware
// const upload = multer({ dest: "./public/uploads/" }); // Set your desired destination for uploaded files

// export const config = {
//   api: {
//     bodyParser: false, // Disable Next.js default body parsing
//   },
// };

// const handler = async (req: NextRequest, res: NextResponse) => {
//   try {
//     // Use multer middleware to handle file uploads
//     await new Promise<void>((resolve, reject) => {
//       upload.array("files", 10)(req, res, (err: any) => {
//         if (err) {
//           console.error("Error uploading files:", err);
//           reject(err);
//         } else {
//           resolve();
//         }
//       });
//     });

//     // Access uploaded files from req.files
//     const uploadedFiles = await req.formData();

//     // const name = req.body.name as string;
//     // const price = parseFloat(req.body.price as string);
//     // const quantity = parseInt(req.body.quantity as string, 10);
//     // const category = req.body.category as string;
//     // const description = req.body.description as string;

//     // console.log({
//     //   name,
//     //   price,
//     //   quantity,
//     //   category,
//     //   description,
//     //   uploadedFiles,
//     // });

//     // Process the uploaded files and other form data as needed

//     // res.status(201).json({ message: "Product added." });
//   } catch (error) {
//     console.error("Error:", error);
//     // res.status(400).json({ message: "Something went wrong" });
//   }
// };

// export default handler;

import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest, res: NextRequest) {
  try {
    const formData = await req.formData();

    // get the file from the form data
    const file = formData.get("files") as File;
    console.log("file", file);

    // get the file content as an ArrayBuffer
    const fileArrayBuffer = await file.arrayBuffer();

    const productId = 1;
    const fileName = `${new Date().getTime()}-${productId}-${file.name}`;

    const destinationDirPath = path.join(
      process.cwd(),
      "public/upload/products"
    );

    await fs.writeFile(
      path.join(destinationDirPath, fileName),
      Buffer.from(fileArrayBuffer)
    );

    // send a JSON response to the client
    return NextResponse.json({ message: "Product added." });
  } catch (er) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 400 }
    );
  }
}
