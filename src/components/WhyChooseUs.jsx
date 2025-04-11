import React from "react";
// Then replace: <a href={feature.link}>...</a>
// With: <Link to={feature.link}>...</Link>

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Mentor",
      description:
        "Our expert mentors are the cornerstone of our educational approach. With a wealth of knowledge they support our students on their journey to success.",
      image: "/images/expert.png",
      link: "/mentor", // Customize the route
    },
    {
      title: "High Quality Live Class",
      description:
        "We deliver high-quality live classes to our students, providing interactive learning experiences led by experienced instructors.",
      image: "/images/live-class.png",
      link: "/live-class", // Customize the route
    },
    {
      title: "24/7 Live Support",
      description:
        "We offer our students 24/7 live support. Whether it's a question or a challenge at midnight, our dedicated team is here to provide guidance and assistance.",
      image: "/images/support.png",
      link: "/support", // Customize the route
    },
  ];

  return (
    <section className="bg-[#071d2f] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-12">
          <a
            href="#"
            className="text-lg font-semibold text-purple-400 hover:underline"
          >
            Why you choose us
          </a>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-2 rounded-full" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0d2a45] p-6 rounded-xl text-center shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <a
                href={feature.link}
                className="text-lg font-semibold text-purple-400 hover:underline"
              >
                {feature.title}
              </a>
              <p className="mt-2 text-sm text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
