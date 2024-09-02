import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/ngo-1.jpg";
import img2 from "../assets/ngo-2.jpg";
import img3 from "../assets/ngo-3.jpg";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="h-full w-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-secondary-dark bg-opacity-60 dark:bg-opacity-70 ">
        <div className="text-center text-text-dark ml-20 mr-20 animate-fade-in-up">
          <p className="mt-4 text-lg md:text-2xl animate-slide-up delay-500">
            EMPOWERING DREAMS
          </p>
          <h1 className="text-4xl md:text-6xl font-bold animate-slide-up delay-700">
            NGO DEDICATES ITSELF TO ENRICHING THE LIVES OF DISABLED CHILDREN
          </h1>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-red-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-500 transition-colors duration-200 animate-slide-up delay-900"
          >
            Join Us Now
          </Link>
        </div>
      </div>
      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-300 ${
              currentSlide === index
                ? "bg-primary-light dark:bg-primary-dark"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
