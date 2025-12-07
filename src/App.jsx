import { useState, useEffect } from 'react'
import './App.css'
import { motion } from 'framer-motion'
import { FaPlay, FaTwitter, FaYoutube, FaEnvelope, FaVideo, FaMusic, FaCamera, FaLaptopCode, FaMagic, FaFilm, FaPaintBrush } from 'react-icons/fa'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">YOUR NAME</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg-wrapper">
          <img src="/img/hero-bg.png" alt="Background" className="hero-bg" />
          <div className="hero-overlay"></div>
        </div>

        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1>
            <span>VIDEO CREATOR</span>
            CAPTURING MOMENTS
          </h1>
          <p>Cinematic storytelling through lens and motion. I turn vision into reality.</p>
          <a href="#works" className="btn-primary">
            <FaPlay /> View My Work
          </a>
        </motion.div>
      </header>

      <div className="container">
        {/* About Section */}
        <section id="about">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="about-container">
            <motion.div
              className="about-img-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/img/profile.png" alt="Profile" className="about-img" />
            </motion.div>

            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3>Visual Storyteller based in Tokyo.</h3>
              <p>
                Hello! I am a professional Video Creator specializing in cinematic visuals and engaging storytelling.
                With over 5 years of experience in the industry, I have worked on commercial VPs, Music Videos, and high-retention YouTube content.
              </p>
              <p>
                My mission is not just to edit videos, but to create an emotional connection with the audience.
                I combine technical expertise in Premiere Pro and After Effects with a keen artistic eye for color and composition.
              </p>
              <div className="stats">
                {/* Optional stats or additional info could go here */}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Selected Works
          </motion.h2>

          <motion.div
            className="works-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Project 1 */}
            <motion.div className="work-card" variants={fadeInUp}>
              <div className="work-thumb-wrapper">
                <img src="/img/thumb-vp.png" alt="Corporate VP" className="work-thumb" />
                <div className="play-icon"><FaPlay /></div>
              </div>
              <div className="work-info">
                <span className="work-category">Corporate / Branding</span>
                <h3>Future Tech - Vision 2025</h3>
                <p>Company branding film featuring motion graphics and interview cuts.</p>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div className="work-card" variants={fadeInUp}>
              <div className="work-thumb-wrapper">
                <img src="/img/thumb-mv.png" alt="Music Video" className="work-thumb" />
                <div className="play-icon"><FaPlay /></div>
              </div>
              <div className="work-info">
                <span className="work-category">Music Video</span>
                <h3>Neon Nights - "Cyberpunk"</h3>
                <p>Official Music Video. Directed, Filmed, and Edited.</p>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div className="work-card" variants={fadeInUp}>
              <div className="work-thumb-wrapper">
                <img src="/img/thumb-yt.png" alt="YouTube" className="work-thumb" />
                <div className="play-icon"><FaPlay /></div>
              </div>
              <div className="work-info">
                <span className="work-category">YouTube Content</span>
                <h3>Gadget Review Channel</h3>
                <p>High-retention tech review videos. 1M+ views achieved.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Skills & Tools
          </motion.h2>

          <motion.div
            className="skills-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="skill-tag"><FaFilm className="skill-icon" /> Premiere Pro</span>
            <span className="skill-tag"><FaMagic className="skill-icon" /> After Effects</span>
            <span className="skill-tag"><FaPaintBrush className="skill-icon" /> DaVinci Resolve</span>
            <span className="skill-tag"><FaCamera className="skill-icon" /> Cinematography</span>
            <span className="skill-tag"><FaLaptopCode className="skill-icon" /> Photoshop</span>
            <span className="skill-tag"><FaVideo className="skill-icon" /> Final Cut Pro</span>
          </motion.div>
        </section>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Let's Create Together</h2>
          <p style={{ color: '#ccc', marginBottom: '2rem' }}>
            Interested in working together? Feel free to reach out for collaborations or inquiries.
          </p>

          <div className="social-links">
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
            <a href="mailto:your@email.com" className="social-icon"><FaEnvelope /></a>
          </div>
        </motion.div>
      </section>

      <footer>
        <p>&copy; 2025 YOUR NAME. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
