import WeekLayout from "../components/layout/WeekLayout";

export default function Week12() {
  return (
    <WeekLayout
      title="Semana 12"
      subtitle="POSTUREVIDE"
    >
      {/* INTEGRANTES Y FECHA */}
      <div className="week-card">
        <h2>👥 Integrantes del Equipo</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>Matias Rafael Cohaila Ttito</li>
          <li>Paulo Santos Zuasnabar</li>
          <li>Abel Quispe Quezada</li>
          <li>Anderson Ninahuaman</li>
        </ul>

        <h3 style={{ marginTop: '24px' }}>📅 Fecha de Entrega</h3>
        <p>15 de Noviembre del 2025</p>
      </div>

      <div className="week-divider" />

      {/* PROYECTO 3D */}
      <h2>Proyecto 3D</h2>

      <h3>1. Archivos del Modelo 3D</h3>

      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: '40px' }}>
        <div className="week-card" style={{ margin: 0, textAlign: 'center' }}>
          <span style={{ fontSize: '2rem' }}>✏️</span>
          <h4>Archivo Editable</h4>
          <p>Edita el modelo 3D directamente en TinkerCAD</p>
          <a
            href="https://www.tinkercad.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#646cff',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            Abrir en TinkerCAD
          </a>
        </div>

        <div className="week-card" style={{ margin: 0, textAlign: 'center' }}>
          <span style={{ fontSize: '2rem' }}>🖨️</span>
          <h4>Archivo para Impresión</h4>
          <p>Archivo exportado listo para impresión 3D</p>
          <a
            href="#"
            style={{
              display: 'inline-block',
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#1a1a1a',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            amazing migelo.zip
          </a>
        </div>
      </div>

      {/* IMÁGENES DEL PROCESO */}
      <h3>2. Imágenes del Proceso (4 Etapas)</h3>

      <div className="week-image-grid">
        <div>
          <img src="/Innovacion-PostureVibes/images/models/Modelados/Boceto1.jpg" alt="Etapa 1" className="week-image" />
          <p style={{ textAlign: 'center', marginTop: '8px', fontWeight: 500 }}>Etapa 1: Boceto del Concepto</p>
        </div>
        <div>
          <img src="/Innovacion-PostureVibes/images/models/Modelados/Primera fase.png" alt="Etapa 2" className="week-image" />
          <p style={{ textAlign: 'center', marginTop: '8px', fontWeight: 500 }}>Etapa 2: Modelado Base sin Detalles</p>
        </div>
        <div>
          <img src="/Innovacion-PostureVibes/images/models/Modelados/Segunda fase.png" alt="Etapa 3" className="week-image" />
          <p style={{ textAlign: 'center', marginTop: '8px', fontWeight: 500 }}>Etapa 3: Incorporación de Aberturas</p>
        </div>
        <div>
          <img src="/Innovacion-PostureVibes/images/models/Modelados/Tercera Fase.png" alt="Etapa 4" className="week-image" />
          <p style={{ textAlign: 'center', marginTop: '8px', fontWeight: 500 }}>Etapa 4: Versión Refinada Final</p>
        </div>
      </div>

      <div className="week-divider" />

      {/* DIAGRAMA */}
      <h3>3. Diagrama de Ubicación de Elementos Electrónicos</h3>
      <div className="week-card">
        <h4>Diagrama de Componentes Electrónicos</h4>
        <p>Diagrama de ubicación de componentes electrónicos</p>
        {/* Placeholder for diagram if specific image not available, using a relevant model image for now */}
        <img
          src="/Innovacion-PostureVibes/images/models/Modelados/Tercera Fase.png"
          alt="Diagrama de componentes"
          style={{ width: '100%', borderRadius: '8px', marginTop: '16px' }}
        />

        <h4 style={{ marginTop: '24px' }}>Elementos a utilizar</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <span style={{ marginRight: '8px' }}>🔧</span>
            <strong>Placa de circuito impreso (PCB)</strong> — soporte y tornillos incluidos si aplica
          </li>
          <li>
            <span style={{ marginRight: '8px' }}>🔋</span>
            <strong>Batería LiPo</strong> — con conector y alojamiento para su montaje
          </li>
        </ul>
      </div>

      <div className="week-divider" />

      {/* REFLEXIÓN */}
      <h2>4. Reflexión</h2>

      <div className="week-card" style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}>
        <h3 style={{ marginTop: 0, color: '#15803d' }}>¿Qué cambió durante la iteración y por qué?</h3>
        <p>
          Durante el desarrollo del proyecto realizamos diversos cambios importantes. Uno de los primeros fue
          la forma del modelo: inicialmente tenía un diseño cuadrado, pero después de las entrevistas y
          considerando las críticas constructivas de los participantes, decidimos modificarlo.
        </p>
        <p>
          Otro cambio significativo fue el tamaño. Al buscar y evaluar los componentes necesarios, descubrimos
          que era imposible acomodarlos adecuadamente en el prototipo original, por lo que ajustamos sus dimensiones.
        </p>
        <p style={{ marginBottom: 0 }}>
          Finalmente, el cambio más relevante para nosotros fue el ajuste del dispositivo. Durante las pruebas,
          varios entrevistados tuvieron que hacer esfuerzo para colocárselo, especialmente las personas con una
          contextura corporal más grande. Por ello, rediseñamos las proporciones para que el producto sea mucho
          más fácil de poner y quitar.
        </p>
      </div>
    </WeekLayout>
  );
}
