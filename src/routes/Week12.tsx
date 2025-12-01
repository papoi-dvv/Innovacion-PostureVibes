import WeekLayout from "../components/layout/WeekLayout";

export default function Week12() {
  return (
    <WeekLayout
      title="Semana 12"
      subtitle="Exposición Final y Cierre del Proyecto"
    >
      <div className="week-card">
        <h2>Presentación Final del Proyecto</h2>
        <p>
          En esta última semana, llevamos a cabo la exposición final de
          <strong> Posture Vibes</strong> ante el jurado y la clase.
          Fue el momento culminante donde demostramos la funcionalidad del
          prototipo, explicamos el proceso de desarrollo y recibimos
          retroalimentación valiosa para futuras iteraciones.
        </p>
      </div>

      <h3>Estructura de la Exposición</h3>
      <ul>
        <li><strong>Introducción:</strong> Planteamiento del problema de la mala postura en estudiantes.</li>
        <li><strong>Solución:</strong> Presentación de Posture Vibes como dispositivo corrector inteligente.</li>
        <li><strong>Demostración:</strong> Uso en vivo del prototipo, mostrando la detección de inclinación y la alerta vibratoria.</li>
        <li><strong>Validación:</strong> Resultados de las pruebas con usuarios y feedback recibido.</li>
        <li><strong>Conclusiones:</strong> Aprendizajes clave y próximos pasos para el proyecto.</li>
      </ul>

      <div className="week-image-grid">
        <img
          src="/Innovacion-PostureVibes/images/models/PreProducto.jpg"
          alt="Pre-producto"
          className="week-image"
        />
        <img
          src="/Innovacion-PostureVibes/images/models/ImpresionF.jpg"
          alt="Producto final"
          className="week-image"
        />
      </div>

      <div className="week-divider" />

      {/* SECCIÓN DE REFLEXIÓN FINAL */}
      <h2>Reflexión Final del Equipo</h2>

      <div className="week-card" style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}>
        <h3 style={{ marginTop: 0, color: '#15803d' }}>Aprendizajes Clave</h3>
        <p>
          A lo largo de estas 12 semanas, aprendimos que la innovación no es un proceso lineal,
          sino iterativo. Desde la conceptualización hasta la fabricación digital, cada etapa
          nos enseñó la importancia de validar nuestras suposiciones con usuarios reales y
          de adaptar el diseño ante las limitaciones técnicas.
        </p>
        <p style={{ marginBottom: 0 }}>
          <strong>Posture Vibes</strong> no es solo un prototipo, es el resultado del trabajo en equipo,
          la investigación aplicada y la perseverancia para resolver un problema real.
        </p>
      </div>

      <h3>Agradecimientos</h3>
      <p>
        Agradecemos al docente por la guía constante, al personal del Fab Lab por el soporte técnico
        y a todos los compañeros que participaron en las validaciones. Este proyecto marca el inicio
        de nuestra capacidad para desarrollar soluciones tecnológicas con impacto social.
      </p>

      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <h3 style={{ fontSize: '1.5rem', color: '#646cff' }}>¡Gracias por acompañarnos en este viaje!</h3>
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Equipo Posture Vibes</p>
      </div>
    </WeekLayout>
  );
}
