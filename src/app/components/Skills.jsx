"use client";
import React from "react";

const Skills = () => {
  return (
    <section className="text-white py-16" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="uppercase text-3xl font-bold mb-12 text-center">
          My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Stack & Programming */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-5 h-5 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <h3 className="text-xl font-bold text-white">
                  Programming Language
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-red-500/20 text-red-400 text-xs font-medium px-3 py-1 rounded-full">
                  HTML
                </span>
                <span className="bg-blue-500/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                  CSS
                </span>
                <span className="bg-yellow-500/20 text-yellow-400 text-xs font-medium px-3 py-1 rounded-full">
                  JavaScript
                </span>
                <span className="bg-purple-500/20 text-purple-400 text-xs font-medium px-3 py-1 rounded-full">
                Python
                </span>
                <span className="bg-pink-500/20 text-pink-400 text-xs font-medium px-3 py-1 rounded-full">
                Java
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Framework & Database */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-5 h-5 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-white">
                  Framework & Database
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-rose-500/20 text-rose-400 text-xs font-medium px-3 py-1 rounded-full">
                  Angular
                </span>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full">
                  Tailwind CSS
                </span>
                <span className="bg-amber-500/20 text-amber-400 text-xs font-medium px-3 py-1 rounded-full">
                  Bootstrap
                </span>
                <span className="bg-green-500/20 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                REACT
                </span>
                <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">
                  MySQL
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Tools */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-5 h-5 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-white">Tools</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-fuchsia-500/20 text-fuchsia-400 text-xs font-medium px-3 py-1 rounded-full">
                  Git
                </span>
                <span className="bg-sky-500/20 text-sky-400 text-xs font-medium px-3 py-1 rounded-full">
                  Postman
                </span>
                <span className="bg-yellow-500/20 text-yellow-400 text-xs font-medium px-3 py-1 rounded-full">
                  Figma
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
