import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    // Extraer el cuerpo de la solicitud (JSON)
    const body = await request.json();

    const { name, description, state } = body;

    // Validar si se enviaron los datos obligatorios
    if (!name || !state) {
      return NextResponse.json(
        { message: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Crear un nuevo producto en la base de datos usando Prisma
    const category = await prisma.category.create({
      data: {
        name,
        description,
        state,
      },
    });

    // Responder con el producto creado
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    NextResponse.json({ error: "Error al crear la categoria" });
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
