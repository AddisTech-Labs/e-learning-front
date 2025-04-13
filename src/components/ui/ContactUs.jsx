import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-700 to-green-300 text-white font-sans flex flex-col items-center px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-black border-b-2 border-black mb-10">
        Contact Us
      </h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/contact-illustration.png"
            alt="Contact Illustration"
            className="w-[90%] max-w-md"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-transparent">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-black">
            Send a message
          </h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-md bg-[#042A47] placeholder-white text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-md bg-[#042A47] placeholder-white text-white focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="p-3 rounded-md bg-[#042A47] placeholder-white text-white focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md shadow-md transition"
            >
              Send a message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
