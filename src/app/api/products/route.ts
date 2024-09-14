import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const product = await prisma.product.findMany();
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al recuperar los productos" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // Extraer el cuerpo de la solicitud (JSON)
    const body = await request.json();

    const {
      name,
      image,
      description,
      purchasePrice,
      salesPrice,
      stockQuantity,
      supplierId,
      categoryId,
    } = body;

    // Validar si se enviaron los datos obligatorios
    if (
      !name ||
      !purchasePrice ||
      !salesPrice ||
      !stockQuantity ||
      !supplierId ||
      !categoryId
    ) {
      return NextResponse.json(
        { message: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Verificar si el supplierId es válido
    const supplier = await prisma.supplier.findUnique({
      where: { id: supplierId },
    });
    if (!supplier) {
      return NextResponse.json(
        { message: "Proveedor no encontrado" },
        { status: 400 }
      );
    }

    // Verificar si el categoryId es válido
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });
    if (!category) {
      return NextResponse.json(
        { message: "Categoría no encontrada" },
        { status: 400 }
      );
    }

    // Crear un nuevo producto en la base de datos usando Prisma
    const product = await prisma.product.create({
      data: {
        name,
        image,
        description,
        purchasePrice,
        salesPrice,
        stockQuantity,
        supplierId,
        categoryId,
      },
    });

    // Responder con el producto creado
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    NextResponse.json({ error: "Error al registrar producto" });
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
