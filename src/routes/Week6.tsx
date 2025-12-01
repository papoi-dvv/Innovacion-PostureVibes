import WeekLayout from "../components/layout/WeekLayout";

export default function Week6() {
  return (
    <WeekLayout
      title="Semana 6"
      subtitle="Modelado 3D y Corte Láser"
    >
      <div className="week-card">
        <h2>Desarrollo del Modelo Tridimensional</h2>
        <p>
          Durante esta semana realizamos el modelado 3D final del dispositivo
          <strong> Posture Vibes</strong> y desarrollamos el primer prototipo
          utilizando técnicas de corte láser y encastre. Esto nos permitió
          validar la estructura, ergonomía y ensamblaje físico del diseño.
        </p>
      </div>

      <h3>Logros de la semana</h3>
      <ul>
        <li>Modelado 3D completo del dispositivo.</li>
        <li>Optimización del diseño ergonómico.</li>
        <li>Simulaciones de funcionamiento y estructura.</li>
        <li>Preparación de piezas para impresión 3D y corte láser.</li>
      </ul>

      {/* IMÁGENES DE MODELADO 3D */}
      <div className="week-image-grid">
        <img
          src="/Innovacion-PostureVibes/images/models/Modelados/Primera fase.png"
          alt="Primera fase"
          className="week-image"
        />

        <img
          src="/Innovacion-PostureVibes/images/models/Modelados/Segunda fase.png"
          alt="Segunda fase"
          className="week-image"
        />
      </div>

      <div className="week-divider" />

      {/* SECCIÓN DE CORTE LÁSER Y EVALUACIÓN DE LA ACTIVIDAD */}
      <h2>Actividad: Corte Láser con Encastre</h2>

      <p>
        Como parte de la evaluación de la semana, desarrollamos un prototipo físico mediante
        <strong> corte láser</strong>, aplicando técnicas de encastre, marcado y grabado.
        Esta actividad nos permitió comprender mejor los procesos de fabricación digital
        utilizados en el diseño de productos reales.
      </p>

      {/* INVESTIGACIÓN */}
      <h3>Investigación</h3>
      <p>
        Realizamos un breve marco teórico sobre el funcionamiento del láser, sus parámetros
        y las técnicas esenciales:
      </p>

      <ul>
        <li><strong>Corte:</strong> líneas que atraviesan totalmente el material para generar piezas.</li>
        <li><strong>Marcado:</strong> líneas superficiales que sirven como guías de ensamblaje.</li>
        <li><strong>Grabado:</strong> sombreado o eliminación superficial del material para crear texturas o logos.</li>
        <li><strong>Encastres:</strong> uniones ajustadas sin adhesivos, por presión o ranuras.</li>
      </ul>

      {/* DISEÑO */}
      <h3>Diseño Digital</h3>
      <p>
        El diseño se realizó en Onshape, preparando las piezas con las tolerancias necesarias
        para asegurar un encastre adecuado. Se aplicaron las tres técnicas (corte, marcado y grabado)
        respetando los lineamientos del Fab Lab.
      </p>

      <div className="week-image-grid">
        <img
          src="/Innovacion-PostureVibes/images/corte_laser/CorteLaser1.jpg"
          alt="Diseño corte láser 1"
          className="week-image"
        />

        <img
          src="/Innovacion-PostureVibes/images/corte_laser/CorteLaser2.jpg"
          alt="Diseño corte láser 2"
          className="week-image"
        />
      </div>

      {/* PROCESO DE FABRICACIÓN */}
      <h3>Proceso de Fabricación</h3>
      <ul>
        <li>Exportamos el archivo en formato <strong>.DXF</strong> para el láser Trotec.</li>
        <li>Seleccionamos el material ideal según disponibilidad del Fab Lab.</li>
        <li>Configuramos velocidad, potencia y frecuencia según el material.</li>
        <li>Realizamos el corte y verificamos la precisión de cada pieza.</li>
        <li>Comprobamos que los encastres encajaran sin necesidad de adhesivos.</li>
      </ul>

      {/* RESULTADO FINAL */}
      <h3>Resultado Final</h3>
      <p>
        El prototipo ensamblado permitió evaluar la resistencia de las piezas y validar la
        geometría del diseño. Fue posible demostrar el uso correcto de corte, marcado, y grabado.
      </p>

      {/* REFLEXIÓN */}
      <div className="week-card" style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}>
        <h3 style={{ marginTop: 0, color: '#15803d' }}>Reflexión</h3>
        <p style={{ marginBottom: 0 }}>
          Esta experiencia nos permitió comprender mejor la relación entre el diseño digital
          y la fabricación física. Aprendimos sobre tolerancias reales, comportamiento del material
          y ajustes necesarios para lograr un encastre óptimo. Entre las mejoras identificadas se
          incluye aumentar el grosor de ciertas piezas y ajustar la profundidad del grabado.
        </p>
      </div>
    </WeekLayout>
  );
}
