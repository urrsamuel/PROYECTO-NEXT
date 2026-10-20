import { prisma } from "../../lib/prisma";

export const dynamic = "force-dynamic";

function serializeUsuario(usuario: {
  id_usuario: bigint;
  created_at: Date;
  nombre_usuario: string | null;
  apellido_usuario: string | null;
  correo_usuario: string | null;
}) {
  return {
    id_usuario: usuario.id_usuario.toString(),
    created_at: usuario.created_at.toISOString(),
    nombre_usuario: usuario.nombre_usuario,
    apellido_usuario: usuario.apellido_usuario,
    correo_usuario: usuario.correo_usuario,
  };
}

export async function GET() {
  try {
    const usuarios = await prisma.formulario.findMany({
      orderBy: { created_at: "desc" },
    });

    return Response.json(usuarios.map(serializeUsuario));
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
    return Response.json(
      { error: "No se pudieron cargar los usuarios" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nombre = typeof body.nombre === "string" ? body.nombre.trim() : "";
    const apellido = typeof body.apellido === "string" ? body.apellido.trim() : "";
    const correo = typeof body.correo === "string" ? body.correo.trim() : "";

    if (!nombre || !apellido || !correo) {
      return Response.json(
        { error: "Nombre, apellido y correo son obligatorios" },
        { status: 400 },
      );
    }

    const usuario = await prisma.formulario.create({
      data: {
        nombre_usuario: nombre,
        apellido_usuario: apellido,
        correo_usuario: correo,
      },
    });

    return Response.json(serializeUsuario(usuario), { status: 201 });
  } catch (error) {
    console.error("Error al guardar usuario:", error);
    return Response.json(
      { error: "No se pudo guardar el usuario" },
      { status: 500 },
    );
  }
}
