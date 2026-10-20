import Link from "next/link";

export default function SobreMiPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Sobre mí</h1>
      <p>Esta es una pequeña aplicación de registro creada con Next.js.</p>
      <Link href="/">Volver al inicio</Link>
    </main>
  );
}
