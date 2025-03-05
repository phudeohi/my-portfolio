import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./sections/About";
import Experience from "./sections/Experience";
import CurtainStage from "./components/CurtainStage";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [curtainState, setCurtainState] = useState("init-peek");
  const [showMore, setShowMore] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurtainState("peek");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleShowMoreClick = () => {
    setCurtainState("open");
  };
  
  const handleCurtainTransitionComplete = (completedState) => {
    if (completedState === "open") {
      setShowMore(true);
    }
  };
  

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Màn che Curtain */}
      <CurtainStage stageState={curtainState} onTransitionComplete={handleCurtainTransitionComplete} />

      {/* Nội dung bên trái */}
      <motion.div
        initial={{ x: 0, width: "100%" }}
        animate={showMore ? { x: "-90%", width: "35%" } : { x: 0, width: "100%" }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center space-y-8 absolute left-1/2 transform -translate-x-1/2 z-20"
      >
        <Header />

        {showMore && (
          <motion.nav
            initial={{ opacity: 0, y: -90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center space-y-2 mt-4"
          >
            <button
              className={`text-2xl px-4 py-2 rounded-2xl border-4 p-6 m-4 ${
                activeSection === "about" ? "bg-gray-700" : "bg-gray-500"
              }`}
              onClick={() => setActiveSection("about")}
            >
              About
            </button>
            <button
              className={`text-2xl px-4 py-2 rounded-2xl border-4 p-6 m-4 ${
                activeSection === "experience" ? "bg-gray-700" : "bg-gray-500"
              }`}
              onClick={() => setActiveSection("experience")}
            >
              Experience
            </button>
          </motion.nav>
        )}

        {!showMore && curtainState === "peek" && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-700 px-6 py-2 rounded mt-4 animate-pulse border-4 p-6 text-2xl"
            onClick={handleShowMoreClick}
          >
            Show More
          </motion.button>
        )}
      </motion.div>

      {/* Nội dung bên phải */}
      {showMore && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute right-0 top-0 h-full w-2/3 flex items-center justify-center z-10"
        >
          <AnimatePresence mode="wait">
            {activeSection === "about" && (
              <motion.div
                key="about"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <About />
              </motion.div>
            )}
            {activeSection === "experience" && (
              <motion.div
                key="experience"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <Experience />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default App;
