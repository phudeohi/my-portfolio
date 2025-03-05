import React from 'react';
import { motion } from 'framer-motion';

const FireEffect = () => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      transition={{ duration: 1 }}
      className="absolute top-0 right-0 h-full w-1/2 pointer-events-none"
      style={{ animation: 'flicker 0.8s infinite' }}
    />
  );
};

export default FireEffect;
