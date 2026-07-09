import React from 'react';
import { motion } from 'framer-motion';
import BorderParticles from './BorderParticles';
import './TechStack.css';

const technologies = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: '#339933' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', color: '#3776AB' },
  { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg', color: '#00979D' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', color: '#00599C' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', color: '#3178C6' },
  { name: 'AI / ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00' }
];

// Duplicamos el array para el efecto de carrusel infinito sin cortes
const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

const TechItemCard: React.FC<{ tech: any }> = ({ tech }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="tech-item-marquee"
      style={{ '--tech-color': tech.color } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BorderParticles color={tech.color} active={isHovered} />
      <img src={tech.icon} alt={tech.name} className="tech-icon-marquee" />
      <span className="tech-name-marquee">{tech.name}</span>
    </div>
  );
};

const TechStack: React.FC = () => {
  return (
    <section className="tech-stack">
      <div className="container">
        <motion.div 
          className="tech-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg">
            Nuestro{' '}
            <span className="text-accent" style={{ position: 'relative', display: 'inline-block' }}>
              Stack Tecnológico
              <BorderParticles color="#00D4FF" />
            </span>
          </h2>
          <p className="subtitle mx-auto text-center" style={{ marginBottom: '4rem' }}>
            Utilizamos las mejores herramientas de la industria para garantizar rendimiento, escalabilidad y seguridad en cada proyecto.
          </p>
        </motion.div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-fade-left"></div>
        <div className="marquee-fade-right"></div>
        
        <div className="marquee-content">
          {duplicatedTechnologies.map((tech, index) => (
            <TechItemCard key={index} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
