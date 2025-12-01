import WeekLayout from "../components/layout/WeekLayout";
import CircularGallery from "../components/gallery/CircularGallery";

export default function Week9() {
  const prototypeImages = [
    { src: "/Innovacion-PostureVibes/images/models/Modelados/Boceto1.jpg", alt: "Boceto inicial del prototipo" },
    { src: "/Innovacion-PostureVibes/images/models/Modelados/Boceto2.jpg", alt: "Segundo boceto del diseño" },
    { src: "/Innovacion-PostureVibes/images/models/Modelados/Primera fase.png", alt: "Primera fase del modelado" },
    { src: "/Innovacion-PostureVibes/images/models/Modelados/Segunda fase.png", alt: "Segunda fase del desarrollo" },
    { src: "/Innovacion-PostureVibes/images/models/Modelados/Tercera Fase.png", alt: "Tercera fase del prototipo" }
  ];

  return (
    <WeekLayout
      title="Semana 9"
      subtitle="Prototipado y Validación"
    >
      {/* ----------------------- INTRODUCCIÓN ----------------------- */}
      <h2>1. Introducción</h2>

      <h3>Contextualización de la Solución</h3>
      <p>
        En entornos académicos y laborales, los estudiantes y programadores
        pasan largas horas frente a una computadora, generando malas posturas,
        dolores musculares y fatiga. <strong>Posture Vide</strong> busca ser
        un dispositivo con sensores que ayuden a corregir los hábitos
        posturales de manera práctica y discreta.
      </p>

      <h3>Objetivo del Prototipado</h3>
      <p>
        El prototipado permitió materializar la idea, evaluar su comodidad,
        tamaño e interacción física con el usuario. Además, se utilizó para
        aprender rápidamente mediante la iteración continua.
      </p>

      <div className="week-divider" />

      {/* ----------------------- DESARROLLO ----------------------- */}
      <h2>2. Desarrollo del Prototipo</h2>

      <h3>Tipo de Prototipo Elegido</h3>
      <p>
        Se eligió un <strong>prototipo mixto</strong>: bocetos en papel para
        definir forma y estructura, y un modelo digital en{" "}
        <em>Tinkercad</em> para validar la posición de los sensores.
      </p>

      <h3>Objetivo del Prototipo</h3>
      <p>
        Probar la <strong>comodidad, tamaño, interacción física</strong> y la
        viabilidad de integrar sensores dentro del dispositivo.
      </p>

      <h3>Iteraciones del Prototipo</h3>
      <p>
        La retroalimentación inicial permitió ajustar dimensiones, reducir el
        tamaño del sensor y analizar puntos de contacto más ergonómicos. Se
        proyecta una versión más compacta para la siguiente etapa.
      </p>

      <h3>Galería de Prototipos</h3>
      <div style={{ margin: '40px 0' }}>
        <CircularGallery images={prototypeImages} />
      </div>

      <div className="week-divider" />

      {/* ----------------------- VALIDACIÓN ----------------------- */}
      <h2>3. Proceso de Validación con el Usuario</h2>

      <h3>Público Objetivo</h3>
      <p>
        La validación se realizó con{" "}
        <strong>cuatro estudiantes de Diseño y Desarrollo de Software</strong>
        , quienes representan perfectamente el perfil de usuario: personas que
        permanecen muchas horas frente al computador.
      </p>

      <h3>Métodos de Validación</h3>
      <p>
        Se utilizaron <strong>entrevistas semiestructuradas</strong>, donde se
        evaluaron comodidad, forma de uso, tamaño y percepción del dispositivo.
      </p>

      <h3>Video de Validación</h3>
      <video
        controls
        style={{
          width: "100%",
          marginTop: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <source
          src="/Innovacion-PostureVibes/media/Entrevista_PostureVibes.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta el video.
      </video>

      {/* ----------------------- MALLA Y LIKERT ----------------------- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          marginTop: "40px",
        }}
      >
        <div className="week-card" style={{ margin: 0 }}>
          <h3 style={{ marginTop: 0 }}>Malla Receptora de Información</h3>
          <ul>
            <li><strong>Observaciones:</strong> Idea útil para el día a día.</li>
            <li><strong>Críticas:</strong> El tamaño debe reducirse.</li>
            <li><strong>Preguntas:</strong> ¿El aviso será vibración o sonido?</li>
            <li><strong>Nuevas ideas:</strong> Posible conexión a una app móvil.</li>
          </ul>
        </div>

        <div className="week-card" style={{ margin: 0 }}>
          <h3 style={{ marginTop: 0 }}>Valoración Promedio (Likert 1–5)</h3>
          <ul>
            <li>Eficacia: 4</li>
            <li>Eficiencia: 4</li>
            <li>Utilidad: 4</li>
            <li>Satisfacción: 4</li>
          </ul>
        </div>
      </div>

      <div className="week-divider" />

      {/* ----------------------- EVALUACIÓN ----------------------- */}
      <h2>4. Evaluación de la Propuesta</h2>

      <h3>Análisis Cualitativo</h3>
      <p>
        La percepción general fue positiva: los usuarios consideraron{" "}
        <strong>Posture Vide</strong> como funcional, accesible y cómodo.
        Sugirieron miniaturizar los componentes y mejorar el sistema de aviso
        para hacerlo más intuitivo.
      </p>

      <h3>Reflexión sobre la Validación</h3>
      <p>
        La validación permitió detectar la necesidad de optimizar el diseño
        físico, manteniendo la funcionalidad. Esto refuerza la importancia del
        enfoque iterativo en el diseño centrado en el usuario.
      </p>

      <div className="week-divider" />

      {/* ----------------------- CONCLUSIONES ----------------------- */}
      <h2>5. Conclusiones y Recomendaciones</h2>

      <h3>Conclusión General</h3>
      <p>
        El prototipado y validación evidenciaron que la idea es sólida,
        funcional y con potencial real. Las iteraciones permitieron aprender y
        mejorar antes de avanzar a un producto final.
      </p>

      <h3>Recomendaciones</h3>
      <ul>
        <li>Reducir tamaño de sensores.</li>
        <li>Optimizar forma de alerta: vibración o luz.</li>
        <li>Usar materiales más ergonómicos.</li>
        <li>Explorar conexión con una app móvil.</li>
      </ul>

      <div className="week-card" style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}>
        <h3 style={{ marginTop: 0, color: '#15803d' }}>Importancia de la Iteración</h3>
        <p style={{ marginBottom: 0 }}>
          Iterar permite alinear el diseño a las necesidades reales del usuario,
          detectar problemas antes de la fabricación final y mejorar la
          experiencia de manera progresiva.
        </p>
      </div>
    </WeekLayout>
  );
}
