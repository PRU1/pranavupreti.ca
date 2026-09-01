import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import p1 from '../assets/img/slider/p1.png';
import famousMilo from '../assets/img/slider/famousMilo.jpeg';
import m4 from '../assets/img/slider/m4.png';
import m6 from '../assets/img/slider/m6.png';
import m7 from '../assets/img/slider/m7.png';

const images = [
  { src: p1, caption: 'Jokers Hill trail' },
  { src: famousMilo, caption: 'Twinning with my dog Milo' },
  { src: m4, caption: 'Humber trail' },
  { src: m6, caption: 'Winter lights' },
  { src: m7, caption: 'Snow day' },
];

export const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const count = images.length;
  const goTo = (index) => setCurrentImageIndex((index + count) % count);
  const current = images[currentImageIndex];

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-inner-narrow">
        <p className="section-kicker text-center">Gallery</p>
        {/*
        <h2 className="section-title section-title-sm text-center">Off the clock</h2>
        */}
        <div className="gallery-frame">
          <img src={current.src} alt={current.caption} />
          <div className="gallery-caption">
            <p>{current.caption}</p>
          </div>
          <button
            type="button"
            className="gallery-nav-btn prev"
            aria-label="Previous photo"
            onClick={() => goTo(currentImageIndex - 1)}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="gallery-nav-btn next"
            aria-label="Next photo"
            onClick={() => goTo(currentImageIndex + 1)}
          >
            <ChevronRight />
          </button>
        </div>
        <div className="gallery-dots">
          {images.map((img, index) => (
            <button
              key={img.caption}
              type="button"
              className={`gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
              aria-label={`Show photo: ${img.caption}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
