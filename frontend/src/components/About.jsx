import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 animate-zoom-in">
            <img
              src="https://nwfreedom.org/wp-content/uploads/2023/12/img-about-scaled.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto transition-transform duration-500 transform hover:scale-105"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 lg:pl-12 animate-slide-in">
            <h2 className="text-gray-400 font-bold uppercase mb-2">About</h2>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              NW Freedom
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Greetings from “New Way Education and Rural Development Trust”
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Rural areas of India do not have special schools. Experts start
              therapy centres and special schools in big cities, as rural
              parents have poor paying capacity. Dholka is a good example, a
              small taluka city, 35 kilometers away from Ahmedabad...
            </p>

            <Link
              to="/about"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
