import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAltText, setIsAltText] = useState(false);

  const toggleText = () => {
    setIsAltText((prev) => !prev);
  };

  const textVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.15, type: "spring", stiffness: 120 },
    }),
    exit: (i) => ({
      y: 100,
      opacity: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  const text1 = "Tran Quoc Phu";
  const text2 = "Minhi";
  const displayText = isAltText ? text2 : text1;

  return (
    <header className="text-center py-10">
      <motion.img
        src={isHovered ? "/huohuo.gif" : "/avatar.png"}
        className="w-75 h-75 mx-auto rounded-full border-2 border-gray-500 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ y: isHovered ? -20 : 0 }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 10,
        }}
      />

      <div onClick={toggleText} className="text-5xl font-bold mt-4 cursor-pointer inline-block relative h-16 leading-none tracking-normal">
        <AnimatePresence mode="popLayout">
          {displayText.split("").map((char, index) => (
            <motion.span
              key={char + index + (isAltText ? "alt" : "main")}
              custom={index}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char }
            </motion.span>
          ))}
        </AnimatePresence>
      </div>


      <p className="text-gray-400 text-2xl mt-2">Frontend/Creative Developer</p>
    </header>
  );
};

export default Header;
