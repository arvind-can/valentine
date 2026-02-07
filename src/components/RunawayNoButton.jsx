import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RunawayNoButton({ message }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function moveButton() {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    setPosition({ x, y });
  }

  return (
    <motion.button
      className="btn btn-neutral"
      onMouseEnter={moveButton}
      animate={position}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      {message}
    </motion.button>
  );
}
