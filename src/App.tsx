import React from "react";
import { motion } from "motion/react";
import { CheckCircle, Calendar, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export default function App() {
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
            <h1 className="text-xl font-bold font-serif ">MARCIA SOLÍS</h1>
          </div>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
            <a href="#about" className="hover:opacity-60 transition-opacity">Sobre mí</a>
            <a href="#motivation" className="hover:opacity-60 transition-opacity">Motivación</a>
            <a href="#programs" className="hover:opacity-60 transition-opacity">Programas</a>
            <a href="https://www.instagram.com/metodounalome/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">RRSS</a>
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
        {/* Symbol Section */}
        <section className="bg-gradient-rgba(79,175,159,0.85), rgba(111,195,181,0.85)) center flex items-center justify-center pt-20" 
id="logotipo" color="white">

          <div className="relative rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center">

            <img src="/logo-trans.png" className="w-[300px] h-[300px] relative z-2" />

            
          </div>

        </section>

        {/* Hero Section */}

        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="serif text-6xl md:text-8xl leading-tight mb-6">
                Método <br />
                <span className="italic">Unalome</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-white/90 mb-8 leading-relaxed">
                Coaching basado en psicología organizacional/clínica y neurociencia aplicada.
              </p>
              <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
                Mi trabajo combina psicología organizacional, coaching y principios de Neurociencia para comprender cómo se forman nuestros patrones mentales y cómo podemos desaprender lo que limita nuestro desarrollo y construir nuevas formas de pensar y actuar.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#programs" className="bg-white text-unalome-green px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
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
              className="relative"
            >
              <div className="aspect-4/5 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/10">
                <img 
                  src="/tatoo.jpeg" 
                  alt="Autora" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-unalome-green p-8 rounded-3xl shadow-xl max-w-240px">
                <p className="serif text-xl font-medium mb-2">"El cerebro puede cambiar."</p>
                <p className="text-xs uppercase tracking-widest opacity-60">Neurociencia Aplicada</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Motivation Section */}
        <section id="motivation" className="py-24 bg-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="serif text-4xl md:text-5xl mb-6 italic">Comprendo tu lucha porque yo también la viví</h2>
              <div className="w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
            </motion.div>

            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-white/90">
              <p>
                Me motiva profundamente colaborar con mujeres porque mi propia experiencia de vida muchas veces me hizo sentir sola, como si nunca fuera a encontrar coherencia, estabilidad, armonía o paz mental.
              </p>
              <p>
                Hubo momentos en que me sentí perdida, sin esperanza en el futuro. Despertar en la mañana con angustia, sin saber cómo enfrentar los desafíos del día, me hacía cuestionarme incluso si mi existencia tenía sentido.
              </p>
              <p>
                Con el tiempo comprendí algo importante: el contexto en el que vivimos —social, cultural, económico, político, familiar— muchas veces nos empuja a sostener exigencias que consumen nuestra energía y nos desconectan de nosotras mismas.
              </p>
              <p>
                En ese esfuerzo por responder a todo, terminamos agotadas, sin claridad y con la sensación de estar atrapadas en una vida que no refleja realmente lo que somos o lo que deseamos.
              </p>
              <p className="border-l-4 border-white/20 pl-8 italic py-4">
                Ese desgaste impacta nuestra capacidad de sostenernos emocionalmente, de construir estabilidad económica y de crear relaciones saludables.
              </p>
              <p>
                Muchas veces existen oportunidades y apoyo alrededor nuestro, pero no logramos verlos. No porque no existan, sino porque nuestras creencias —formadas por la historia y el contexto— limitan la forma en que interpretamos la realidad.
              </p>
              <p>
                Eso puede generar un ciclo frustrante y agotador. Un bucle en el que seguimos intentando resolver nuestra vida con herramientas que ya no están funcionando.
              </p>
              <p className="text-2xl serif font-medium text-white pt-8">
                Hoy sabemos también, gracias a la Neurociencia, que esas creencias no viven solo en nuestra mente: también están inscritas en nuestro cerebro y en nuestros patrones de respuesta.
              </p>
              <p className="text-3xl serif italic text-white text-center py-12">
                Pero también sabemos algo esperanzador: el cerebro puede cambiar.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center py-8">
                <div className="p-6 rounded-2xl bg-white/10">
                  <p className="font-medium">Cuestionar</p>
                  <p className="text-sm opacity-70">lo que creíamos definitivo</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10">
                  <p className="font-medium">Desaprender</p>
                  <p className="text-sm opacity-70">lo que nos limita</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10">
                  <p className="font-medium">Construir</p>
                  <p className="text-sm opacity-70">nuevas formas de pensar</p>
                </div>
              </div>
              <p>
                Y aunque el apoyo de otros puede ser fundamental, la primera ayuda siempre comienza dentro de una misma.
              </p>
              <p className="text-2xl serif text-center pt-12">
                Mi trabajo es acompañarte en ese proceso.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="serif text-5xl mb-4">Programas</h2>
            <p className="text-white/60 uppercase tracking-[0.2em] text-sm">Empieza tu camino hoy</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto rounded-[32px] border-white/20">
            {/* Free Session */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] p-10 text-unalome-green shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-unalome-green/10 rounded-2xl flex items-center justify-center mb-6">
                  <MessageCircle size={32} />
                </div>
                <h3 className="serif text-3xl mb-4">Sesión de Claridad</h3>
                <p className="text-lg opacity-80 mb-6">
                  Un espacio gratuito para conocernos, entender tu situación actual y ver cómo el Método Unalome puede ayudarte.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-unalome-green" />
                    <span>30 minutos online</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-unalome-green" />
                    <span>Sin compromiso</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-unalome-green" />
                    <span>Claridad inmediata</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="text-4xl font-bold mb-6">Gratis</div>
               <a href="https://calendar.app.google/KG8dpcZebkkYr4En6" target="_blank" rel="noopener noreferrer">
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
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar size={32} />
                </div>
                <h3 className="serif text-3xl mb-4">Paquete Básico</h3>
                <p className="text-lg text-white/80 mb-6">
                  Un proceso profundo de transformación para reconocer patrones, recuperar claridad y abrir nuevas posibilidades.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-white/60" />
                    <span>8 sesiones individuales</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-white/60" />
                    <span>Acompañamiento personalizado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-white/60" />
                    <span>Material de apoyo</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="text-4xl font-bold mb-6">USD 640</div>
                <button className="w-full bg-white text-unalome-green py-4 rounded-2xl font-bold hover:bg-opacity-90 transition-all">
                  Comenzar Proceso <span className="text-gray-200">
                    (Proximamente)
                    </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center max-w-4xl mx-auto px-6">
          <div className="bg-white/10 rounded-[40px] p-12 md:p-20 border border-white/10">
            <h2 className="serif text-4xl md:text-5xl mb-8 leading-tight">
              A veces lo único que necesitamos es una mano que nos ayude a ver el camino desde otro lugar.
            </h2>
            <p className="text-2xl serif italic mb-12 opacity-80">Yo estoy aquí para ofrecerte esa mano.</p>
            <a href="#programs" className="inline-block bg-white text-unalome-green px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
              Empecemos juntas
            </a>
          </div>
        </section>
      </main>
              <section className="py-24 text-center max-w-4xl mx-auto px-6">

        <div className="bg-white/10 ml-6 my-12 mr-6 rounded-[40px] p-12 md:p-20 border border-white/10">
          <p className="text-sm text-white/50">
          **Este método no reemplaza la atención psicológica profesional. Es un proceso de coaching basado en principios de psicología y neurociencia, pero no es terapia clínica.</p>
        </div>
      </section>
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="serif text-xl font-medium">Método Unalome</span>
          </div>
          <p className="text-sm text-white/50">
             {new Date().getFullYear()} Método Unalome. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-6">
            <a href="https://www.instagram.com/metodounalome/" className="text-white/50 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}