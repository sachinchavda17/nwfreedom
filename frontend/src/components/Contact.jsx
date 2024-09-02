import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-secondary-light dark:bg-gray-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-secondary-dark mb-8 animate-fade-in">
          Get in Touch
        </h2>
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-transform duration-700 animate-fade-in-up">
          <form
            className="space-y-6"
            action="https://formspree.io/f/xanwkyby"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 transition-transform duration-300 transform hover:scale-105"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 transition-transform duration-300 transform hover:scale-105"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 transition-transform duration-300 transform hover:scale-105"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-primary-light dark:text-secondary-dark mb-4 animate-fade-in">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-accent-cyan hover:text-accent-cyan/80 text-lg font-medium transition-transform duration-300 transform hover:scale-110"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-accent-cyan hover:text-accent-cyan/80 text-lg font-medium transition-transform duration-300 transform hover:scale-110"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-accent-cyan hover:text-accent-cyan/80 text-lg font-medium transition-transform duration-300 transform hover:scale-110"
            >
              Instagram
            </a>
            {/* Add more social links as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
