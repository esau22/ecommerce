import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id?: string } } // `id` es opcional
) {
  try {
    // Si se proporciona un ID en los parámetros de la ruta
    if (params.id) {
      const categoryId = Number(params.id);

      // Verificar si la conversión es válida
      if (isNaN(categoryId)) {
        return NextResponse.json(
          { error: "ID del producto no válido" },
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
          { error: "Producto no encontrada" },
          { status: 404 }
        );
      }

      return NextResponse.json(category, { status: 200 });
    } else {
      // Si no se proporciona un ID, obtener todas las categorías
      const categories = await prisma.category.findMany();

      return NextResponse.json(categories, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error al recuperar los productos" },
      { status: 500 }
    );
  }
}
