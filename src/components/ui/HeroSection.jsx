import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 to-[#0f172a] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden isolate">
      {/* Premium background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/noise-pattern.png')] bg-[size:300px_300px] mix-blend-soft-light"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 space-y-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Online Teaching
              </span>
              <span className="block">Marketplace And</span>
              <span className="block">E-Learning Platform</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              Connect with world-class educators or monetize your expertise
              through our premium learning ecosystem.
            </p>

            {/* Enhanced Search Bar with Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full max-w-2xl"
            ></motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <img
                src="/el.svg"
                alt="E-Learning Illustration"
                className="w-full max-w-2xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
