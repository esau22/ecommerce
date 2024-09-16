import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    // Buscar la categoría por ID
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id), // Si el id es de tipo number, sino ajusta el tipo.
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
