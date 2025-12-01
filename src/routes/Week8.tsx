import WeekLayout from "../components/layout/WeekLayout";

export default function Week8() {
  return (
    <WeekLayout
      title="Semana 8"
      subtitle="Primera Impresión y Publicación del Proyecto"
    >
      <div className="week-card">
        <h2>Prototipo Físico Inicial</h2>
        <p>
          En esta octava semana se logró uno de los avances más importantes del proyecto:
          la primera impresión física del dispositivo <strong>Posture Vibes</strong>.
          Esta etapa permitió evaluar la ergonomía del diseño, la calidad de la estructura
          y la adecuación del modelo 3D a los requerimientos funcionales del prototipo.
        </p>
      </div>

      <h3>Resultados obtenidos</h3>
      <ul>
        <li><strong>Primera impresión 3D exitosa:</strong> El modelo se materializó correctamente y respetó las dimensiones propuestas.</li>
        <li><strong>Evaluación de materiales:</strong> Se analizaron la resistencia, textura y flexibilidad del material usado en impresión.</li>
        <li><strong>Pruebas de resistencia:</strong> Se realizaron pequeñas pruebas de presión y manipulación para medir la durabilidad.</li>
        <li><strong>Identificación de mejoras:</strong> Se detectaron ajustes necesarios en el grosor de paredes y la curvatura del área de contacto con la espalda.</li>
      </ul>

      <div className="week-image-grid">
        <img
          src="/Innovacion-PostureVibes/images/models/Impresion1.jpg"
          alt="Primera impresión"
          className="week-image"
        />
        <img
          src="/Innovacion-PostureVibes/images/models/Impresion1-Evidencia.jpg"
          alt="Evidencia impresión 1"
          className="week-image"
        />
      </div>

      <div className="week-divider" />

      {/* SECCIÓN NUEVA: REQUISITOS DE ENTREGA Y EVALUACIÓN */}
      <h2>Requisitos de Entrega y Evaluación Complementaria</h2>
      <p>
        Durante esta semana también se llevaron a cabo los preparativos finales para la exposición y la entrega
        oficial del proyecto. Cada integrante del equipo debió cumplir con los lineamientos establecidos por el docente
        respecto a la publicación web y el envío del enlace correspondiente.
      </p>

      <h3>Publicación del Proyecto</h3>
      <p>
        Se desarrolló la versión documentada del proyecto en una plataforma digital accesible públicamente.
        Cada estudiante tuvo la opción de publicarlo mediante:
      </p>

      <ul>
        <li><strong>Google Sites</strong></li>
        <li><strong>GitHub Pages</strong></li>
        <li><strong>Netlify</strong></li>
        <li>O cualquier otra plataforma HTML accesible</li>
      </ul>

      <div className="week-card" style={{ backgroundColor: '#fff7ed', borderColor: '#fed7aa' }}>
        <p style={{ fontWeight: 600, color: '#9a3412', margin: 0 }}>
          La publicación del proyecto es un <strong>requisito obligatorio</strong> para la validación de la calificación final,
          según las indicaciones del curso.
        </p>
      </div>

      <h3>Entrega del Enlace</h3>
      <ul>
        <li>Cada integrante debió colocar su link correspondiente en el espacio designado por el docente.</li>
        <li>El enlace debía estar disponible de manera pública para la revisión.</li>
        <li>El envío del link debía realizarse dentro de la misma semana de la exposición.</li>
      </ul>

      <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
        Estos lineamientos fueron cumplidos satisfactoriamente, asegurando que el proyecto <strong>Posture Vibes</strong>
        estuviera accesible para su revisión final.
      </p>
    </WeekLayout>
  );
}
