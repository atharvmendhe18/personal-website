import { useState } from 'react'
import './Achievements.css'

function Achievements() {
  const [achievements] = useState([
    {
      id: 1,
      title: "Google Developer Student Club Lead",
      organization: "Google",
      date: "2023 - Present",
      description: "Leading a community of 200+ developers, organizing workshops, hackathons, and tech talks on emerging technologies.",
      icon: "🏆"
    },
    {
      id: 2,
      title: "First Place - National Hackathon",
      organization: "TechFest 2023",
      date: "March 2023",
      description: "Won first place among 500+ participants for developing an AI-powered solution for sustainable farming.",
      icon: "🥇"
    },
    {
      id: 3,
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      date: "January 2023",
      description: "Achieved AWS Solutions Architect Associate certification, demonstrating expertise in cloud architecture and deployment.",
      icon: "☁️"
    },
    {
      id: 4,
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "2022 - Present",
      description: "Active contributor to open source projects with 500+ commits across various repositories and 100+ stars on personal projects.",
      icon: "💻"
    },
    {
      id: 5,
      title: "Dean's List Achievement",
      organization: "University",
      date: "2022 - 2023",
      description: "Maintained a GPA of 3.8+ and was recognized on the Dean's List for academic excellence in Computer Science.",
      icon: "🎓"
    },
    {
      id: 6,
      title: "Tech Speaker",
      organization: "Various Conferences",
      date: "2022 - Present",
      description: "Delivered talks on React, Node.js, and modern web development at 5+ tech conferences and meetups.",
      icon: "🎤"
    }
  ]);

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-header">
          <h2>Achievements & Recognition</h2>
          <p>A collection of my accomplishments and milestones</p>
        </div>
        
        <div className="achievements-grid">
          {achievements.map(achievement => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-icon">
                <span>{achievement.icon}</span>
              </div>
              
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <div className="achievement-meta">
                  <span className="organization">{achievement.organization}</span>
                  <span className="date">{achievement.date}</span>
                </div>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="stats-section">
          <div className="stat-item">
            <h3>20+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>GitHub Commits</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Awards Won</p>
          </div>
          <div className="stat-item">
            <h3>3</h3>
            <p>Certifications</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
