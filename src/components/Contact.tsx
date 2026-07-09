import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Send } from 'lucide-react';
import RadioactiveButton from './RadioactiveButton';
import BorderParticles from './BorderParticles';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="contact">
      
      {/* Background glow effects */}
      <div className="contact-glow contact-glow-1"></div>
      <div className="contact-glow contact-glow-2"></div>

      <div className="container">
        <div className="contact-wrapper glass-panel">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg text-left">
              ¿Tienes un proyecto en{' '}
              <span className="text-accent" style={{ position: 'relative', display: 'inline-block' }}>
                mente?
                <BorderParticles color="#00D4FF" />
              </span>
            </h2>
            <p className="subtitle">
              Somos ingenieros apasionados por la tecnología, listos para asumir nuevos desafíos y transformar tus ideas en soluciones reales de alto impacto. Hablemos.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="radar-pin-container">
                  <MapPin className="text-accent relative z-10" size={24} />
                  <div className="radar-pulse"></div>
                  <div className="radar-pulse radar-pulse-delay"></div>
                </div>
                <span className="contact-text">Arica, Chile</span>
              </div>
              <div className="contact-item">
                <div className="icon-glass-container">
                  <Mail className="text-accent" size={24} />
                </div>
                <a href="mailto:j2nsoftwarecontact@gmail.com" className="contact-text contact-link">j2nsoftwarecontact@gmail.com</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form glass-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" className="glass-input" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="glass-input" placeholder="tu@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" rows={4} className="glass-input" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>
              
              <div className="submit-container">
                <RadioactiveButton href="#" className="w-full justify-center">
                  Enviar mensaje
                  <Send size={18} />
                </RadioactiveButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
