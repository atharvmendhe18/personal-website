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
  id: 3,
  name: "Closed-Loop Steering Control for Holonomic Rover",
  description: "A holonomic rover with 360° independently steerable wheels. The project implements closed-loop control with PID loops specifically for the independent steering system on each wheel, using dual encoders to measure both steering angle and wheel rotation. Real-time feedback with PID controllers continuously monitors the steering angle and corrects deviations due to slip, backlash, or uneven terrain, enabling precise steering coordination and accurate omni-directional motion. The system supports multiple mobility modes including Ackermann steering, Spot Turn, and Swerve Drive, making the rover highly versatile in both constrained and open environments. The software integrates steering PID controllers with drive controllers and the higher-level motion planner via ROS2 for smooth trajectory tracking and robust teleoperation/autonomy.",
  mediaType: "video",
  mediaUrl: "./assets/rover_mobility.mp4",
  technologies: ["ROS2", "Python", "PID Control", "Quadrature Encoders"],
  features: [
    "Independent 360° steering on each wheel with closed-loop PID control",
    "Dual-encoder feedback loop for precise steering-angle measurement",
    "Per-wheel PID loop to maintain accurate steering angle",
    "Coordinated steering + drive control for holonomic motion",
    "Real-time correction for slippage and mechanical backlash",
    "Supports Ackermann steering, Spot Turn, and Swerve Drive mobility modes"
  ],
  liveUrl: "#",
  githubUrl: "#",
  challenges: "Designing and tuning the PID loop for stable steering control, especially under mechanical backlash and encoder noise. Synchronizing multiple steering controllers without adding latency was critical, as was ensuring PID responsiveness without overshoot.",
  outcome: "Implemented feedback-controlled PID steering that significantly improved steering angle accuracy and coordination across wheels, enabling versatile mobility modes such as Ackermann steering, Spot Turn, and Swerve Drive. This resulted in smoother omni-directional motion and more reliable trajectory following in both autonomous and teleoperated modes."
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
