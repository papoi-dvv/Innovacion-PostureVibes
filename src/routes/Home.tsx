export default function Home() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#333', marginBottom: '20px' }}>Posture Vibes</h1>
        <h2 style={{ color: '#666', marginBottom: '40px' }}>Corrector de Postura Inteligente</h2>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>PostureVibe: Tu Nueva Forma de Mantener una Postura Perfecta</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            PostureVibe es un dispositivo inteligente diseñado para ayudarte a corregir tu postura de manera natural,
            sin incomodidad y sin depender de fuerza física. Nuestro sistema utiliza vibraciones suaves para alertarte
            cuando te desvías de la postura ideal, entrenando tu cuerpo y tu mente para desarrollar un hábito postural
            saludable. Ideal para programadores, estudiantes y cualquier persona que pasa largas horas sentado.
          </p>
        </div>

        <div style={{ marginTop: '60px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>¿Por qué elegir PostureVibe?</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '20px'
          }}>

            <div style={{ padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <h3>Innovación Tecnológica</h3>
              <p>
                PostureVibe combina sensores avanzados con retroalimentación por vibración para detectar
                desviaciones posturales en tiempo real. A diferencia de los correctores tradicionales,
                nuestro sistema no te fuerza: te entrena.
              </p>
              <p>
                La tecnología trabaja de forma silenciosa y eficiente, adaptándose a tus movimientos sin interrumpir tus actividades.
              </p>
            </div>

            <div style={{ padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <h3>Desarrollo Iterativo</h3>
              <p>
                Nuestro equipo desarrolló PostureVibe durante 12 semanas de investigación, pruebas y prototipado.
                Cada avance fue validado con usuarios reales para garantizar comodidad, precisión y efectividad.
              </p>
              <p>
                Pasamos desde la conceptualización inicial hasta un producto funcional listo para uso cotidiano.
              </p>
            </div>

            <div style={{ padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <h3>Diseño Ergonómico</h3>
              <p>
                Hecho para acompañarte en cualquier actividad: trabajar sentado, caminar, estudiar o incluso hacer ejercicio.
                Su banda elástica permite una sujeción firme sin incomodar, manteniendo la libertad total de movimiento.
              </p>
              <p>
                Su forma resistente y adaptable permite usarlo durante horas sin molestias.
              </p>
            </div>

          </div>
        </div>

        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Un Vistazo al Prototipo</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Este es nuestro modelo preliminar del dispositivo PostureVibe. Desde aquí perfeccionamos su forma,
            materiales y precisión de sensores para garantizar un producto confiable y cómodo.
            Nuestro objetivo es que puedas usarlo en tu rutina diaria sin sentir que lo llevas puesto.
          </p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <img
            src="/Innovacion-PostureVibes/images/models/PreProducto.jpg"
            alt="Posture Vibes Device"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              display: 'block',
              margin: '0 auto'
            }}
          />
        </div>

      </div>
    </div>
  );
}