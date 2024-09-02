import React from "react";

const services = [
  "Medical Checkup Camp",
  "Divyang Civil Certificate New and Renewal",
  "Curative Health Policy",
  "Identity (Bus Pass) New and Renewal",
  "Divyang Railway Concession Certificate",
  "Baby Ear Machine",
  "Pensioner Ear Machine and Camp",
  "Wheelchair",
  "Artificial Hand",
  "Artificial Leg",
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-secondary-light dark:bg-secondary-dark"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary-light dark:text-primary-dark mb-12 animate-fade-in">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl animate-slide-up"
            >
              <h3 className="text-xl font-semibold text-primary-light dark:text-primary-dark mb-4">
                {service}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We offer comprehensive services to support individuals with
                various needs. Each service is designed to provide the best care
                and assistance.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
