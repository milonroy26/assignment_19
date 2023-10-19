import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();

    // ☝ Transactions & Rollback
    const createUser = prisma.user.create({
      data: {
        firstName: "jeosn",
        middlename: "chandro",
        lastName: "roy",
        mobile: "017764653149",
        email: "milon@gmail.com",
        password: "654654",
        admin: true,
      },
    });
    const delatePost = prisma.product.delete({
      where: {
        id: 1,
      },
    });
    const result = await prisma.$transaction([createUser, delatePost]);
    return NextResponse.json({
      status: "success",
      message: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      message: error.message,
    });
  }
}



//☝Aggregate (avg,count,max,min,sum)

export async function PATCH(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.order.aggregate({
      _avg: {
        total: true,
      },
      _count: {
        id: true,
      },
      _max: {
        discount: true,
      },
      _min: {
        discount: true,
      },
      _sum: {
        subtotal: true,
      },
    });

    return NextResponse.json({
      status: "success",
      message: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      message: error.message,
    });
  }
}


