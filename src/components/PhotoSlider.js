import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import p1 from '../assets/img/slider/p1.png';
//import m2 from '../assets/img/slider/m2.png';
import m3 from '../assets/img/slider/m3.png';
import m4 from '../assets/img/slider/m4.png';
import m5 from '../assets/img/slider/m5.png';
import m6 from '../assets/img/slider/m6.png';
import m7 from '../assets/img/slider/m7.png';
// import m8 from '../assets/img/slider/m8.png';
import famousMilo from '../assets/img/slider/famousMilo.jpeg';

const PhotoSlider = () => {
  const slides = [
    { src: p1, alt: 'Slide 1', caption: 'Jokers Hill trail' },
    { src: famousMilo, alt: 'Famous Milo', caption: 'Twinning with my dog Milo' },
    { src: m3, alt: 'Slide 3', caption: 'More Milo' },
    { src: m4, alt: 'Slide 4', caption: 'Humber trail' },
    { src: m5, alt: 'Slide 5', caption: 'Oak Ridges trail' },
    { src: m6, alt: 'Slide 6', caption: 'Winter lights' },
    { src: m7, alt: 'Slide 7', caption: 'Snow day' }
  ];

  return (
    <div className="photo-slider">
      <Carousel fade interval={3000} controls indicators>
        {slides.map((s, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={s.src} alt={s.alt} />
            {s.caption && (
              <Carousel.Caption>
                <p>{s.caption}</p>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default PhotoSlider;
