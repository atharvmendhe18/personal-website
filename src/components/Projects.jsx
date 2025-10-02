import { useState } from 'react'
import './Projects.css'

function Projects({ onNavigateToProjects }) {
  const [projects] = useState([
    {
      id: 1,
      name: "Autonomous Rover: Avvyan",
      description: "Avvyan is a fully autonomous rover designed for exploration and navigation in unknown, uneven terrains. The ZED2 stereo camera served as the primary sensor, providing visual-inertial odometry (VIO) out of the box. However, to address drift and inaccuracy issues, RTAB-Map was integrated for SLAM, offering more reliable long-term mapping.",
      shortDescription: "Autonomous rover with SLAM, VIO, and Nav2 for uneven terrain navigation",
      mediaType: "image",
      mediaUrl: "./assets/IMG_2224.jpg",
      technologies: ["ROS 2", "Nav2", "RTAB-Map", "ZED2 Stereo Camera", "EKF", "Regulated Pure Pursuit"],
      // features: [
      //   "Visual-Inertial Odometry (VIO) with ZED2",
      //   "SLAM with RTAB-Map for robust mapping",
      //   "Sensor fusion using EKF for stable state estimation",
      //   "Ackermann motion planning with Nav2 (RPP + SMAC)",
      //   "3D obstacle detection with voxel layer integration",
      //   "Autonomous navigation in unknown, uneven terrains"
      // ],
      challenges: "The biggest challenge was achieving reliable navigation in unknown, uneven terrains while minimizing odometry drift. The ZED2's VIO alone wasn't sufficient, so I had to fuse it with RTAB-Map's odometry using EKF.",
      outcome: "Avvyan successfully demonstrated autonomous navigation in simulation and real-world tests. The fusion of VIO and SLAM through EKF significantly reduced drift.",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      name: "ArUco Marker Localization",
      description: "In Mars yard simulation environments, rover localization is a critical task for testing autonomous navigation systems. This project addresses the challenge of localizing a rover in a Mars yard using ArUco markers. The Mars yard contains several landmarks distributed throughout the environment, each serving as a reference point for the rover to determine its position.",
      shortDescription: "Mars yard rover localization using ArUco markers and geometric algorithms",
      mediaType: "video",
      mediaUrl: "./assets/my_localisation.mp4",
      technologies: ["Python 3.8", "ROS 2 Humble", "OpenCV", "NumPy", "ArUco Markers", "IMU Integration"],
      liveUrl: "#",
      githubUrl: "https://github.com/atharvmendhe18/aruco_marker_localization",

      challenges: "The biggest challenge was handling the complex multi-marker-per-landmark scenario where each landmark has four ArUco markers facing different directions. Standard ArUco localization libraries aren't designed for this setup. I had to develop custom algorithms to handle multiple simultaneous marker observations, calculate distance and orientation from different marker faces, and disambiguate the rover's position when multiple intersection points are possible. Another challenge was maintaining accurate coordinate system relationships between local rover frame and global Mars yard coordinates.",
      outcome: "Successfully developed two robust localization methods that work in Mars-like environments without GPS. The dual-marker approach provides high accuracy through geometric intersection, while the single-marker + IMU method enables continuous localization with minimal landmark visibility. The system has been tested in simulation environments and demonstrates reliable position tracking for autonomous rover navigation in complex terrain with distributed landmark structures."
    },
    {
      id: 3,
      name: "Autonomous Expedition (AutEx)",
      description: "An autonomous rover navigation system designed to traverse rugged terrain by detecting and following arrow signs to reach an endpoint marked by an orange traffic cone. The system features a custom-trained YOLOv8 object detection model optimized for real-time deployment on NVIDIA Jetson Xavier NX. The rover uses a ZED2 camera for its wide field of view, continuously scanning for black arrows (30x20cm) on white backgrounds elevated 10-50cm off the ground. Upon arrow detection, the rover aligns itself, maintains a 1-meter distance, turns in the indicated direction, and continues until reaching the orange cone destination.",
      shortDescription: "Real-time arrow detection and navigation using optimized YOLOv8 on NVIDIA Jetson",
      mediaType: "video",
      mediaUrl: "./assets/Autex_final.mp4",
      technologies: ["YOLOv8", "NVIDIA Jetson Xavier NX", "TensorRT", "ONNX", "ZED2 Camera", "PyTorch", "Computer Vision", "Edge Computing"],
      liveUrl: "#",
      githubUrl: "#",
      challenges: "The primary challenge was deploying a real-time object detection system on edge hardware with limited computational resources. The original PyTorch YOLOv8 model had an inference time of 1.2 seconds, which was too slow for real-time navigation. I needed to optimize the model for the NVIDIA Jetson Xavier NX while maintaining detection accuracy for the specific arrow signs. Additionally, the rover had to handle varying lighting conditions, arrow orientations, and terrain challenges while maintaining precise alignment and distance control.",
      outcome: "Successfully reduced inference time from 1.2 seconds to 30 milliseconds by converting the PyTorch model to ONNX format and optimizing it with TensorRT for NVIDIA Jetson deployment. This 40x performance improvement enabled real-time arrow detection and navigation. The system achieved high precision and recall for task-specific object detection, allowing the rover to autonomously navigate through moderately rugged terrain, accurately follow arrow directions, and successfully reach the orange cone endpoint."
    }
  ]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>A preview of my recent work</p>
        </div>
        
        <div className="projects-vertical">
          {projects.slice(0, 3).map(project => (
            <div 
              key={project.id} 
              className="project-item"
              onClick={() => onNavigateToProjects(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-media">
                {project.mediaType === 'image' ? (
                  <img 
                    src={project.mediaUrl} 
                    alt={project.name} 
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  />
                ) : (
                  <video 
                    src={project.mediaUrl} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    controls={false}
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              
              <div className="project-info">
                <h3>{project.name}</h3>
                <p className="short-description">{project.shortDescription}</p>
                <p className="click-hint">Click for detailed information</p>
                
                <div className="technologies">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">+{project.technologies.length - 3}</span>
                  )}
                </div>

                {/* Expanded content shown on hover */}
                <div className="expanded-content">
                  <div className="expanded-section">
                    <h4>📝 Full Description</h4>
                    <p>{project.description}</p>
                  </div>
                  
                  <div className="expanded-section">
                    <h4>🛠️ All Technologies</h4>
                    <div className="technologies-expanded">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag-expanded">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  {project.features && (
                    <div className="expanded-section">
                      <h4>✨ Key Features</h4>
                      <ul className="features-preview">
                        {project.features.slice(0, 4).map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                        {project.features.length > 4 && (
                          <li className="more-features">...and {project.features.length - 4} more features</li>
                        )}
                      </ul>
                    </div>
                  )}
                  
                  <div className="expanded-section">
                    <h4>🎯 Challenge</h4>
                    <p>{project.challenges}</p>
                  </div>
                  
                  <div className="expanded-section">
                    <h4>📊 Outcome</h4>
                    <p>{project.outcome}</p>
                  </div>
                  
                  <div className="expanded-actions">
                    <p className="click-to-view">👆 Click anywhere to view full details</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-projects">
          <button 
            className="btn primary"
            onClick={() => onNavigateToProjects()}
          >
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
