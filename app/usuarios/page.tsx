"use client";
import { useEffect, useState } from "react";
import styles from "./usuarios.module.css";
import Link from "next/link";

interface Usuario {
  id_usuario: string;
  created_at: string;
  nombre_usuario: string | null;
  apellido_usuario: string | null;
  correo_usuario: string | null;
}

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch("/api/usuarios", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("No se pudieron cargar los usuarios");
        }
        setUsuarios(await response.json());
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <div className={styles.container}>
      {/* Botón para regresar al formulario */}
      <div className={styles.backButton}>
        <Link href="/">
          <button> Volver al Formulario</button>
        </Link>
      </div>

      <h1>Lista de Usuarios Registrados</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id_usuario}>
              <td>{u.id_usuario}</td>
              <td>{u.nombre_usuario}</td>
              <td>{u.apellido_usuario}</td>
              <td>{u.correo_usuario}</td>
              <td>{new Date(u.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
