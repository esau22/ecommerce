import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
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
    const category = await prisma.category.findUnique({
      where: {
        id: categoryId, // Si el id es de tipo number, sino ajusta el tipo.
      },
    });

    // Si no se encuentra la categoría
    if (!category) {
      return NextResponse.json(
        { error: "Categoría no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al recuperar la categoría" },
      { status: 500 }
    );
  }
}
