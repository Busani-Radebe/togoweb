import React, { useState, useEffect } from "react";
import "./carousel.css";

// Import all images
import image2 from "../../public/carouselimage/2.jpeg";
import image14 from "../../public/carouselimage/IMG-20251229-WA0014.jpg";
import image27 from "../../public/carouselimage/IMG-20251229-WA0027.jpg";
import image28 from "../../public/carouselimage/IMG-20251229-WA0028.jpg";
import image36 from "../../public/carouselimage/IMG-20251229-WA0036.jpg";
import image42 from "../../public/carouselimage/IMG-20251229-WA0042.jpg";
import image53 from "../../public/carouselimage/IMG-20251229-WA0053.jpg";
import image55 from "../../public/carouselimage/IMG-20251229-WA0055.jpg";
import image58 from "../../public/carouselimage/IMG-20251229-WA0058.jpg";
import imageWhatsApp from "../../public/carouselimage/WhatsApp Image 2025-12-29 at 3.26.22 PM.jpeg";

const Carousel = () => {
  // Array of imported images
  const images = [
    image2,
    image14,
    image27,
    image28,
    image36,
    image42,
    image53,
    image55,
    image58,
    imageWhatsApp,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  return (
    <div className="who-we-are-section">
      <div className="content-wrapper">
        {/* Text Content Section */}
        <div className="text-content">
          <h2 className="section-title">Who we are</h2>
          <p className="description">
            Togo Electricals is a trusted electrical engineering and services
            company based in Rustenburg, South Africa, delivering reliable
            solutions across residential, commercial, and industrial sectors. We
            specialize in electrical installations, maintenance, engineering
            consultancy, system design, and compliance, with strong expertise in
            medium and high voltage systems, power solutions, and preventative
            maintenance. Our work is driven by technical excellence, strict
            safety standards, and a client-focused approach, ensuring every
            project is executed right the first time with transparency,
            precision, and long-term value.
          </p>
          
          <button className="learn-more-btn">LEARN MORE</button>
        </div>

        {/* Image Carousel Section */}
        <div
          className="image-carousel-container"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="carousel-wrapper">
            {/* Previous Button */}
            <button
              className="carousel-btn prev-btn"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              &#10094;
            </button>

            {/* Slides Container */}
            <div className="slides-container">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentIndex ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                >
                  <div className="image-overlay"></div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              className="carousel-btn next-btn"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              &#10095;
            </button>

            {/* Slide Indicators */}
            <div className="indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="slide-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
