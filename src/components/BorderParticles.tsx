import React, { useState, useEffect, useRef } from 'react';
import './BorderParticles.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  tx: number;
  ty: number;
}

interface BorderParticlesProps {
  color: string;
  active?: boolean;
}

const BorderParticles: React.FC<BorderParticlesProps> = ({ color, active = true }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdCounter = useRef(0);

  useEffect(() => {
    if (!active) return;
    
    // Generate a gentle flow of particles
    const interval = setInterval(() => {
      // Pick a random edge: 0=top, 1=right, 2=bottom, 3=left
      const edge = Math.floor(Math.random() * 4);
      let x = 0;
      let y = 0;
      let tx = 0;
      let ty = 0;
      
      const pos = Math.random() * 100; // Position along the edge
      const spread = 80; // Distance particles fly outwards
      
      switch(edge) {
        case 0: // top
          x = pos; y = 0;
          tx = (Math.random() - 0.5) * spread;
          ty = -Math.random() * spread;
          break;
        case 1: // right
          x = 100; y = pos;
          tx = Math.random() * spread;
          ty = (Math.random() - 0.5) * spread;
          break;
        case 2: // bottom
          x = pos; y = 100;
          tx = (Math.random() - 0.5) * spread;
          ty = Math.random() * spread;
          break;
        case 3: // left
          x = 0; y = pos;
          tx = -Math.random() * spread;
          ty = (Math.random() - 0.5) * spread;
          break;
      }

      const newParticle: Particle = {
        id: particleIdCounter.current++,
        x, y,
        size: Math.random() * 5 + 2, // 2px to 7px
        duration: Math.random() * 1.5 + 1.0, // 1.0s to 2.5s
        tx, ty
      };

      setParticles(current => [...current, newParticle]);

      setTimeout(() => {
        setParticles(current => current.filter(p => p.id !== newParticle.id));
      }, newParticle.duration * 1000);

    }, 250); // 1 particle every 250ms per person

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="border-particles-container">
      {particles.map(p => (
        <div 
          key={p.id}
          className="border-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: color,
            boxShadow: `0 0 12px ${color}, 0 0 4px #fff`,
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            animationDuration: `${p.duration}s`
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default BorderParticles;
