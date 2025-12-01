export default function About() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <h1>Acerca de Nosotros</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px' }}>
          Somos un equipo apasionado por la tecnología y la innovación orientada al bienestar humano.
          PostureVibe nace como respuesta a un problema que muchos enfrentamos: largas horas frente a
          una computadora que afectan nuestra salud postural. Nuestro objetivo es crear una solución
          inteligente, accesible y cómoda que ayude a corregir hábitos sin imponer incomodidad ni
          limitar el movimiento.
          <br /><br />
          Creemos que la tecnología puede mejorar la vida diaria de las personas de manera simple,
          intuitiva y efectiva. Por eso trabajamos con un enfoque multidisciplinario que combina
          desarrollo, diseño e ingeniería para ofrecer una experiencia completa y funcional.
        </p>

        <h2>Nuestro Equipo</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
          Nuestro equipo está conformado por profesionales con habilidades complementarias que permiten
          llevar este proyecto desde la idea inicial hasta un prototipo funcional. Trabajamos de manera
          colaborativa, siempre buscando mejorar, iterar y hacer que PostureVibe sea un producto útil
          para cualquier persona que quiera cuidar su postura.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          marginTop: '30px'
        }}>

          <div style={{ textAlign: 'center' }}>
            <img
              src="/Innovacion-PostureVibes/images/icons/Abel2.png"
              alt="Abel"
              style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px' }}
            />
            <h4>Abel Quispe</h4>
            <p>Especialista en pruebas y validación del dispositivo.</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src="/Innovacion-PostureVibes/images/icons/Matias.png"
              alt="Matias"
              style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px' }}
            />
            <h4>Matías Cohaila</h4>
            <p>Director de diseño y modelado del producto.</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src="/Innovacion-PostureVibes/images/icons/Paulo.png"
              alt="Paulo"
              style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px' }}
            />
            <h4>Paulo Santos</h4>
            <p>Ingeniero principal de integración electrónica.</p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          marginTop: '30px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/Innovacion-PostureVibes/images/icons/Lira.png"
              alt="Anderson"
              style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px' }}
            />
            <h4>Anderson Ninahuaman</h4>
            <p>Analista de ergonomía y especificaciones físicas.</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src="/Innovacion-PostureVibes/images/icons/Coach.png"
              alt="Coach"
              style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px' }}
            />
            <h4>Coach</h4>
            <p>Coach de PostureVibe.</p>
          </div>
        </div>

        <div style={{ marginTop: '50px', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
          <h3>Nuestra Misión</h3>
          <p style={{ lineHeight: '1.6' }}>
            Desarrollar tecnología accesible y efectiva que ayude a las personas a mejorar su postura
            y bienestar diario. Nos enfocamos en la prevención, el hábito y la comodidad, creando
            soluciones que se adapten a cualquier rutina sin generar incomodidad o dependencia.
          </p>
        </div>

        <div style={{ marginTop: '30px', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
          <h3>Nuestra Visión</h3>
          <p style={{ lineHeight: '1.6' }}>
            Convertirnos en una marca reconocida por combinar salud y tecnología de forma amigable y
            funcional. Buscamos que PostureVibe sea el primer paso hacia un ecosistema de productos
            orientados al bienestar físico, donde la tecnología actúe como guía y no como imposición.
          </p>
        </div>

        <p style={{ marginTop: '40px', fontSize: '1rem', lineHeight: '1.6', textAlign: 'center', opacity: 0.8 }}>
          PostureVibe es más que un proyecto académico: es una propuesta real para mejorar la vida
          de quienes pasan horas frente a la computadora. Somos innovación al servicio del bienestar.
        </p>

      </div>
    </div>

  );
}