import ValueCard from "./valueCard/valueCard";

export default function ContentRowTop() {
  return (
    <div class="row">
        <ValueCard
          title="Total Usuarios Registrados"
          icon="fa-id-card"
          color="warning"
          value="20"
        />
        <ValueCard
          title="Consultas Whatsapp del Dia"
          icon="fa-whatsapp"
          color="success"
          value="79"
        />
      <ValueCard
        title="Productos en Venta"
        icon="fa-chart-line"
        color="primary"
        value="25"
        />
    </div>
  );
}