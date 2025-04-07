"use client";
import React from "react";

const Experiences = () => {
  return (
    <section className="text-white py-16" id="experiences">
      <div className="container mx-auto px-4">
        <h2 className="uppercase text-3xl font-bold mb-12 text-center">
          Professional Experiences
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience Card 1 - Left Side */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Transportation management system
                  </h3>
                  <p className="text-gray-400 mt-1">(Internship)</p>
                </div>
                <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  1 Nov 2024 - 27 Feb 2025
                </span>
              </div>

              <div className="flex items-center text-gray-400 mb-4">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span>JOS Technology Co., Ltd.</span>
              </div>

              <p className="text-gray-300 mb-4">
                It is a program for creating transportation jobs and paying
                drivers to move goods. It has the ability to calculate the cost
                of each job created and can calculate profit and loss in the
                case of a transportation service provider who must make a profit
                from using the vehicle.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">
                  Key Responsibilities:
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Implemented frontend using React.js and JavaScript </li>
                  <li>Developed RESTful APIs with Python and Flask </li>
                  <li>Integrated with database using MySQL</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-500/20 text-red-400 text-xs font-medium px-3 py-1 rounded-full">
                    Python
                  </span>
                  <span className="bg-sky-500/20 text-sky-400 text-xs font-medium px-3 py-1 rounded-full">
                    React.js
                  </span>
                  <span className="bg-green-500/20 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                    JavaScript
                  </span>
                  <span className="bg-yellow-500/20 text-yellow-400 text-xs font-medium px-3 py-1 rounded-full">
                    MySQL
                  </span>
                  <span className="bg-purple-500/20 text-purple-400 text-xs font-medium px-3 py-1 rounded-full">
                    Adobe XD
                  </span>
                  <span className="bg-pink-500/20 text-pink-400 text-xs font-medium px-3 py-1 rounded-full">
                    Figma
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Card 2 - Right Side */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Online clothing sales system
                  </h3>
                  <p className="text-gray-400 mt-1">Final Project</p>
                </div>
                <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  May 2024 - Jule2024
                </span>
              </div>

              <div className="flex items-center text-gray-400 mb-4">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span>Rajabhat Maha Sarakham University</span>
              </div>

              <p className="text-gray-300 mb-4">
                Contributed to the development of a full-featured e-commerce
                platform, including payment gateway integration and product
                management.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">
                  Key Responsibilities:
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Web Application UX/UI Design with Figma</li>
                  <li>Implemented frontend using Angular and Bootstrap</li>
                  <li>Developed RESTful APIs with Java Spring Boot</li>
                  <li>Integrated with database using MySQL</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-500/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                    Figma
                  </span>
                  <span className="bg-indigo-500/20 text-indigo-400 text-xs font-medium px-3 py-1 rounded-full">
                    Angular
                  </span>
                  <span className="bg-green-500/20 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                    Bootstrap
                  </span>
                  <span className="bg-red-500/20 text-red-400 text-xs font-medium px-3 py-1 rounded-full">
                    Java
                  </span>
                  <span className="bg-yellow-500/20 text-yellow-400 text-xs font-medium px-3 py-1 rounded-full">
                    MySQL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Experience Card 3 - Full Width on Mobile, Centered on Desktop */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-2xl">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Code Camp Academy. (1st generation)
                    </h3>
                    <p className="text-gray-400 mt-1">Project Training</p>
                  </div>
                  <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                    Nov 2023 - Feb 2024
                  </span>
                </div>

                <div className="flex items-center text-gray-400 mb-4">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>Rajabhat Maha Sarakham University</span>
                </div>

                <p className="text-gray-300 mb-4">
                  In this project, I was involved in the entire development
                  process from the ground up, starting with drawing diagrams
                  using draw.io to create the project outline.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">
                    Key Responsibilities:
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>I designed the database using dbdiagram.io</li>
                    <li>
                      created the UX/UI design using Figma to achieve a visually
                      appealing and user-friendly interface.
                    </li>
                    <li>
                      Implemented Frontend using JavaScript with the CSS
                      frameworks React (Vite) and Tailwind and NodeJS (Express)
                    </li>
                    <li>eveloped RESTful APIs with Prisma</li>
                    <li>Integrated with database using MySQL</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {/* Existing Technologies */}
                    <span className="bg-sky-500/20 text-sky-400 text-xs font-medium px-3 py-1 rounded-full">
                      React.js
                    </span>
                    <span className="bg-green-500/20 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                      dbdiagram.io
                    </span>
                    <span className="bg-purple-500/20 text-purple-400 text-xs font-medium px-3 py-1 rounded-full">
                      Tailwind CSS
                    </span>
                    <span className="bg-yellow-500/20 text-yellow-400 text-xs font-medium px-3 py-1 rounded-full">
                      JavaScript
                    </span>
                    <span className="bg-red-500/20 text-red-400 text-xs font-medium px-3 py-1 rounded-full">
                      NodeJS
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full">
                    MySQL
                    </span>
                    <span className="bg-amber-500/20 text-amber-400 text-xs font-medium px-3 py-1 rounded-full">
                    Prisma
                    </span>
                    <span className="bg-rose-500/20 text-rose-400 text-xs font-medium px-3 py-1 rounded-full">
                      Figma
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
