import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import RadioactiveButton from './RadioactiveButton';
import BorderParticles from './BorderParticles';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-glow"></div>
      <div className="container hero-container">
        <div className="hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Innovación desde Arica, Chile
            </div>
            
            <h1 className="heading-xl">
              Soluciones tecnológicas que <br />
              <span className="text-gradient" style={{ position: 'relative', display: 'inline-block' }}>
                transforman ideas en realidad
                <BorderParticles color="#00D4FF" />
              </span>
            </h1>
            
            <p className="subtitle hero-subtitle">
              Somos un equipo joven y capaz construyendo soluciones tecnológicas del mundo real. 
              Especialistas en aplicaciones web, sistemas IoT, herramientas integradas con IA y plataformas móviles.
            </p>
            
            <div className="hero-actions">
              <RadioactiveButton href="#proyectos">
                Conoce nuestros proyectos
                <ArrowRight size={20} />
              </RadioactiveButton>
              <RadioactiveButton href="#contacto">
                Trabajemos juntos
                <Code size={20} />
              </RadioactiveButton>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-hologram-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <video 
              src="https://res.cloudinary.com/dwwdrtn5i/video/upload/q_auto/f_auto/v1780269991/3DLogoSpin_transparente_stls1x.webm" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="hologram-video"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
