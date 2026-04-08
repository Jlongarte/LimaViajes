import { useState, useEffect } from "react";
import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
  const slides = [
    {
      image:
        "https://res.cloudinary.com/dzo0dufcr/image/upload/v1775568582/japon_v6s6dm.webp",
      logo: "https://res.cloudinary.com/dzo0dufcr/image/upload/v1775569118/Gemini_Generated_Image_6gqxye6gqxye6gqx-removebg-preview_bbwvwl.png",
      title: "Discover Japan",
      text: "Explore the perfect blend of ancient traditions and modern wonders.",
      link: "/destinations/japan",
      buttonText: "Learn More",
    },
    {
      image:
        "https://res.cloudinary.com/dzo0dufcr/image/upload/v1775568583/Istanbul_nz0hqj.webp",
      logo: "https://res.cloudinary.com/dzo0dufcr/image/upload/v1775569118/Gemini_Generated_Image_6gqxye6gqxye6gqx-removebg-preview_bbwvwl.png",
      title: "Explore Istanbul",
      text: "Where East meets West in a vibrant tapestry of culture and history.",
      link: "/destinations/istanbul",
      buttonText: "View Details",
    },
    {
      image:
        "https://res.cloudinary.com/dzo0dufcr/image/upload/v1775568582/Paradise_zoszq4.webp",
      logo: "https://res.cloudinary.com/dzo0dufcr/image/upload/v1775569118/Gemini_Generated_Image_6gqxye6gqxye6gqx-removebg-preview_bbwvwl.png",
      title: "Your Paradise Awaits",
      text: "Find your perfect escape on pristine beaches with crystal clear waters.",
      link: "/destinations/paradise",
      buttonText: "Book Now",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Intervalo para cambiar de slide automáticamente (cada 6 segundos, un poco más para apreciar el fade)
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval); // Limpieza del intervalo
  }, [slides.length]);

  return (
    <section id="gallery-hero">
      <div className="gallery-container fade-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`gallery-item ${index === current ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* El contenido (texto, botón, logo) */}
            <div className="overlay">
              <div className="content-wrapper">
                {slide.logo && (
                  <img src={slide.logo} alt="Logo" className="slide-logo" />
                )}
                {slide.title && <h2 className="white-title">{slide.title}</h2>}
                {slide.text && <p className="slide-text">{slide.text}</p>}
                {slide.link && (
                  <Button
                    text={slide.buttonText}
                    link={slide.link}
                    className="button-link"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
