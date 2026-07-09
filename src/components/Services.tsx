import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Smartphone, Lightbulb } from 'lucide-react';
import BorderParticles from './BorderParticles';
import './Services.css';

const services = [
  {
    icon: <Monitor size={36} />,
    title: 'Desarrollo Web',
    description: 'Plataformas web a medida, escalables y con diseño de vanguardia. Desde landing pages hasta sistemas de gestión complejos.',
    color: '#00D4FF' // Cian
  },
  {
    icon: <Cpu size={36} />,
    title: 'Sistemas IoT',
    description: 'Integración de hardware y software. Automatización, monitoreo con microcontroladores (ESP32/Arduino) y control en tiempo real.',
    color: '#00FF88' // Verde Neón
  },
  {
    icon: <Smartphone size={36} />,
    title: 'Apps Móviles con IA',
    description: 'Desarrollo de aplicaciones móviles modernas integradas con modelos de Inteligencia Artificial para ofrecer experiencias únicas.',
    color: '#8A2BE2' // Morado
  },
  {
    icon: <Lightbulb size={36} />,
    title: 'Soluciones a Medida',
    description: 'Analizamos tus necesidades para construir la solución tecnológica exacta que tu negocio necesita para crecer y destacar.',
    color: '#FFD700' // Dorado
  }
];

const ServiceCard: React.FC<{ service: any, index: number }> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className="service-card spotlight-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
        '--service-color': service.color
      } as React.CSSProperties}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Spotlight glow effect */}
      <div 
        className="spotlight-glow" 
        style={{ opacity: isHovered ? 1 : 0 }}
      />
      
      {/* Inner card content (keeps background dark but slightly transparent to let border shine) */}
      <div className="service-card-inner">
        <motion.div 
          className="service-icon-wrapper"
          style={{ color: service.color }}
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {service.icon}
          <div className="icon-glow" style={{ backgroundColor: service.color }}></div>
        </motion.div>
        
        <h3>{service.title}</h3>
        <p className="text-muted">{service.description}</p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="servicios" className="services">
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg">
            Nuestros{' '}
            <span className="text-accent" style={{ position: 'relative', display: 'inline-block' }}>
              Servicios
              <BorderParticles color="#00D4FF" />
            </span>
          </h2>
          <p className="subtitle mx-auto text-center" style={{ marginBottom: '4rem' }}>
            Transformamos tus ideas en soluciones de alto impacto utilizando las últimas tecnologías del mercado.
          </p>
        </motion.div>

        <div className="services-grid-dynamic">
          {services.map((service, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.5 // staggered floating
              }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
