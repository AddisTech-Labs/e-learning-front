import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#071d2f] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-[#3b82f6]">🅽</div>
          <span className="text-xl font-semibold text-[#3b82f6]">Title</span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          <a href="#" className="text-purple-500">
            Home
          </a>
          <a href="#" className="text-[#6b7280] hover:text-white transition">
            Courses
          </a>
          <a href="#" className="text-[#6b7280] hover:text-white transition">
            About
          </a>
          <a href="#" className="text-[#6b7280] hover:text-white transition">
            Contact us
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
            Sign up
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm font-semibold">
          <a href="#" className="block text-purple-500">
            Home
          </a>
          <a
            href="#"
            className="block text-[#6b7280] hover:text-white transition"
          >
            Courses
          </a>
          <a
            href="#"
            className="block text-[#6b7280] hover:text-white transition"
          >
            About
          </a>
          <a
            href="#"
            className="block text-[#6b7280] hover:text-white transition"
          >
            Contact us
          </a>
          <div className="flex flex-col space-y-2 pt-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
              Sign up
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
