import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Headset, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Mentors",
      description:
        "Learn from industry professionals with real-world experience",
      link: "/mentors",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Live Classes",
      description: "Interactive sessions with hands-on learning",
      link: "/classes",
    },
    {
      icon: <Headset className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Always available to help with your learning journey",
      link: "/support",
    },
  ];

  return (
    <section className="py-20 bg-indigo-50 dark:bg-[#0f172a]">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Learn With Us
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Button
                  variant="link"
                  className="px-0 text-blue-600 hover:text-blue-800"
                >
                  Learn more →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
