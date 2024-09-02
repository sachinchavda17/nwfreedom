import React, { useState, useRef, useEffect } from "react";

const events = [
  {
    image:
      "https://nwfreedom.org/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-16-at-16.35.27_e691a954.jpg",
    title: "Silver Medal in Sports",
    year: "2019",
    description:
      "Special Olympics World Summer Cames 2019 is an international sports festival held in Abu Dhabi,(Dubai) UAE.",
    link: "#",
  },
  {
    image: "https://nwfreedom.org/wp-content/uploads/2024/01/1702650279829.jpg",
    title: "Gold Medal in Sports",
    year: "2018",
    description:
      "Level Sports Festival Himmatnagar, Sabarkantha Special Olympics World Summer Gamer 2018 organized by Government",
    link: "#",
  },

  {
    image: "https://nwfreedom.org/wp-content/uploads/2024/01/1702643791293.jpg",
    title: "Gold Medal in Sports",
    year: "2016",
    description:
      "Level Sports Festival Himmatnagar, Sabarkantha Spe. Khel Mahakumbha 2016 State organized by Government",
    link: "#",
  },
  {
    image: "https://nwfreedom.org/wp-content/uploads/2024/01/1702643797959.jpg",
    title: "Silver Medal in Sports",
    year: "2016",
    description:
      "Level Sports Festival Himmatnagar, Sabarkantha Spe. Khel Mahakumbha 2016 State organized by Government",
    link: "#",
  },

  {
    image:
      "https://nwfreedom.org/wp-content/uploads/2024/01/WhatsApp-Image-2023-12-22-at-20.26.08_5a9695b7.jpg",
    title: "Silver Medal in Sports",
    year: "2013",
    // description: "Annual sports gala with thrilling matches and entertainment.",
    description:
      "Special Sports Mahakumbh 2013 State Level Sports Festival Kherwa, Mehsana organized by Government.",
    link: "#",
  },
  {
    image: "https://nwfreedom.org/wp-content/uploads/2023/12/awards-2012.jpg",
    title: "Gold Medal in Sports",
    year: "2012",
    description:
      "Special Khel Mahakumbh 2012 State Level Sports Festival organized by Government, Gandhinagar.",
    link: "#",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / events.length;
      carouselRef.current.scrollLeft = itemWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-8 px-4 dark:bg-gray-600">
      <h2 className="text-3xl font-bold  text-gray-900  dark:text-white mb-6 text-center">
        Highlights & Achievements
      </h2>
      <div
        ref={carouselRef}
        className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth transition-transform duration-300 ease-in-out"
      >
        {events.map((event, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2 snap-center hover:scale-105 transform transition"
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
              <a href={event.link}>
                <img
                  className="w-full h-80 object-cover"
                  src={event.image}
                  alt={`Event ${index}`}
                />
              </a>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">
                  {event.title}
                </div>
                <p className="text-gray-600 text-base dark:text-gray-400">
                  {event.year}
                </p>
                <p className="text-gray-700 text-base dark:text-gray-400 mt-2">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
