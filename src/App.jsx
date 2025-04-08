import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

const ELearningPlatform = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800">Title</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2"
              >
                Courses
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2"
              >
                Contact us
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2">
                Sign up
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Courses
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                About
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Contact us
              </a>
            </div>
            <div className="px-4 pb-4">
              <button className="w-full px-3 py-2 text-gray-600 hover:text-gray-900">
                Sign up
              </button>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Online Teaching
            <br />
            Marketplace And
            <br />
            E-Learning Platform
          </h1>

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="flex rounded-md shadow-sm">
              <input
                type="text"
                placeholder="Ex: Zoology..."
                className="flex-1 rounded-l-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 flex items-center">
                <FiSearch className="mr-2" />
                Find Teacher
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ELearningPlatform;
