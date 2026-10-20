import Link from "next/link";

export default function ContactoPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Contacto</h1>
      <p>Puedes escribirnos a contacto@miapp.com</p>
      <Link href="/">Volver al inicio</Link>
    </main>
  );
}
