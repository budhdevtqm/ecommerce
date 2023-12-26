import pool from "@/dbConfig/db";
import { RowDataPacket } from "mysql2";
import { NextRequest, NextResponse } from "next/server";

interface Order {
  address_id: number;
  amount: number;
  created_at: string;
  id: number;
  image: string;
  is_cancelled: number;
  is_returned: number;
  name: string;
  payment_id: string;
  product_id: number;
  quantity: number;
  status: number;
  updated_at: string;
  user_id: number;
}

export const GET = async (req: NextRequest) => {
  try {
    const orderId = req.nextUrl.pathname.split("/").at(-1);

    const [data] = await pool.query(
      `SELECT orders.id, orders.amount, orders.status, orders.quantity, orders.name AS product_name, orders.image AS product_image, orders.created_at AS order_created_at, address.name AS recipient_name, address.mobile AS recipient_mobile, address.apartment AS recipient_apartment, address.area AS recipient_area, address.pin AS recipient_pin, address.landmark AS recipient_landmark, address.city AS recipient_city, address.state AS recipient_state FROM orders JOIN address ON orders.address_id = address.id WHERE orders.id = ${orderId}`
    );

    const orderDetails = (data as RowDataPacket[])[0];
    return NextResponse.json(
      { data: { ...orderDetails, method: "Card" } },
      { status: 200 }
    );
  } catch (er) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
};
