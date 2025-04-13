import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#011627] text-white px-6 py-8 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Logo and Tagline */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-blue-600 p-2 rounded-sm">
              <span className="block w-4 h-4 bg-white" />
            </div>
            <h1 className="text-lg font-semibold text-blue-400">Title</h1>
          </div>
          <p className="text-xs text-gray-400">Copyright © 2024</p>
          <p className="text-xs text-gray-400">Small Change. Big Change.</p>
        </div>

        {/* Navigation Links */}
        <div className="text-blue-400 font-medium mt-4">
          <div className="grid grid-cols-3 gap-x-8">
            <div className="flex flex-col space-y-6">
              <a href="#" className="border-l border-blue-400 pl-2">
                Home
              </a>
              <a href="#" className="border-l border-blue-400 pl-2">
                Courses
              </a>
            </div>
            <div className="flex flex-col space-y-6">
              <a href="#" className="border-l border-blue-400 pl-2">
                About
              </a>
              <a href="#" className="border-l border-blue-400 pl-2">
                Contact us
              </a>
            </div>
            <div className="flex flex-col space-y-6">
              <a href="#" className="border-l border-blue-400 pl-2">
                How it works
              </a>
              <a href="#" className="border-l border-blue-400 pl-2">
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-500" />

      {/* Social Icons with Local Images */}
      <div className="flex justify-end gap-4 max-w-6xl mx-auto pr-2">
        <a href="#">
          <img
            src="/images/linkedin.png"
            alt="LinkedIn"
            className="w-12 h-12"
          />
        </a>
        <a href="#">
          <img src="/images/twitter.png" alt="Twitter" className="w-12 h-12" />
        </a>
        <a href="#">
          <img
            src="/images/facebook.png"
            alt="Facebook"
            className="w-12 h-12"
          />
        </a>
        <a href="#">
          <img src="/images/github.png" alt="GitHub" className="w-12 h-12" />
        </a>
      </div>
    </footer>
  );
}
