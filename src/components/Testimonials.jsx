import React from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineering Student",
    quote:
      "This platform has helped me improve my skills with interactive learning. The mentors are very supportive, and the courses are top-notch!",
    image: "/john_doe.jpg",
  },
  {
    name: "Jane Smith",
    role: "Math Teacher",
    quote:
      "I found teaching on this platform to be a rewarding experience. It’s easy to connect with eager learners who truly value education.",
    image: "/jane_smith.jpg",
  },
  {
    name: "Mark Wilson",
    role: "Professional Developer",
    quote:
      "I learned so much from the live classes and the community. The hands-on projects gave me practical experience that I could immediately apply in my career.",
    image: "/mark_wilson.jpg",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What Our Students Say
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
