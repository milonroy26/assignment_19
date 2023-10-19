import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//   ☝ Create operation
export async function POST(req, res) {
BigInt.prototype.toJSON = function () {
    return this.toString();
};
  try {
    const prisma = new PrismaClient();
    // const reqBody = await req.json();
    const result = await prisma.user.create({
        data: {
            firstName: "roni",
            middlename: "chandro",
            lastName: "roy",
            mobile: "017764653149",
            email: "roni@gmail.com",
            password: "123456",
            admin: true,
            order: {
              create: {
                title: "this is a title",
                token: "This is a token",
                subtotal: 200,   
                itemDiscount : 100,
                tax: 50,
                total: 300,
                discount: 50,
                grandTotal: 250,
                firstName: "roni",
                middleName: "chandro",
                lastName: "roy",
                mobile: "017764653149",
                email: "roni@gmail.com",
                city: "this is a city",
                country: "this is a country",
            }
        }}
    });

    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }
}

//   ☝ Read operation
export const GET = async () => {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const result = await prisma.order.findMany({});
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      data: error.message,
    });
  }
};

//   ☝ Update operation
export const PUT = async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = +searchParams.get("id");
    const result = await prisma.order.update({
      where: {
        id: id,
      },
      data: {
        firstname: "jery",
        metaTitle: "updated meta title",
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      data: error.message,
    });
  }
};

//   ☝ Delete operation
export const DELETE = async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = +searchParams.get("id");
    const result = await prisma.order.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      data: error.message,
    });
  }
};
