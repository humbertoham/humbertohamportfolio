"use client";

import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

type AnimatedLogoProps = {
  className?: string;
};

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className }) => {
  const { t } = useTranslation();

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
      <img src="./images/weblogo.svg" alt={t('logoAlt')} width="100" height="100" />
    </motion.div>
  );
};
