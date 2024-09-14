import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const salesDetail = await prisma.salesDetail.findMany();
    return NextResponse.json(salesDetail, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al recuperar los detalles de las ventas" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Extraer el cuerpo de la solicitud (JSON)
    const body = await request.json();

    const { saleId, productId, quantity, price, subtotal } = body;

    // Validar si se enviaron los datos obligatorios
    if (!saleId || !productId || !quantity || !price || !subtotal) {
      return NextResponse.json(
        { message: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Verificar si el supplierId es válido
    const sale = await prisma.sale.findUnique({
      where: { id: saleId },
    });
    if (!sale) {
      return NextResponse.json(
        { message: "Venta no realizada" },
        { status: 400 }
      );
    }

    // Verificar si el categoryId es válido
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      return NextResponse.json(
        { message: "Producto no encontrada" },
        { status: 400 }
      );
    }

    // Crear un nuevo producto en la base de datos usando Prisma
    const salesDetail = await prisma.salesDetail.create({
      data: {
        saleId,
        productId,
        quantity,
        price,
        subtotal,
      },
    });

    // Responder con el producto creado
    return NextResponse.json(salesDetail, { status: 201 });
  } catch (error) {
    NextResponse.json({ error: "Error al registrar detalle de la venta" });
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
