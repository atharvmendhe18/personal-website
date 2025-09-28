import './Footer.css'

function Footer({ onNavigateHome }) {
  const scrollToSection = (sectionId) => {
    if (onNavigateHome) {
      // If we're on the projects detail page, go back to home first
      onNavigateHome();
      // Then scroll to the section after a brief delay
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Normal scrolling on the home page
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <p>I'm always open to discussing new opportunities and interesting projects.</p>
            <div className="contact-info">
              <p>📧 atharvmendhe18@gmail.com</p>
              {/* <p>📱 +1 (555) 123-4567</p> */}
              <p>📍 Mumbai, India</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/atharv-mendhe-118442237/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/atharvmendhe18" target="_blank" rel="noopener noreferrer">GitHub</a>
              {/* <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a> */}
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <button onClick={() => scrollToSection('home')}>
                Home
              </button>
              <button onClick={() => scrollToSection('projects')}>
                Projects
              </button>
              <button onClick={() => scrollToSection('photos')}>
                Gallery
              </button>
              {/* <button onClick={() => scrollToSection('achievements')}>
                Achievements
              </button> */}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Atharv Mendhe. All rights reserved.</p>
          <p>Built with ❤️ using React & Vite</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
