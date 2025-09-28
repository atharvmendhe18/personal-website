import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectsPage from './components/ProjectsPage'
import Photos from './components/Photos'
import Achievements from './components/Achievements'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home') // 'home' or 'projects-detail'
  const [selectedProject, setSelectedProject] = useState(null)

  const navigateToProjectsDetail = (project = null) => {
    setSelectedProject(project)
    setCurrentView('projects-detail')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToHome = () => {
    setCurrentView('home')
    setSelectedProject(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (currentView === 'projects-detail') {
    return (
      <div className="App">
        <Header onNavigateHome={navigateToHome} />
        <main>
          <ProjectsPage 
            selectedProject={selectedProject} 
            onNavigateHome={navigateToHome}
          />
        </main>
        <Footer onNavigateHome={navigateToHome} />
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Home onNavigateToProjects={navigateToProjectsDetail} />
        <Projects onNavigateToProjects={navigateToProjectsDetail} />
        <Photos />
        {/* <Achievements /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
