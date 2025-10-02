import { useState, useEffect, useRef } from 'react'
import './ProjectsPage.css'

function ProjectsPage({ selectedProject, onNavigateHome }) {
  const projectRefs = useRef({});
  const [projects] = useState([
   {
      id: 1,
      name: "Autonomous Rover: Avvyan",
      description: "Avvyan is a fully autonomous rover designed for exploration and navigation in unknown, uneven terrains. The ZED2 stereo camera served as the primary sensor, providing visual-inertial odometry (VIO) out of the box. However, to address drift and inaccuracy issues, RTAB-Map was integrated for SLAM, offering more reliable long-term mapping. The odometry from ZED2 and RTAB-Map was then fused using an Extended Kalman Filter (EKF) to achieve stable and consistent state estimation. For motion planning and control, Nav2 was utilized with the Regulated Pure Pursuit (RPP) controller and the SMAC Hybrid Planner, both of which support Ackermann-type motion—well-suited for the rover’s dynamics. Obstacle detection was handled through Nav2’s obstacle layer, enhanced by integrating a voxel layer that leveraged stereo point cloud data for 3D obstacle representation, enabling robust and safe navigation in unstructured environments.",
      mediaType: "image",
      mediaUrl: "./assets/IMG_2224.jpg",
      technologies: [
        "ROS2",
        "Nav2",
        "RTAB-Map",
        "ZED2 Stereo Camera",
        "EKF",
        "Regulated Pure Pursuit",
        "SMAC Hybrid Planner",
        "Voxel Grid Layer",
        "Python",
        "C++"
      ],
      features: [
        "Visual-Inertial Odometry (VIO) with ZED2",
        "SLAM with RTAB-Map for robust mapping",
        "Sensor fusion using EKF for stable state estimation",
        "Ackermann motion planning with Nav2 (RPP + SMAC)",
        "3D obstacle detection with voxel layer integration",
        "Autonomous navigation in unknown, uneven terrains",
        "Real-time mapping and path replanning",
        "ROS 2 modular architecture for extensibility"
      ],
      liveUrl: "#",
      githubUrl: "#",
      challenges: "The biggest challenge was achieving reliable navigation in unknown, uneven terrains while minimizing odometry drift. The ZED2’s VIO alone wasn’t sufficient, so I had to fuse it with RTAB-Map’s odometry using EKF. Another challenge was ensuring smooth Ackermann motion control, which required careful tuning of the RPP controller and SMAC Hybrid Planner parameters.",
      outcome: "Avvyan successfully demonstrated autonomous navigation in simulation and real-world tests. The fusion of VIO and SLAM through EKF significantly reduced drift, while the RPP + SMAC combination enabled smooth, Ackermann-compatible motion. The voxel-based obstacle layer ensured robust obstacle avoidance, even in unstructured 3D environments."
    },
    {
      id: 2,
      name: "ArUco Marker Localization",
      description: "In Mars yard simulation environments, rover localization is a critical task for testing autonomous navigation systems. This project addresses the challenge of localizing a rover in a Mars yard using ArUco markers. The Mars yard contains several landmarks distributed throughout the environment, each serving as a reference point for the rover to determine its position. Unlike traditional GPS-based systems, this solution mimics the constraints faced on the actual Martian surface. Each landmark consists of four ArUco markers facing different directions, forming a 3D structure at each coordinate. The project implements two innovative localization approaches: one using two ArUco markers with geometric circle intersection, and another using a single marker combined with IMU data for continuous position tracking.",
      mediaType: "video",
      mediaUrl: "./assets/my_localisation.mp4",
      technologies: ["Python", "ROS2", "OpenCV", "NumPy", "ArUco Markers"],
      features: [
        "Dual-marker geometric localization using circle intersection",
        "Single-marker localization with IMU yaw integration",
        "Multi-marker-per-landmark support for complex environments",
        "Real-time pose estimation and marker detection",
        "Coordinate system transformation (local to global)",
        "Robust position disambiguation algorithms",
        "ROS2 integration with transform publishing",
        "Camera calibration and distortion correction"
      ],
      liveUrl: "#",
      githubUrl: "#",
      challenges: "The biggest challenge was handling the complex multi-marker-per-landmark scenario where each landmark has four ArUco markers facing different directions. Standard ArUco localization libraries aren't designed for this setup. I had to develop custom algorithms to handle multiple simultaneous marker observations, calculate distance and orientation from different marker faces, and disambiguate the rover's position when multiple intersection points are possible. Another challenge was maintaining accurate coordinate system relationships between local rover frame and global Mars yard coordinates.",
      outcome: "Successfully developed two robust localization methods that work in Mars-like environments without GPS. The dual-marker approach provides high accuracy through geometric intersection, while the single-marker + IMU method enables continuous localization with minimal landmark visibility. The system has been tested in simulation environments and demonstrates reliable position tracking for autonomous rover navigation in complex terrain with distributed landmark structures."
    },
    {
      id: 3,
      name: "Autonomous Expedition (AutEx)",
      description: "An autonomous rover navigation system designed to traverse rugged terrain by detecting and following arrow signs to reach an endpoint marked by an orange traffic cone. The mission consists of multiple black arrow signs (30x20cm) on white backgrounds, elevated 10-50cm off the ground, with arrowheads pointing the direction the rover should navigate. The system features a custom-trained YOLOv8 object detection model specifically optimized for real-time deployment on NVIDIA Jetson Xavier NX with limited onboard resources. Using a ZED2 camera for its wide field of view, the rover continuously scans for arrows, aligns itself upon detection, maintains a 1-meter distance, turns in the indicated direction, and continues navigation until reaching the orange cone destination.",
      mediaType: "video",
      mediaUrl: "./assets/Autex_final.mp4",
      technologies: ["YOLOv8", "NVIDIA Jetson Xavier NX", "TensorRT", "ONNX", "ZED2 Camera", "PyTorch", "Computer Vision", "Edge Computing", "Real-time Object Detection", "ROS2", "Python"],
      features: [
        "Custom YOLOv8 model trained for arrow detection with high precision",
        "PyTorch to ONNX model conversion for edge deployment",
        "TensorRT optimization for NVIDIA Jetson Xavier NX",
        "Real-time inference with 40x performance improvement (1.2s to 30ms)",
        "ZED2 camera integration for wide field of view scanning",
        "Autonomous navigation with precise alignment and distance control",
        "Robust detection across varying lighting and terrain conditions",
        "Sequential arrow following until orange cone endpoint detection"
      ],
      liveUrl: "#",
      githubUrl: "#",
      challenges: "The primary challenge was deploying a real-time object detection system on edge hardware with severely limited computational resources. The original PyTorch YOLOv8 model had an inference time of 1.2 seconds, which was completely inadequate for real-time navigation. I needed to optimize the model for the NVIDIA Jetson Xavier NX while maintaining high detection accuracy for the specific arrow signs. Additional challenges included handling varying lighting conditions, different arrow orientations, and ensuring precise rover alignment and distance control during autonomous navigation across moderately rugged terrain.",
      outcome: "Successfully achieved a 40x performance improvement by converting the PyTorch model to ONNX format and optimizing it with TensorRT for NVIDIA Jetson deployment, reducing inference time from 1.2 seconds to just 30 milliseconds. This breakthrough enabled true real-time arrow detection and navigation capabilities. The optimized system maintained high precision and recall for task-specific object detection, allowing the rover to autonomously navigate through challenging terrain, accurately follow sequential arrow directions, and successfully reach the orange cone endpoint in real-world deployment scenarios."
    },
{
  id: 4,
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
}


  ]);

  // Auto-scroll to selected project when component mounts
  useEffect(() => {
    if (selectedProject && projectRefs.current[selectedProject.id]) {
      // Small delay to ensure the component is fully rendered
      setTimeout(() => {
        projectRefs.current[selectedProject.id].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 100);
    }
  }, [selectedProject]);

  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-header">
          <h1>All Projects</h1>
          <p>A detailed look at my work and the technologies behind them</p>
        </div>
        
        <div className="projects-list">
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`project-detail ${selectedProject && selectedProject.id === project.id ? 'highlighted' : ''}`}
              ref={el => projectRefs.current[project.id] = el}
            >
              <div className="project-media-large">
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
                    controls={true}
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              
              <div className="project-details">
                <h2>{project.name}</h2>
                <p className="project-description">{project.description}</p>
                
                <div className="project-section">
                  <h3>🛠️ Technologies Used</h3>
                  <div className="technologies-detailed">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag-detailed">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-section">
                  <h3>✨ Key Features</h3>
                  <ul className="features-list">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-section">
                  <h3>🎯 Challenges & Solutions</h3>
                  <p>{project.challenges}</p>
                </div>
                
                <div className="project-section">
                  <h3>📊 Outcome & Impact</h3>
                  <p>{project.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="back-to-home">
          <button 
            className="btn secondary"
            onClick={onNavigateHome}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
