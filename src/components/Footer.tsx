import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="https://res.cloudinary.com/dwwdrtn5i/image/upload/q_auto/f_auto/v1780269889/logoj2n_hd_xbxam8.png" alt="J2N Software" className="footer-logo" />
            <p className="footer-tagline">Transformando ideas en realidad.</p>
          </div>
          
          <div className="footer-team">
            <h4>El Equipo J2N</h4>
            <ul>
              <li>Jorell Inostroza</li>
              <li>Juan David Chuarta</li>
              <li>Nicolás Ponce</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} J2N Software. Todos los derechos reservados. Arica, Chile.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
