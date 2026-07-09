import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code2 } from 'lucide-react';
import BorderParticles from './BorderParticles';
import './About.css';

const tagColors: Record<string, string> = {
  'FullStack': '#FF3366',          // Rojo neón
  'Experto Frontend': '#00D4FF',   // Cian
  'Experto Backend': '#8A2BE2',    // Morado
  'Ingeniero Informático': '#00FF88', // Verde neón
  'Tester QA': '#FFD700'           // Amarillo/Dorado
};

const teamMembers = [
  {
    name: 'Nicolás Ponce',
    mainTitle: 'Socio Fundador y Director',
    tags: ['FullStack', 'Experto Frontend', 'Ingeniero Informático'],
    projectsTitle: 'Líder de Proyectos',
    projects: ['TuriArica', 'BioBalance', 'PetGuard'],
    image: 'https://res.cloudinary.com/dwwdrtn5i/image/upload/q_auto/f_auto/v1780272057/Nicolas_xrvzjo.jpg',
    reversed: false,
    accent: '#00D4FF',
    backgroundVideo: 'https://res.cloudinary.com/dwwdrtn5i/video/upload/q_auto/f_auto/v1780269622/ProgramandoNico_bsrafe.mp4'
  },
  {
    name: 'Jorell Inostroza',
    mainTitle: 'Socio Fundador y Director',
    tags: ['FullStack', 'Experto Backend', 'Ingeniero Informático'],
    projectsTitle: 'Líder de Proyectos',
    projects: ['EduComWeb', 'ParkIoT'],
    image: 'https://res.cloudinary.com/dwwdrtn5i/image/upload/q_auto/f_auto/v1780272056/Jorell_kwtd0v.jpg',
    reversed: true,
    accent: '#8A2BE2',
    backgroundVideo: 'https://res.cloudinary.com/dwwdrtn5i/video/upload/q_auto/f_auto/v1780269622/ProgramandoJorell_pvmevd.mp4'
  },
  {
    name: 'Juan David Churata',
    mainTitle: 'Colaborador Clave',
    tags: ['Ingeniero Informático', 'Tester QA'],
    projectsTitle: 'Colaborador en Proyectos',
    projects: ['TuriArica', 'BioBalance', 'EduComWeb', 'ParkIoT', 'PetGuard'],
    image: 'https://res.cloudinary.com/dwwdrtn5i/image/upload/q_auto/f_auto/v1780272056/juan_mqvged.jpg',
    reversed: false,
    accent: '#00FF88',
    backgroundVideo: 'https://res.cloudinary.com/dwwdrtn5i/video/upload/q_auto/f_auto/v1780269621/ProgramandoJuan_ckcued.mp4'
  }
];

const About: React.FC = () => {
  return (
    <section id="nosotros" className="about-interactive">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="heading-lg">
            El Equipo{' '}
            <span className="text-accent" style={{ position: 'relative', display: 'inline-block' }}>
              J2N
              <BorderParticles color="#00D4FF" />
            </span>
          </h2>
          <p className="subtitle mx-auto text-center">
            Conoce a los creadores detrás de nuestras soluciones. Un equipo de ingenieros dedicados a la excelencia técnica y la innovación constante.
          </p>
        </motion.div>

        <div className="team-showcase">
          {teamMembers.map((member, index) => (
            <div key={index} className={`member-row ${member.reversed ? 'reversed' : ''} ${member.backgroundVideo ? 'has-bg-video' : ''}`}>

              {member.backgroundVideo && (
                <div className="member-bg-wrapper">
                  <video src={member.backgroundVideo} autoPlay loop muted playsInline className="member-video" />
                  <div className="member-video-overlay"></div>
                </div>
              )}

              <motion.div
                className="member-visual"
                initial={{ opacity: 0, x: member.reversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="visual-glow" style={{ background: `radial-gradient(circle, ${member.accent}40 0%, transparent 70%)` }}></div>
                <div className="image-container" style={{ borderColor: `${member.accent}50` }}>
                  <BorderParticles color={member.accent} />
                  <img src={member.image} alt={member.name} className="member-image-large" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + member.name.replace(' ', '+') + '&background=0A0A0F&color=fff' }} />
                </div>
              </motion.div>

              <motion.div
                className="member-details"
                initial={{ opacity: 0, x: member.reversed ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="member-name">{member.name}</h3>
                <div className="main-title" style={{ color: member.accent }}>
                  <Briefcase size={20} />
                  <span>{member.mainTitle}</span>
                </div>

                <div className="member-tags">
                  {member.tags.map((tag, i) => {
                    const tagColor = tagColors[tag] || member.accent;
                    return (
                      <span
                        key={i}
                        className="tag-badge"
                        style={{
                          backgroundColor: `${tagColor}15`,
                          borderColor: `${tagColor}30`,
                          color: tagColor
                        }}
                      >
                        <Code2 size={14} />
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <div className="member-projects-section">
                  <h4 className="projects-heading">
                    <Award size={18} style={{ color: member.accent }} />
                    {member.projectsTitle}
                  </h4>
                  <div className="projects-list">
                    {member.projects.map((project, i) => (
                      <span
                        key={i}
                        className="project-pill"
                        style={{ borderLeftColor: member.accent }}
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
