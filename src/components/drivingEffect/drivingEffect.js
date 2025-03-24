import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './DrivingEffect.css';

const DrivingEffect = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 2]);

  return (
    <div className="scene">
      <motion.div className="road" style={{ scale }} />
    </div>
  );
};

export default DrivingEffect;
