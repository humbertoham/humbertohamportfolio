"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex items-center justify-between w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg md:text-xl font-bold tw pop ">{question}</h3>
        <div className="text-yellow text-xl">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="text-gray-400 lat mt-2">{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const { t } = useTranslation("faq");
  // Cast the translated FAQs as an array of FAQ objects
  const faqs = t("faqs", { returnObjects: true }) as Array<{ question: string; answer: string }>;

  return (
    <section className="py-12 bg-darkgreen" id="FAQ"> 
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl pop tw font-bold text-center mb-8">
          {t("title", "Frequently Asked Questions")}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
