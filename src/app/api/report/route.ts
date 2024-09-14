import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const report = await prisma.report.findMany();
    return NextResponse.json(report, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al recuperar los reportes" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Extraer el cuerpo de la solicitud (JSON)
    const body = await request.json();

    const { userId, reportType } = body;

    // Validar si se enviaron los datos obligatorios
    if (!userId || !reportType) {
      return NextResponse.json(
        { message: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Verificar si el user es válido
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
    const report = await prisma.report.create({
      data: {
        userId,
        reportType,
      },
    });

    // Responder con el producto creado
    return NextResponse.json(report, { status: 201 });
  } catch (error) {
    NextResponse.json({ error: "Error al generar reporte" });
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
