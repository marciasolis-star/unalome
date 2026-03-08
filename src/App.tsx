import React from "react";
import { motion } from "motion/react";
import { CheckCircle, Calendar, MessageCircle, ArrowRight, Sparkles, X, SparkleIcon } from "lucide-react";
import Modal from "./components/modal";
import { section } from "motion/react-m";

export default function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const onClose = () => setIsModalOpen(false);
  
  return (
    <div className="app">
      {/* Navigation / Header */}
      <header className="header">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              {/* Simple Unalome SVG Logo */}
              <img src="logo-trans.png" alt="logo" />
            </div>
            <h1 className="h1-header">MARCIA SOLÍS</h1>
          </div>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
            <a href="#about" className="hover:opacity-60 transition-opacity">Sobre mí</a>
            <a href="#motivation" className="hover:opacity-60 transition-opacity">Motivación</a>
            <a href="#programs" className="hover:opacity-60 transition-opacity">Programas</a>
            <a href="https://www.instagram.com/metodounalome/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <img
                src="instagram.png" // O .svg
                alt="Logotipo de instagram iconos creados por Freepik - Flaticon"
                width={24}
                height={24}
              />
            </a>
          </nav>
          <a
            href="#programs"
            className="bg-white text-unalome-green px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg"
          >
            Agendar
          </a>
        </div>
      </header>

      <main className="pt-20">
        <section className="section-logo">
          <div className="mi-contenedor-grid">
            <div>
              <p className="span">
                Tu historia no te determina,<br /> lo que haces con ella sí.
              </p>
            </div>
            {/* Symbol Section */}
            <div>
              <img src="/logo-trans.png" className="glass-button" alt="logo" />
            </div>
          </div>

        </section>

        {/* Hero Section */}

        <section className="hero-section">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Método <br />
                <span className="italic">Unalome</span>
              </h1>
              <p className="hero-description-xl">
                Coaching basado en psicología organizacional/clínica y neurociencia aplicada.
              </p>
              <p className="hero-description-base">
                Mi trabajo combina psicología organizacional, coaching y principios de Neurociencia para comprender cómo se forman nuestros patrones mentales y cómo podemos desaprender lo que limita nuestro desarrollo y construir nuevas formas de pensar y actuar.
              </p>
              <div className="hero-actions">
                <a href="#programs" className="btn-primary">
                  Ver Programas <ArrowRight size={20} />
                </a>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Sparkles size={16} />
                  <span>Para mujeres profesionales y estudiantes</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image-wrapper"
            >
              <div className="image-card">
                <img
                  src="/tatoo.jpeg"
                  alt="Autora"
                  className="img"
                  referrerPolicy="no-referrer"
                /></div>
                </motion.div>
              </div>

                
        
         {isModalOpen && (
  <div className="brief-bio-container bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-2xl border border-white/30">

    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <p className="serif text-xl font-medium mb-2">
        "Psicóloga Clínica/laboral, Coach ejecutiva certificada internacionalmente por la
        Pontificia Universidad Católica de Chile, con más de 16 años de experiencia en
        intervenciones con personas y empresas específicamente con mujeres profesionales,
        trabajadoras que se enfrentan a desafíos culturales. Especializada en transiciones
        de vida, claridad emocional y dirección personal."
      </p>

      <p className="text-xs uppercase tracking-widest opacity-60">
        Neurociencia Aplicada
      </p>

    </Modal>

  </div>
)}
<div className="flex items-end justify-end">
<button
  onClick={() => setIsModalOpen(!isModalOpen)}
  className="brief-bio-button "
>
  {isModalOpen ? "Cerrar Bio" : "Brief Bio"}
</button>
</div>

            
        </section>
                
       

        {/* Motivation Section */}
        <section id="motivation" className="#motivation">
          <div className="motivation-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="motivation-header"
            >
              <h2>Comprendo tu lucha porque yo también la viví</h2>

              <div className="divider-line"></div>
            </motion.div>

            <div className="motivation-text-content">
              <p>
                Me motiva profundamente colaborar con mujeres porque mi propia experiencia de vida muchas veces me hizo sentir sola, como si nunca fuera a encontrar coherencia, estabilidad, armonía o paz mental.
              </p>
              <p>
                Te escucho con empatía y gracias a mi experiencia tanto profesional como de mis propios procesos vitales y los estudios que me respaldan: <br /> <span className="flex align-center justify-center">Analizo y descubro las creencias que están limitando el logro de lo que deseas a nivel personal, laboral, emocional y espiritual utilizando herramientas de comportamiento humano y neurociencias, a lo que me gusta llamar “integración de enfoques”. </span>
              </p>
              <p>
                Te propongo un plan de acción en armonía con tu esencia para lograr tu autosatisfacción y autorrealización… el resultado: lograr tu propósito con paz mental y armonía en tu entorno bajo una metodología estructurada a la cual llamo: Método Unalome.
              </p>

              <div className="steps-grid">
                <div className="step-card">
                  <p className="step-card-title">Cuestionar</p>
                  <p className="step-card-subtitle">lo que creíamos definitivo</p>
                </div>
                <div className="step-card">
                  <p className="step-card-title">Desaprender</p>
                  <p className="step-card-subtitle">lo que nos limita</p>
                </div>
                <div className="step-card">
                  <p className="step-card-title">Construir</p>
                  <p className="step-card-subtitle">nuevas formas de pensar</p>
                </div>
              </div>
              <p>
                Y aunque el apoyo de otros puede ser fundamental, la primera ayuda siempre comienza dentro de una misma.
              </p>
              <p className="final-quote">
                Mi trabajo es acompañarte en ese proceso.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="program-container">
          <div className="program-container-title">
            <h2 className="program-title">Programas</h2>
            <p className="program-subtitle">Empieza tu camino hoy</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto rounded-32px border-white/20">
            {/* Free Session */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] p-10 text-unalome-green shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="icon-container-green">
                  <MessageCircle size={32} />
                </div>
                <h3>Sesión de Claridad</h3>
                <p className="mb-6">
                  Un espacio gratuito para conocernos, entender tu situación actual y ver cómo el Método Unalome puede ayudarte.
                </p>
                <ul>
                  <li>
                    <CheckCircle size={20} className="text-unalome-green" />
                    <span>30 minutos online</span>
                  </li>
                  <li >
                    <CheckCircle size={20} className="text-unalome-green" />
                    <span>Sin compromiso</span>
                  </li>
                  <li >
                    <CheckCircle size={20} className="text-unalome-green" />
                    <span>Claridad inmediata</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="text-4xl font-bold mb-6">Gratis</div>
                <a href="mailto://marciasolis@metodounalome.com" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-unalome-green text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-opacity">
                    Agendar Sesión
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Basic Package */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[32px] p-10 flex flex-col justify-between"
            >
              <div>
                <div className="icon-container">
                  <Calendar size={32} />
                </div>
                <h3 className="dark">Paquete Básico</h3>
                <p className="dark mb-6">
                  Un proceso profundo de transformación para reconocer patrones, recuperar claridad y abrir nuevas posibilidades.
                </p>
                <ul>
                  <li>
                    <CheckCircle size={20} className="text-white/60" />
                    <span>8 sesiones individuales. 45-60 minutos por sesión</span>
                  </li>
                  <li>
                    <CheckCircle size={20} className="text-white/60" />
                    <span>Acompañamiento personalizado. Incluye seguimiento breve entre sesiones por mensaje</span>
                  </li>
                  <li>
                    <CheckCircle size={20} className="text-white/60" />
                    <span>Al finalizar el proceso tendrás conciencia de como gestionar las herramientas emocionales para lograr los objetivos que te</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="text-4xl font-bold mb-6">USD 640</div>
               <a href="https://www.paypal.com/cgi-bin/webscr...">
               <button className="w-full bg-white text-unalome-green py-4 rounded-2xl font-bold hover:bg-opacity-90 transition-all">
                  Comenzar Proceso <span className="text-gray-200">
                    (Proximamente)
                  </span>
                </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta-section">
          <div className="cta-card">
            <h2 className="cta-title">
              A veces lo único que necesitamos es una mano que nos ayude a ver el camino desde otro lugar.
            </h2>
            <p className="cta-subtitle">Yo estoy aquí para ofrecerte esa mano.</p>
            <a href="#programs" className="cta-button">
              Empecemos juntas
            </a>
          </div>
        </section>
      </main>
      <section className="disclaimer-section">

        <div className="disclaimer-card">
          <p className="disclaimer-text">
          <strong>
            **Este método no reemplaza la atención psicológica profesional. 
            </strong>  <br />
            Es un proceso de coaching basado en principios de psicología y neurociencia, pero no es terapia clínica.</p>
        
            </div>
      </section>
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-logo">
            <span>Método Unalome</span>
          </div>
          <p className="text-sm text-white/60">
            {new Date().getFullYear()} Método Unalome. Todos los derechos reservados.
          </p>

          <div className="social-links">
            <a href="https://www.instagram.com/metodounalome/" className="social-link"> <img
              src="instagram.png" // O .svg
              alt="Logotipo de instagram iconos creados por Freepik - Flaticon"
              width={24}
              height={24}
            />
            </a>
            {/* <a href="#" className="text-white/50 hover:text-white transition-colors">LinkedIn</a> */}
          </div>
        </div>
      </footer>
    </div>
    
    
  );
}