import React from "react";
import { motion } from "framer-motion";

const aboutParagraphs = [
  "I am an aspiring Frontend Developer taking my first steps into the world of web development. Although I don't have much experience yet, my passion for learning and exploring new technologies drives me every day.",
  "I am eager to build intuitive and responsive user interfaces, and every project is an opportunity for me to grow and improve. I approach each challenge with curiosity and a willingness to dive deep into modern tools and frameworks.",
  "I look forward to collaborating on innovative projects, learning best practices, and constantly expanding my skill set. I believe that every experience, no matter how small, is a stepping stone towards mastering the art of frontend development."
];

const About = ({ setShowExperience }) => {
  return (
    <section className="max-w-2xl mx-auto text-center py-8">
      <h2 className="text-3xl font-semibold">About Me</h2>
      {aboutParagraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, x: 75, scale: 1 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
          transition={{ duration: 0.3}}
          className="text-gray-400 mt-4 text-2xl"
        >
          {paragraph}
        </motion.p>
      ))}
    </section>
  );
};

export default About;
