import WeekLayout from "../components/layout/WeekLayout";

export default function Week3() {
  return (
    <WeekLayout
      title="Semana 3"
      subtitle="Diseño Inicial y Exploración del Problema"
    >
      <div className="week-card">
        <h2>Avance del Prototipo y Profundización del Problema</h2>
        <p>
          Durante la tercera semana, avanzamos desde la fase conceptual hacia el diseño inicial del prototipo
          de <strong>Posture Vibes</strong>. Paralelamente, desarrollamos la etapa de investigación aplicada
          correspondiente al curso, analizando a detalle el problema general, sus causas, consecuencias y
          los actores afectados.
        </p>
      </div>

      <h3>1. Diseño del Prototipo</h3>
      <p>
        Se elaboraron los primeros bocetos visuales del dispositivo, enfocándonos en lograr un diseño
        cómodo, compacto y ergonómico que pueda adaptarse fácilmente a distintos tipos de usuarios.
        Además, se inició la selección de componentes electrónicos esenciales, considerando sensores
        de movimiento, módulos de vibración y posibles alternativas de conectividad.
      </p>

      <ul>
        <li>Bocetos conceptuales del dispositivo</li>
        <li>Identificación de sensores para monitorear la postura</li>
        <li>Primeras ideas de la interfaz del software acompañante</li>
        <li>Definición preliminar de la arquitectura del sistema</li>
      </ul>

      <div className="week-image-grid">
        <div style={{ textAlign: 'center' }}>
          <img
            src="/Innovacion-PostureVibes/images/models/Modelados/Boceto1.jpg"
            alt="Boceto inicial"
            className="week-image"
            style={{ maxWidth: '420px' }}
          />
          <p style={{ fontSize: '14px', marginTop: '10px', color: '#666' }}>
            Primer boceto conceptual del dispositivo Posture Vibes.
          </p>
        </div>
      </div>

      <div className="week-divider" />

      <h3>2. Desarrollo del análisis investigativo</h3>
      <p>
        En paralelo al diseño técnico, se desarrolló la actividad de investigación del curso.
        Esta etapa se centró en identificar de manera clara el problema general que se busca resolver
        y comprender su impacto real en los estudiantes y profesionales que pasan largas horas en
        entornos digitales.
      </p>

      <div className="week-card">
        <h4>Problema general</h4>
        <p>
          La permanencia prolongada en posturas incorrectas provoca dolores y malestares físicos que
          afectan la calidad de vida de miles de estudiantes y trabajadores.
        </p>

        <h4>Causas del problema</h4>
        <ul>
          <li>Sedentarismo y largas horas frente a computadoras</li>
          <li>Falta de recordatorios posturales o dispositivos preventivos</li>
          <li>Uso excesivo de celulares</li>
          <li>Baja conciencia sobre la importancia de mantener una buena postura</li>
        </ul>

        <h4>Consecuencias del problema</h4>
        <ul>
          <li>Dolores en espalda, cuello y hombros</li>
          <li>Fatiga y menor rendimiento académico/laboral</li>
          <li>Riesgo de desarrollar lesiones crónicas en la columna</li>
        </ul>
      </div>

      <h3>3. Recolección de información – Entrevistas</h3>
      <p>
        Para obtener una comprensión más profunda, se realizaron entrevistas a estudiantes y docentes
        relacionados al reto. Se elaboró un guion de preguntas abiertas y cerradas orientadas a explorar
        hábitos, dificultades, nivel de conciencia y expectativas sobre posibles soluciones tecnológicas.
      </p>

      <p>
        Entrevista destacada:
        <a href="https://youtu.be/VGCtwfIW_Cw?si=6TiC9PTjr9AhYowq" target="_blank" style={{ marginLeft: '8px' }}>
          Ver entrevista en YouTube
        </a>
      </p>

      <h4>Análisis del contenido obtenido</h4>
      <p>
        La información recopilada fue organizada mediante un diagrama de afinidad utilizando la
        plataforma Miro, donde se agruparon patrones comunes como:
      </p>

      <ul>
        <li>Dolor y molestias recurrentes por malas posturas</li>
        <li>Falta de recordatorios o herramientas para corregirse</li>
        <li>Uso excesivo de dispositivos móviles</li>
        <li>Percepción positiva hacia una solución tecnológica</li>
      </ul>

      <p>
        Este proceso permitió validar que el problema es real, frecuente y de alto impacto,
        reforzando la pertinencia e importancia del prototipo Posture Vibes.
      </p>

      <p style={{ marginTop: "20px" }}>
        Plataforma Miro utilizada:
        <a href="https://acortar.link/ak9NSs" target="_blank" style={{ marginLeft: '8px' }}>Ver diagrama de afinidad</a>
      </p>
    </WeekLayout>
  );
}

