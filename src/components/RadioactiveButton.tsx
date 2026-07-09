import React, { useState, useEffect, useRef } from 'react';
import './RadioactiveButton.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  tx: number;
  ty: number;
}

interface RadioactiveButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const RadioactiveButton: React.FC<RadioactiveButtonProps> = ({ href, children, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdCounter = useRef(0);

  useEffect(() => {
    // Determine spawn rate based on hover state
    const spawnRate = isHovered ? 50 : 300; 

    const interval = setInterval(() => {
      const newParticle: Particle = {
        id: particleIdCounter.current++,
        x: 50 + (Math.random() * 40 - 20), // spawn near center X
        y: 50 + (Math.random() * 40 - 20), // spawn near center Y
        size: Math.random() * 4 + 2, // size between 2px and 6px
        duration: Math.random() * 1 + 0.5, // duration between 0.5s and 1.5s
        tx: (Math.random() - 0.5) * 100, // translate X distance
        ty: (Math.random() - 0.5) * 100 - 50, // translate Y distance (bias upwards)
      };

      setParticles(current => [...current, newParticle]);

      // Remove particle after its animation finishes
      setTimeout(() => {
        setParticles(current => current.filter(p => p.id !== newParticle.id));
      }, newParticle.duration * 1000);

    }, spawnRate);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="radioactive-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={href} className={`btn btn-primary radioactive-btn ${isHovered ? 'active' : ''} ${className}`}>
        {children}
      </a>
      
      <div className="particles-container">
        {particles.map(p => (
          <div 
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              '--tx': `${p.tx}px`,
              '--ty': `${p.ty}px`,
              animationDuration: `${p.duration}s`
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioactiveButton;
