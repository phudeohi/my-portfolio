import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./sections/About";
import Experience from "./sections/Experience";
import CurtainStage from "./components/CurtainStage";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaGithub, FaComments } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const App = () => {
  const [curtainState, setCurtainState] = useState("init-peek");
  const [showMore, setShowMore] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Block hiển thị các liên kết liên hệ (sẽ luôn hiển thị khi showMore = true)
  const ContactLinks = () => (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-2">
        <FaPhone className="text-2xl" />
        <span className="text-2xl text-gray-400">0376148856</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaGithub className="text-2xl" />
        <a
          href="https://github.com/phudeohi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-400 hover:text-white"
        >
          github.com/phudeohi
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <MdEmail className="text-2xl" />
        <a href="mailto:tranquoctri2016@gmail.com" className="text-2xl text-gray-400 hover:text-white">
          tranquoctri2016@gmail.com
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <FaComments className="text-2xl" />
        <a
          href="https://zalo.me/0376148856"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-400 hover:text-white"
        >
          zalo.me/0376148856
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Màn che Curtain */}
      <CurtainStage stageState={curtainState} onTransitionComplete={handleCurtainTransitionComplete} />

      {/** Render theo layout dựa trên chiều màn hình **/}
      {!isPortrait ? (
        // Landscape: giữ nguyên cách hoạt động ban đầu
        <>
          <motion.div
            initial={{ x: 0, width: "100%" }}
            animate={showMore ? { x: "-90%", width: "35%" } : { x: 0, width: "100%" }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center space-y-8 absolute left-1/2 transform -translate-x-1/2 z-20"
          >
            <Header />

            {showMore && (
              <>
                <motion.nav
                  initial={{ opacity: 0, y: -90 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="flex flex-col items-center space-y-2"
                >
                  <button
                    className={`text-2xl px-4 py-2 rounded-2xl border-4 p-6 ${
                      activeSection === "about" ? "bg-gray-700" : "bg-gray-500"
                    }`}
                    onClick={() => setActiveSection("about")}
                  >
                    About
                  </button>
                  <button
                    className={`text-2xl px-4 py-2 rounded-2xl border-4 p-6 ${
                      activeSection === "experience" ? "bg-gray-700" : "bg-gray-500"
                    }`}
                    onClick={() => setActiveSection("experience")}
                  >
                    Experience
                  </button>
                </motion.nav>
                {/* Hiển thị các liên kết ngay khi Show More được ấn */}
                <ContactLinks />
              </>
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
        </>
      ) : (
        // Portrait: sắp xếp nội dung theo chiều dọc
        <div className="flex flex-col items-center w-full space-y-8 p-4">
          <Header />
          {showMore ? (
            <>
              <motion.nav
                initial={{ opacity: 0, y: -90 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col items-center space-y-2 w-full"
              >
                <button
                  className={`text-2xl px-4 py-2 rounded-2xl border-4 p-6 ${
                    activeSection === "about" ? "bg-gray-700" : "bg-gray-500"
                  }`}
                  onClick={() => setActiveSection("about")}
                >
                  About
                </button>
                <button
                  className={`text-2xl px-4 py-2 rounded-2xl border-4 p-6 ${
                    activeSection === "experience" ? "bg-gray-700" : "bg-gray-500"
                  }`}
                  onClick={() => setActiveSection("experience")}
                >
                  Experience
                </button>
              </motion.nav>
              {/* Hiển thị liên kết ngay khi Show More được ấn */}
              <ContactLinks />
              <AnimatePresence mode="wait">
                {activeSection === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                  >
                    <About />
                  </motion.div>
                )}
                {activeSection === "experience" && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                  >
                    <Experience />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            curtainState === "peek" && (
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
            )
          )}
        </div>
      )}
    </div>
  );
};

export default App;
