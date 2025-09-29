import './Home.css'

function Home({ onNavigateToProjects }) {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Atharv Mendhe</span></h1>
            <h2>Robotics and ML Developer</h2>
            <p>
             I design and develop robotics software that brings machines to life, from autonomous rovers to advanced motion control. This portfolio highlights my journey in building intelligent, reliable, and versatile robotic systems.
            </p>
            <div className="cta-buttons">
              <button 
                className="btn primary"
                onClick={() => onNavigateToProjects()}
              >
                View My Work
              </button>
              <a 
                href="./assets/atharv_mendhe_resume.pdf" 
                download="Atharv_Mendhe_Resume.pdf"
                className="btn secondary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
