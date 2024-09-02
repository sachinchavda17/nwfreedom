import React from "react";
import { FaGraduationCap, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <section className="bg-secondary-light dark:bg-secondary-dark py-20 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div
          id="contact"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 animate-slide-in-top"
        >
          <h2 className="text-3xl font-bold text-primary-light dark:text-primary-dark mb-8 text-center">
            Get in Touch
          </h2>
          <form
            className="space-y-6"
            action="https://formspree.io/f/xanwkyby"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-primary-light dark:text-secondary-dark mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-accent-cyan hover:text-accent-cyan/80 text-lg font-medium transition"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-accent-cyan hover:text-accent-cyan/80 text-lg font-medium transition"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-accent-cyan hover:text-accent-cyan/80 text-lg font-medium transition"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-secondary-light dark:bg-secondary-dark">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-light dark:text-primary-dark mb-8">
              Contact Details
            </h2>
            <div className="flex flex-col gap-8">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition transform hover:scale-105 animate-slide-in-top">
                <h3 className="text-xl font-semibold text-primary-light dark:text-primary-dark mb-2">
                  Bhavin Parmar
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <FaGraduationCap className="inline-block mr-2" /> B.A./M.A.
                  Psychology, D.Ed.Se.(MR), Master Trainer Sp.Olypics, Bharat
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <FaLocationDot className="inline-block mr-2" /> S.3-4,
                  Neelakamal Shopping Centre, Opposite Samved Hospital,
                  Kalikund, Dholka
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <FaPhoneAlt className="inline-block mr-2" />
                  <a
                    href="tel:+919974088802"
                    className="text-accent-cyan hover:underline"
                  >
                    (997) 408-8802
                  </a>
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition transform hover:scale-105 animate-slide-in-top">
                <h3 className="text-xl font-semibold text-primary-light dark:text-primary-dark mb-2">
                  Arpita Parmar
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <FaGraduationCap className="inline-block mr-2" />{" "}
                  D.Ed.Se.(MR), B.Com.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <FaLocationDot className="inline-block mr-2" /> S.3-4,
                  Neelakamal Shopping Centre, Opposite Samved Hospital,
                  Kalikund, Dholka
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <FaPhoneAlt className="inline-block mr-2" />
                  <a
                    href="tel:+918780752326"
                    className="text-accent-cyan hover:underline"
                  >
                    (878) 075-2326
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
