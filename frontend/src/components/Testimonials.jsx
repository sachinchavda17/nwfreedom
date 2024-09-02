import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    role: "Volunteer",
    feedback:
      "NW Freedom has been instrumental in providing invaluable training and support. Their dedication to empowering individuals with mental disabilities is truly commendable.",
    image:
      "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jane Smith",
    role: "Parent",
    feedback:
      "The vocational training programs have significantly improved my child's confidence and independence. NW Freedom's commitment to quality and care is unmatched.",
    image:
      "https://images.unsplash.com/photo-1480406266260-49c193257b6d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Johnson",
    role: "Supporter",
    feedback:
      "Being part of NW Freedom's community has been a rewarding experience. The impact they make in the lives of those they serve is profound and inspiring.",
    image:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonials = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("testimonials-section");
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
      id="testimonials-section"
      className="bg-secondary-light dark:bg-gray-800 py-10 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary-light dark:text-text-dark mb-8">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 flex flex-col items-center transform transition-transform duration-700 ${
                visible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-90"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="relative mb-4">
                <FaQuoteLeft className="absolute top-0 left-0 text-accent-cyan text-4xl dark:text-accent-cyan opacity-50" />
                <img
                  className="w-24 h-24 rounded-full border-4 border-primary-light dark:border-primary-dark"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <FaQuoteRight className="absolute bottom-0 right-0 text-accent-cyan text-4xl dark:text-accent-cyan opacity-50" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
                {testimonial.feedback}
              </p>
              <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
