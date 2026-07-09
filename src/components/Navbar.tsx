import React, { useState, useEffect } from 'react';
import RadioactiveButton from './RadioactiveButton';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <img src="https://res.cloudinary.com/dwwdrtn5i/image/upload/q_auto/f_auto/v1780269889/logoj2n_hd_xbxam8.png" alt="J2N Software Logo" className="logo-img" />
          <span className="logo-text">J2N Software</span>
        </a>
        
        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <RadioactiveButton href="#contacto" className="btn-sm">Hablemos</RadioactiveButton>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
