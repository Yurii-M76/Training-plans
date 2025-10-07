import { PrismaClient } from "@/app/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const response = await prisma.plan.findMany({
      select: {
        id: true,
        period: true,
        price: true,
        full_price: true,
        text: true,
        is_best: true,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Ошибка сервера",
      },
      { status: 500 },
    );
  }
}
