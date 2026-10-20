"use client";
import { useState } from "react";
import styles from "./Formulario.module.css";
import Link from "next/link";

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "No se pudo guardar el usuario");
      }

      alert("Usuario registrado correctamente");
      setFormData({ nombre: "", apellido: "", correo: "" });
    } catch (error) {
      alert(error instanceof Error ? error.message : "Error al guardar el usuario");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>  Registro  </h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Guardando..." : "Enviar"}
        </button>
      </form>

      {/* Botón para acceder a la lista de usuarios */}
      <div className={styles.usersButton}>
        <Link href="/usuarios">
          <button className={styles.linkButton}> Ver Usuarios Registrados</button>
        </Link>
      </div>
    </div>
  );
}
