import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Car, Map, Activity, ShieldCheck, ArrowUpRight } from 'lucide-react';
import BorderParticles from './BorderParticles';
import './Portfolio.css';

const projects = [
  {
    id: 'educom',
    icon: <GraduationCap size={48} />,
    title: 'EduCom Web',
    description: 'Plataforma de comunicación entre docentes, directivos y apoderados. Centraliza mensajes, avisos y reportes escolares en una interfaz unificada de alto rendimiento.',
    sizeClass: 'bento-large',
    gradient: 'linear-gradient(135deg, #00D4FF 0%, #0055FF 100%)',
    tags: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'parkiot',
    icon: <Car size={48} />,
    title: 'ParkIoT',
    description: 'Sistema de control de acceso vehicular con tarjetas RFID y microcontroladores ESP32. Registra y gestiona el ingreso de camiones en tiempo real conectando hardware con la nube.',
    sizeClass: 'bento-tall',
    gradient: 'linear-gradient(135deg, #00FF88 0%, #008855 100%)',
    tags: ['ESP32', 'IoT', 'RFID', 'C++']
  },
  {
    id: 'turiarica',
    icon: <Map size={48} />,
    title: 'TuriArica',
    description: 'App de mapa turístico de la Región de Arica, diseñada con altos estándares de accesibilidad para personas con baja visión.',
    sizeClass: 'bento-standard',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
    tags: ['Mobile App', 'UI/UX Accesible']
  },
  {
    id: 'biobalance',
    icon: <Activity size={48} />,
    title: 'BioBalance',
    description: 'Control nutricional integrado con biosensores (glucosa/cortisol). Escaneo de alimentos por cámara evaluado por IA.',
    sizeClass: 'bento-standard',
    gradient: 'linear-gradient(135deg, #8A2BE2 0%, #4B0082 100%)',
    tags: ['IA', 'Visión Computacional', 'Salud']
  },
  {
    id: 'petguard',
    icon: <ShieldCheck size={48} />,
    title: 'PetGuard',
    description: 'Sistema de monitoreo de mascotas mediante un collar IoT propietario. Mide pulsaciones y ubicación GPS en tiempo real, garantizando la seguridad de tu animal a través de una aplicación móvil integral.',
    sizeClass: 'bento-full',
    gradient: 'linear-gradient(135deg, #FF3366 0%, #B30033 100%)',
    tags: ['Hardware Propio', 'GPS Tracking', 'Mobile']
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="proyectos" className="portfolio">
      <div className="portfolio-container">
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg">
            Nuestros{' '}
            <span className="text-accent" style={{ position: 'relative', display: 'inline-block' }}>
              Proyectos
              <BorderParticles color="#00D4FF" />
            </span>
          </h2>
          <p className="subtitle mx-auto text-center" style={{ marginBottom: '4rem' }}>
            Un vistazo a las soluciones que hemos desarrollado, combinando software moderno, hardware IoT e Inteligencia Artificial en productos reales.
          </p>
        </motion.div>

        <div className="portfolio-bento-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`bento-card ${project.sizeClass}`}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              {/* Abstract Glowing Background */}
              <div className="bento-bg" style={{ background: project.gradient }}></div>
              
              {/* Giant Watermark Icon */}
              <div className="bento-icon-bg">
                {React.cloneElement(project.icon as React.ReactElement, { size: 200 })}
              </div>

              <div className="bento-content">
                <div className="bento-header">
                  <div className="bento-icon-small">
                    {React.cloneElement(project.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <div className="bento-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bento-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <h3>{project.title}</h3>
                <p className="text-muted bento-description">{project.description}</p>
                
                <div className="bento-action">
                  Explorar Caso de Estudio <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
