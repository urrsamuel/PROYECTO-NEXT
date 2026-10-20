import Formulario from "./components/Formulario";
import Stars from "./components/Stars";

export default function Page() {
  return (
    <div>
      <Stars />
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        FORMULARIO DE REGISTRO
      </h1>
      <Formulario />
    </div>
  );
}
