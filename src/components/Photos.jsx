import { useState, useEffect } from 'react'
import './Photos.css'

function Photos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample photos - replace these URLs with your actual photos
  const photos = [
    {
      id: 1,
      url: "./assets/photos/photo_1.jpg",
      caption: "Team Photo",
      // description: "At European Rover Challenge 2025"
    },
    {
      id: 2,
      url: "./assets/photos/photo_2.jpg",
      caption: "Rover In Crabbing Mode",
      // description: "Collaborating with amazing teammates"
    },
    {
      id: 3,
      url: "./assets/photos/photo_3.jpg",
      caption: "Probing Task At ERC",
      // description: "Presenting at a technology conference"
    },
    {
      id: 4,
      url: "./assets/photos/photo_4.jpg",
      caption: "Rover",
      // description: "Leading a machine learning workshop"
    },
    {
      id: 5,
      url: "./assets/photos/photo_5.jpg",
      caption: "Debugging",
      // description: "Experimenting in the innovation lab"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, photos.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section id="photos" className="photos">
      <div className="container">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>A glimpse into my journey and experiences</p>
        </div>
        
        <div className="carousel-container">
          <div className="carousel">
            <button className="carousel-btn prev" onClick={goToPrevious}>
              &#8249;
            </button>
            
            <div className="carousel-content">
              <div className="photo-container">
                <img 
                  src={photos[currentIndex].url} 
                  alt={photos[currentIndex].caption}
                  className="carousel-image"
                />
                <div className="photo-overlay">
                  <h3>{photos[currentIndex].caption}</h3>
                  <p>{photos[currentIndex].description}</p>
                </div>
              </div>
            </div>
            
            <button className="carousel-btn next" onClick={goToNext}>
              &#8250;
            </button>
          </div>
          
          <div className="carousel-indicators">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          
          <div className="carousel-counter">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Photos
