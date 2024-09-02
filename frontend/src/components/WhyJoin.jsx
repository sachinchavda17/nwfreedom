import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Using React Icons for checkmark icon
import { motion } from "framer-motion"; // Using Framer Motion for animations

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const WhyJoin = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Why Join NW Freedom?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Become a part of NW Freedom and contribute to a mission dedicated to
          empowering individuals with mental disabilities to achieve
          self-reliance and social participation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Empowerment Through Education",
              description:
                "Support our mission to provide comprehensive educational and vocational training, tailored to individual talents and abilities, ensuring every participant has the opportunity to become economically self-reliant.",
            },
            {
              title: "Foster Social Participation",
              description:
                "Help create an inclusive community where individuals with mental disabilities can actively participate in social activities and contribute to society, breaking down barriers to full community engagement.",
            },
            {
              title: "Promote Individual Self-Reliance",
              description:
                "Join us in our efforts to develop programs that enhance personal self-care and independence, ensuring that every individual can lead a fulfilling and self-sufficient life.",
            },
            {
              title: "Champion Welfare and Rehabilitation",
              description:
                "Support our comprehensive approach to welfare and rehabilitation, providing necessary services that enhance the quality of life and promote the well-being of individuals with mental disabilities.",
            },
            {
              title: "Create Lasting Impact",
              description:
                "Be a part of a movement that not only provides immediate support but also works towards long-term solutions and sustainable change for individuals with mental disabilities.",
            },
            {
              title: "Join a Dedicated Community",
              description:
                "Connect with a passionate community of volunteers, advocates, and supporters all working towards the shared goal of empowering and uplifting individuals with mental disabilities.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FaCheckCircle className="text-green-500 text-3xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
