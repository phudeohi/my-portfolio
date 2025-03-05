import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    time: "3 months",
    title: "Ecommerce Bangboo Shop",
    description:
      "Developed an eCommerce website using ASP.NET for backend processing, HTML & CSS for frontend design, and JavaScript for interactive features like dynamic product filtering and shopping cart management.",
    tool: ["ASP.NET", "HTML", "CSS", "JavaScript"],
  },
  {
    time: "3 months",
    title: "Petshop",
    description:
      "Created a pet shop website with a responsive UI using Bootstrap, HTML, and CSS. Integrated JavaScript to enable interactive elements such as product carousels, form validation, and real-time filtering.",
    tool: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

const Experience = () => {
  return (
    <section className="max-w-2xl mx-auto py-8">
      <h2 className="text-4xl font-semibold">Experience</h2>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 75, scale: 1 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.3}}
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.3 },
          }}
          className="mt-6 grid grid-cols-[auto_1fr] gap-4 p-4 border rounded-lg shadow-md cursor-pointer"
        >
          <p className="text-gray-400 min-w-max text-2xl">{exp.time}</p>
          <div>
            <h3 className="font-semibold text-2xl">{exp.title}</h3>
            <p className="text-gray-500 text-xl">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.tool.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Experience;
