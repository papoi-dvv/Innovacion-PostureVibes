import WeekLayout from "../components/layout/WeekLayout";

export default function Week10() {
  return (
    <WeekLayout
      title="Semana 10"
      subtitle="Fabricación del Prototipo"
    >
      <div className="week-card">
        {/* ----------------------- Introducción ----------------------- */}
        <h2>1. Clasificación de Piezas del Proyecto</h2>
        <p>
          Para esta etapa se analizó el modelo digital de PostureVibe y se
          definió qué componentes serían fabricados mediante impresión 3D. Como
          el diseño consiste en piezas tridimensionales, curvas y ensamblables,
          toda la estructura fue producida mediante impresión 3D en filamento
          PLA (Bambú Lab). No se empleó corte láser porque ninguna pieza del
          diseño es plana o 2D.
        </p>
      </div>

      {/* Tabla de piezas */}
      <div style={{ overflowX: 'auto', margin: '40px 0' }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #e2e8f0",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f8f9fa" }}>
              <th style={th}>Pieza</th>
              <th style={th}>Tipo de fabricación</th>
              <th style={th}>Justificación</th>
              <th style={th}>Material</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Carcasa superior (logo)</td>
              <td style={td}>Impresión 3D</td>
              <td style={td}>
                Geometría curva, necesita rigidez y volumen para cubrir el
                circuito.
              </td>
              <td style={td}>PLA Bambú</td>
            </tr>
            <tr>
              <td style={td}>Carcasa inferior (placa electrónica)</td>
              <td style={td}>Impresión 3D</td>
              <td style={td}>
                Debe alojar la placa, permitir ventilación y soportar presión
                del usuario.
              </td>
              <td style={td}>PLA Bambú</td>
            </tr>
            <tr>
              <td style={td}>Seguros de las correas</td>
              <td style={td}>Impresión 3D</td>
              <td style={td}>
                Piezas pequeñas que requieren resistencia, encaje y precisión.
              </td>
              <td style={td}>PLA Bambú</td>
            </tr>
            <tr>
              <td style={td}>Soportes internos del circuito</td>
              <td style={td}>Impresión 3D</td>
              <td style={td}>
                Estructuras pequeñas para fijar el vibrador, pulsador y
                resistencia.
              </td>
              <td style={td}>PLA Bambú</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="week-divider" />

      {/* ----------------------- Ajustes previos ----------------------- */}
      <h2>2. Ajustes Previos a la Fabricación</h2>
      <p>
        Antes de generar los archivos STL definitivos, se realizaron varios
        ajustes esenciales para garantizar una impresión segura,
        dimensionada correctamente y adaptable a la placa del prototipo:
      </p>

      <ul>
        <li>
          Corrección del tamaño de la carcasa, ya que las primeras versiones
          resultaron demasiado pequeñas y frágiles (variaciones de hasta 3 cm
          en largo y ancho).
        </li>
        <li>
          Ajuste del grosor de las paredes para mejorar resistencia sin
          comprometer comodidad.
        </li>
        <li>
          Separación del modelo completo en tres archivos para adaptarse al
          tamaño máximo de la cama de impresión.
        </li>
        <li>
          Activación de soportes en áreas curvas y luego retiro manual para
          evitar deformaciones.
        </li>
        <li>
          Revisión de tolerancias internas para permitir el ingreso correcto
          de la placa, vibrador y batería (máx. 500 mA).
        </li>
        <li>
          Alineación y optimización del orificio de carga para que coincidiera
          con el conector del módulo electrónico.
        </li>
      </ul>

      <div className="week-image-grid">
        <div style={{ textAlign: 'center' }}>
          <img
            src="/Innovacion-PostureVibes/images/models/Modelados/Tercera Fase.png"
            alt="Tercera fase del diseño"
            className="week-image"
            style={{ maxWidth: "500px" }}
          />
        </div>
      </div>

      <div className="week-divider" />

      {/* ---------------------- Avances técnicos ---------------------- */}
      <h2>3. Avances Técnicos del Prototipo</h2>
      <ul>
        <li>
          Integración de un vibrador como mecanismo principal de alerta
          postural.
        </li>
        <li>
          Montaje de una placa compacta con pulsador central, resistencia y
          controlador básico de inclinación.
        </li>
        <li>
          Implementación de entrada para carga y compatibilidad tanto con
          batería recargable (≤ 500 mA) como con batería de 9V.
        </li>
        <li>
          Pruebas de activación automática por ángulo de inclinación del
          usuario.
        </li>
        <li>
          Reforzamiento del circuito para evitar desconexiones internas por
          movimiento del cuerpo.
        </li>
        <li>
          Ensamble inicial para verificar puntos de presión y ergonomía.
        </li>
      </ul>

      <div className="week-divider" />

      {/* ----------------------- Roles del equipo ----------------------- */}
      <h2>4. Roles del Equipo</h2>
      <div className="week-card" style={{ backgroundColor: '#f8f9fa' }}>
        <ul>
          <li>
            <strong>Paulo Santos – Responsable de Impresión 3D:</strong> Diseño
            final de las carcasas, ajuste de tolerancias, exportación de STL y
            gestión de los parámetros de impresión.
          </li>
          <li>
            <strong>Matías Tito – Responsable de Electrónica:</strong> Armado
            del circuito, conexión de vibrador y pulsador, calibración y pruebas
            de activación.
          </li>
          <li>
            <strong>Imer Quispe – Documentación y Registro:</strong> Captura de
            evidencias, actualización del portafolio, redacción del proceso.
          </li>
          <li>
            <strong>Anderson Ninahuaman – Ensamblaje:</strong> Verificación de
            encajes, pruebas de ajuste y recomendaciones para mejoras del
            prototipo.
          </li>
        </ul>
      </div>
    </WeekLayout>
  );
}

const th = {
  padding: "16px",
  textAlign: "left" as const,
  fontWeight: 600,
  color: "#4a5568",
  borderBottom: "1px solid #e2e8f0",
};

const td = {
  padding: "16px",
  borderBottom: "1px solid #e2e8f0",
  color: "#2d3748",
};
