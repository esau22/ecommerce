import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { ValidEmail } from "@/lib/valid-email";

export async function GET() {
  try {
    const supplier = await prisma.supplier.findMany();
    return NextResponse.json(supplier, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al recuperar los proveedores" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Extraer el cuerpo de la solicitud (JSON)
    const body = await request.json();

    const { ruc, name, contactName, phone, email, address, state } = body;

    // Validar si se enviaron los datos obligatorios
    if (
      !ruc ||
      !name ||
      !contactName ||
      !phone ||
      !email ||
      !address ||
      !state
    ) {
      return NextResponse.json(
        { message: "Faltan campos requeridos" },
        { status: 400 }
      );
    }
    //valiadar email
    if (!ValidEmail(email)) {
      return NextResponse.json({ message: "Email no válido" }, { status: 400 });
    }

    // Crear un nuevo provvedor en la base de datos usando Prisma
    const supplier = await prisma.supplier.create({
      data: {
        ruc,
        name,
        contactName,
        phone,
        email,
        address,
        state,
      },
    });

    // Responder con el proveedor creado
    return NextResponse.json(supplier, { status: 201 });
  } catch (error) {
    NextResponse.json({ error: "Error al registrar proveedor" });
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
