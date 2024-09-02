import React from "react";

const AboutPage = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-800 animate-slide-in-top">
      <div className="container mx-auto">
        <div className="w-full">
          <h2 className="text-blue-500 dark:text-teal-400 font-semibold uppercase mb-2 tracking-wider">
            About Us
          </h2>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
            NW Freedom: Empowering Rural Communities
          </h1>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Greetings from{" "}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                New Way Education and Rural Development Trust
              </span>. Rural areas of India often lack special schools and expert
              facilities. Big cities have these resources, but rural parents
              often cannot afford them.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Dholka, a small taluka city 35 kilometers from Ahmedabad, lacked a
              special school for intellectually challenged children until 2010.
              A young man from Dholka trained in special education and started
              the{" "}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                New Way Education and Rural Development Trust
              </span> and{" "}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                Freedom Daycare Center
              </span>. This organization serves about 39 individuals with
              intellectual challenges.
            </p>
            <div className="border-l-4 border-blue-500 dark:border-teal-400 pl-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The trust strives to provide the best possible facilities,
                despite financial difficulties, and aims to integrate
                intellectually challenged individuals into mainstream society
                through education, occupation, sports, art, and culture.
              </p>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our goal is to connect these individuals to the mainstream world
              and provide them with opportunities for growth and development.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-teal-400 mb-4">
              Our Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Sports, Music, Dance, Art, and Craft Education</li>
              <li>Physiotherapy</li>
              <li>Prevocational and Vocational Training</li>
              <li>Assistance for Employment/Self-employment</li>
            </ul>
          </div>

          <div className="mt-12 bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-teal-400 mb-4">
              Achievements
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We are proud of our students' achievements in various competitions,
              including Drawing-Painting, Dance, and Music. Our students have also
              participated in the Special Olympics at state, national, and
              international levels.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              A highlight of our journey was a student winning a Silver Medal in
              Cycling at the Special Olympics World Summer Games 2019 in Abu Dhabi.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              In 2018, our organization set a World Record for the maximum number
              of specially-abled children performing on stage during the World
              Disability Day celebration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
