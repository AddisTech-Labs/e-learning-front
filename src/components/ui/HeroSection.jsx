import React from "react";
import { Button } from "@/components/ui/button";

const CourseraStyleHero = () => {
  return (
    <section className="bg-[#f5f9ff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <div className="flex items-center space-x-2">
            <img src="/coursera-logo.svg" alt="Coursera" className="h-6" />
            <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">
              PLUS
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            Achieve your career goals with <br className="hidden sm:block" />
            Coursera Plus
          </h1>
          <p className="text-gray-700 text-lg">
            Subscribe to build job-ready skills from world-class institutions.
          </p>
          <p className="text-gray-700">$59/month, cancel anytime</p>

          <div className="space-y-2">
            <Button className="bg-blue-600 text-white text-base px-6 py-3">
              Start 7-day Free Trial
            </Button>
            <p className="text-blue-600 text-sm font-semibold">
              or $399/year with 14-day money-back guarantee
            </p>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/hero-illustration.png"
            alt="Hero Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseraStyleHero;
