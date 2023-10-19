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
            firstName: "toni",
            middlename: "chandro",
            lastName: "roy",
            mobile: "017764653149",
            email: "toni@gmail.com",
            password: "123456",
            admin: true,
            cart: {
              create: {
                title: "this is a title",
                sessionId: "This is a sessionId",
                token: "this-is-a token",
                status: "This is a status",   
                firstName : "toni",
                middleName: "chandro",
                lastName: "roy",
                mobile: "017764653149",
                email: "toni@gmail.com",
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
    const result = await prisma.cart.findMany({});
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
    const result = await prisma.cart.update({
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
    const result = await prisma.cart.delete({
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
