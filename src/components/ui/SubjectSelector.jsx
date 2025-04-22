// SubjectGrid.jsx - Updated with FunctionSquare
import React from "react";
import {
  Book,
  Code,
  FlaskConical,
  Globe,
  History,
  Leaf,
  FunctionSquare,
  Users,
} from "lucide-react";

const subjects = [
  { name: "Computer Science", icon: <Code size={24} /> },
  { name: "Mathematics", icon: <FunctionSquare size={24} /> }, // Updated here
  { name: "Physics", icon: <FlaskConical size={24} /> },
  { name: "History", icon: <History size={24} /> },
  { name: "Biology", icon: <Leaf size={24} /> },
  { name: "Geography", icon: <Globe size={24} /> },
  { name: "Literature", icon: <Book size={24} /> },
  { name: "Social Studies", icon: <Users size={24} /> },
];

export const SubjectGrid = () => (
  <section className="py-20 bg-white">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Explore Subjects
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            className="p-6 border rounded-lg hover:shadow-md transition-all flex flex-col items-center"
          >
            <div className="p-3 bg-blue-50 rounded-full text-blue-600 mb-4">
              {subject.icon}
            </div>
            <h3 className="font-medium text-gray-900">{subject.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SubjectGrid;
