import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import Link from 'next/link';

const CTAComponent = () => {
  const { t } = useTranslation('');

  return (
    <section className="relative py-20 px-4 bg-[var(--menta)]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="pop text-5xl font-black mb-6 text-[var(--darkgreen)]">
          {t('title')}
        </h2>
        
        {/* Description */}
        <p className="lat text-xl mb-12 max-w-2xl mx-auto text-[var(--green)] opacity-80">
          {t('description')}
        </p>

        {/* Main CTA Button */}
        <div className="inline-block relative group">
        <Link href="/contact" passHref>
          <motion.button
            className="flex items-center gap-2 px-8 py-5 rounded-xl bg-[var(--darkgreen)] tw font-black pop text-xl transition-transform hover:scale-105 active:scale-95"
          >
            {t('buttonText')}
            <FiMail className="w-6 h-6 text-yellow" />
          </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTAComponent;
