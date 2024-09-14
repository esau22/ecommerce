import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const sale = await prisma.sale.findMany();
    return NextResponse.json(sale, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al recuperar los registro de ventas" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Extraer el cuerpo de la solicitud (JSON)
    const body = await request.json();

    const { totalAmount, saleDate, customerId, userId } = body;

    // Validar si se enviaron los datos obligatorios
    if (!totalAmount || !saleDate || !customerId || !userId) {
      return NextResponse.json(
        { message: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Verificar si el supplierId es válido
    const customer = await prisma.customer.findUnique({
      where: { id: customerId },
    });
    if (!customer) {
      return NextResponse.json(
        { message: "Venta no registrada" },
        { status: 400 }
      );
    }

    // Verificar si el categoryId es válido
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return NextResponse.json(
        { message: "Usuario no encontrado" },
        { status: 400 }
      );
    }

    // Crear un nuevo producto en la base de datos usando Prisma
    const sale = await prisma.sale.create({
      data: {
        totalAmount,
        saleDate,
        customerId,
        userId,
      },
    });

    // Responder con el producto creado
    return NextResponse.json(sale, { status: 201 });
  } catch (error) {
    NextResponse.json({ error: "Error al registrar venta" });
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
