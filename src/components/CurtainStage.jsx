import { motion } from "framer-motion";
import "../styles/CurtainStage.css";

const CurtainStage = ({ stageState, onTransitionComplete }) => {
  const getCurtainWidth = () => {
    switch (stageState) {
      case "init-peek":
      case "peek":
        return "35vw";
      case "open":
        return "0vw";
      default:
        return "35vw";
    }
  };
  

  return (
    <div id="stage" className="absolute inset-0 overflow-hidden pointer-events-none z-30">
      <motion.div
        id="curtain-left"
        className="curtain"
        initial={{ width: "50vw" }}
        animate={{ width: getCurtainWidth() }}
        transition={{ duration: 1.5 }}
        onAnimationComplete={() => onTransitionComplete(stageState)}
      />
      <motion.div
        id="curtain-right"
        className="curtain"
        initial={{ width: "50vw" }}
        animate={{ width: getCurtainWidth() }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
};

export default CurtainStage;
