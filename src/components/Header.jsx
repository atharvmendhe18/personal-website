import './Header.css'

function Header({ onNavigateHome }) {
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
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>Atharv Mendhe</h2>
        </div>
        <nav className="nav">
          <ul>
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('photos')}>Gallery</button></li>
            {/* <li><button onClick={() => scrollToSection('achievements')}>Achievements</button></li> */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
