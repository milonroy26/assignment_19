import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//   ☝ Create operation
export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    // const reqBody = await req.json();
    const result = await prisma.category.createMany({
      data: [
        {
          title: "This is a title",
          metaTitle: "This is a meta title",
          slug: "this-is-a-slug",
          contnt: "This is a content",        
        },
        {
          title: "This is a title2",
          metaTitle: "This is a meta title2",
          slug: "this-is-a-slug2",
          contnt: "This is a content2",
        }
      ],
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
    const result = await prisma.category.findMany({});
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
    const result = await prisma.category.update({
      where: {
        id: id,
      },
      data: {
        title: "update Title",
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
    const result = await prisma.category.delete({
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
