import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-teal-400 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Online Teaching <br />
            Marketplace And <br />
            E-Learning Platform
          </h1>

          {/* Search Bar */}
          <div className="mt-8 flex items-center bg-white rounded-md overflow-hidden w-full max-w-md">
            <input
              type="text"
              placeholder="Ex: Zoology ..."
              className="w-full px-4 py-3 text-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3">
              Find Teacher
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="md:w-1/2">
          <img
            src="/el.svg"
            alt="Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
