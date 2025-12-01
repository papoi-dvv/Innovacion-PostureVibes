import { useState } from "react";
import "./CircularGallery.css";

interface GalleryImage {
  src: string;
  alt: string;
}

interface CircularGalleryProps {
  images: GalleryImage[];
}

export default function CircularGallery({ images }: CircularGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images.length) return null;

  return (
    <div className="circular-gallery">
      <div className="gallery-main">
        <button className="gallery-nav prev" onClick={prevImage}>
          ‹
        </button>
        
        <div className="gallery-image-container">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="gallery-image"
          />
        </div>
        
        <button className="gallery-nav next" onClick={nextImage}>
          ›
        </button>
      </div>
      
      <div className="gallery-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`gallery-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
}