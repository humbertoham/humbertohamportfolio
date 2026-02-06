"use client";

import { motion } from "framer-motion";

type AnimatedLogoProps = {
  className?: string;
};

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
      }}
    >
      <img src="./images/weblogo.svg" alt="Logo" width="100" height="100" />
    </motion.div>
  );
};
