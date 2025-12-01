import WeekLayout from "../components/layout/WeekLayout";

export default function Week1() {
  return (
    <WeekLayout
      title="Semana 1"
      subtitle="Conceptualización del Proyecto y Definición del Reto"
    >
      <div className="week-card">
        <h2>Posture Vibes – Corrector de Postura Inteligente</h2>
        <p>
          En la primera semana iniciamos con la conceptualización formal de <strong>Posture Vibes</strong>,
          un dispositivo inteligente enfocado en el monitoreo y mejora de la postura en estudiantes y
          personas que pasan largas horas frente a la computadora. Esta etapa estuvo orientada a entender
          profundamente el reto planteado por el curso y a establecer las bases de nuestro proyecto de innovación.
        </p>
      </div>

      <div className="week-divider" />

      {/* ACTIVIDAD DEL CURSO */}
      <h3>Actividad 1 – Lineamientos del Curso</h3>

      <p>
        Como parte del curso de <strong>Teoría de Investigación e Innovación Tecnológica</strong>, se nos indicó
        iniciar con la conformación del equipo, el análisis del reto elegido y la elaboración de una presentación
        basada en la investigación realizada. Las principales indicaciones fueron las siguientes:
      </p>

      <ul>
        <li><strong>Conformación de grupos:</strong> Creamos un equipo multidisciplinario de 4 integrantes.</li>
        <li>
          <strong>Investigación del reto:</strong> Analizamos el contexto de salud postural en estudiantes,
          identificando causas, efectos y oportunidades de intervención tecnológica.
        </li>
        <li>
          <strong>Presentación de hallazgos:</strong> Elaboramos una presentación interna y grabamos
          un video de exposición para comunicar los primeros resultados de la investigación.
        </li>
      </ul>

      <div className="week-divider" />

      {/* RETO DEL CURSO */}
      <h3>Reto seleccionado</h3>
      <p>
        Elegimos el reto dentro del eje de <strong>Salud y Bienestar</strong>, específicamente:
      </p>

      <div className="week-card" style={{ backgroundColor: '#eef2ff', borderColor: '#c7d2fe' }}>
        <h4 style={{ margin: '0 0 16px 0', color: '#4338ca', fontSize: '1.2rem' }}>📌 Monitoreo de hábitos posturales en estudiantes</h4>
        <p style={{ margin: 0 }}>
          En entornos académicos y digitales, los estudiantes suelen mantener malas posturas durante horas,
          generando dolores musculares, tensión cervical y fatiga. El desafío consiste en diseñar un sistema
          tangible acompañado de software que ayude a monitorear la postura y mejorar estos hábitos.
        </p>
      </div>

      {/* OBJETIVOS DE LA SEMANA */}
      <h3>Objetivos de la semana</h3>
      <ul>
        <li>Comprender a profundidad el problema de la mala postura en estudiantes.</li>
        <li>Explorar tendencias tecnológicas utilizadas en dispositivos de monitoreo corporal.</li>
        <li>Generar ideas iniciales sobre un dispositivo portátil no intrusivo.</li>
        <li>Evaluar la viabilidad técnica inicial del proyecto.</li>
      </ul>

      {/* AVANCES */}
      <h3>Avances realizados</h3>
      <p>
        Durante esta semana desarrollamos la base conceptual del proyecto. Posture Vibes nace como un
        <strong>corrector de postura inteligente</strong> que combina sensores para identificar inclinación o
        desviaciones posturales, junto con un sistema de retroalimentación por vibración para que el usuario
        se corrija de manera natural. También realizamos un análisis preliminar del hardware posible y las
        primeras ideas de diseño del dispositivo.
      </p>

      <p style={{ marginTop: '20px', opacity: 0.8, fontStyle: 'italic' }}>
        Con esta primera semana concluida, logramos asentar la visión del proyecto y definir una dirección
        clara para las siguientes etapas de investigación y desarrollo.
      </p>
    </WeekLayout>
  );
}
