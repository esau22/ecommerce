import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { ValidEmail } from "@/lib/valid-email";

export async function GET() {
  try {
    const customer = await prisma.customer.findMany();
    return NextResponse.json(customer, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al recuperar clientes" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // Extraer el cuerpo de la solicitud (JSON)
    const body = await request.json();

    const { dni, firstName, lastName, email, phone, address, state } = body;

    // Validar si se enviaron los datos obligatorios
    if (
      !dni ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
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

    // Crear un nuevo producto en la base de datos usando Prisma
    const customer = await prisma.customer.create({
      data: {
        dni,
        firstName,
        lastName,
        email,
        phone,
        address,
        state,
      },
    });

    // Responder con el producto creado
    return NextResponse.json(customer, { status: 201 });
  } catch (error) {
    NextResponse.json({ error: "Error al registrar al cliente" });
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
