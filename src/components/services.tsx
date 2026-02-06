// components/ServicesSection.tsx
"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { ServiceItem } from "./type";
import Link from 'next/link';
import { useTranslation } from "next-i18next";

interface ServicesSectionProps {
  services: ServiceItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
  hover: {
    y: -10,
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="relative pt-8 md:pt-14 px-4 sm:px-6 lg:px-8 bg-[var(--menta)]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-darkgreen pop mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {t('our')}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative bg-darkgreen rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-0 rounded-2xl bg-darkgreen opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <service.icon className="w-12 h-12 text-yellow mb-6" />
                <h3 className="text-xl md:text-2xl font-black tw pop mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <Link href="/contact">
                <motion.div
                  className="inline-flex items-center underline gap-2 text-white font-medium"
                  whileHover={{ x: 5 }}
                >
                  <span>{t('learn')}</span>
                  <FiArrowUpRight className="w-5 text-yellow h-5" />
                </motion.div>
                </Link>
              </div>

              {/* Floating decoration */}
            
            </motion.div>
          ))}
        </motion.div>

      
      </div>
    </section>
  );
}