import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET({ params }: { params: { id: number } }) {
  const { id } = params;

  try {
    // Convertir id a número
    const categoryId = Number(id);

    // Verificar si la conversión es válida
    if (isNaN(categoryId)) {
      return NextResponse.json(
        { error: "ID de categoría no válido" },
        { status: 400 }
      );
    }
    // Buscar la categoría por ID
    const products = await prisma.product.findUnique({
      where: {
        id: Number(id), // Si el id es de tipo number, sino ajusta el tipo.
      },
    });

    // Si no se encuentra la categoría
    if (!products) {
      return NextResponse.json(
        { error: "Producto no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al recuperar la producto" },
      { status: 500 }
    );
  }
}
