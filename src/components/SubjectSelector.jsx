import React from "react";

const subjects = [
  { name: "Physics", icon: "/images/physics.png" },
  { name: "Chemistry", icon: "/images/chemistry.png" },
  { name: "Zoology", icon: "/images/zoology.png" },
  { name: "Botany", icon: "/images/botany.png" },
  { name: "Math", icon: "/images/math.png" },
  { name: "History", icon: "/images/history.png" },
  { name: "Computer", icon: "/images/computer.png" },
  { name: "Geography", icon: "/images/geography.png" },
];

export default function SubjectSelector() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-700 to-green-300 text-white font-sans">
      {/* Subject Section */}
      <section className="py-16 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-10 text-black border-b-2 border-black pb-2">
          Find your Subject
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 bg-[#042A47] p-8 rounded-2xl shadow-xl">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="w-36 h-36 md:w-44 md:h-44 flex flex-col items-center justify-center bg-[#073654] rounded-xl hover:scale-105 transition duration-300 shadow-md"
            >
              <img
                src={subject.icon}
                alt={subject.name}
                className="w-14 h-14 md:w-16 md:h-16 mb-3"
              />
              <span className="text-md md:text-lg font-medium text-center">
                {subject.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#042A47] px-6 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <img
          src="/images/plant1.png"
          alt="Plant Left"
          className="w-24 h-24 md:w-32 md:h-32"
        />

        <div className="text-center md:text-left max-w-2xl">
          <h3 className="text-[32px] font-[500] leading-[100%] tracking-[0] font-[Grenze] mb-4 border-b-2 inline-block pb-1">
            About Us
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            Welcome to our platform! We are a team of final year students
            pursuing our Master's in Computer Applications (MCA), passionate
            about education and technology. Our mission is to bridge the gap
            between proficient teachers and eager students by facilitating
            engaging, accessible, and quality learning experiences.
          </p>
        </div>

        <img
          src="/images/plant2.png"
          alt="Plant Right"
          className="w-24 h-24 md:w-32 md:h-32"
        />
      </section>
    </div>
  );
}
