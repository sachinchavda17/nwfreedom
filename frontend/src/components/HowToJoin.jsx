import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const HowToJoin = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("how-to-join-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerHeight = window.innerHeight * 0.8;
        if (sectionTop < triggerHeight) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="how-to-join-section"
      className="bg-secondary-light dark:bg-secondary-dark py-12 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary-light dark:text-primary-dark mb-8">
          Contact Details
        </h2>
        <div className="flex flex-col gap-8">
          {[
            {
              name: "Bhavin Parmar",
              details:
                "B.A./M.A. Psychology, D.Ed.Se.(MR), Master Trainer Sp.Olypics, Bharat",
              location:
                "S.3-4, Neelakamal Shopping Centre, Opposite Samved Hospital, Kalikund, Dholka",
              phone: "(997) 408-8802",
              tel: "+919974088802",
            },
            {
              name: "Arpita Parmar",
              details: "D.Ed.Se.(MR), B.Com.",
              location:
                "S.3-4, Neelakamal Shopping Centre, Opposite Samved Hospital, Kalikund, Dholka",
              phone: "(878) 075-2326",
              tel: "+918780752326",
            },
          ].map((person, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-transform duration-700 ${
                visible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-90"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <h3 className="text-xl font-semibold text-primary-light dark:text-primary-dark mb-2">
                {person.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <FaGraduationCap className="inline-block mr-2" />{" "}
                {person.details}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <FaLocationDot className="inline-block mr-2" />{" "}
                {person.location}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <a
                  href={`tel:${person.tel}`}
                  className="text-accent-cyan hover:underline"
                >
                  {person.phone}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
