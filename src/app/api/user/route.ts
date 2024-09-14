import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { ValidEmail } from "@/lib/valid-email";
import bcrypt from "bcrypt";

export async function GET() {
  try {
    const user = await prisma.user.findMany();
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al recuperar los productos" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Extraer el cuerpo de la solicitud (JSON)
    const body = await request.json();

    const {
      dni,
      username,
      image,
      password,
      confirmPassword,
      email,
      role,
      state,
    } = body;

    // Validar si se enviaron los datos obligatorios
    if (
      !dni ||
      !username ||
      !password ||
      !confirmPassword ||
      !email ||
      !role ||
      !state
    ) {
      return NextResponse.json(
        { message: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    if (!ValidEmail(email)) {
      return NextResponse.json({ message: "Email no válido" }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: "La contraseña y la confirmación no coinciden" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "El correo electrónico ya está registrado" },
        { status: 400 }
      );
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo producto en la base de datos usando Prisma
    const user = await prisma.user.create({
      data: {
        dni,
        username,
        image,
        password: hashedPassword,
        email,
        role,
        state,
      },
    });

    // Responder con el producto creado
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    NextResponse.json({ error: "Error al registrar usuario" });
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
