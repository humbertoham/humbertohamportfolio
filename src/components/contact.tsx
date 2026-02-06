'use client';

import { useState } from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { FaUser, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const ContactForm = () => {
  const { t } = useTranslation("contactForm");

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "8992113924";

    const whatsappMessage = `
👋 Hi! You received a new message from your website:

👤 Name: ${formData.name}
💬 Message:
${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );

    setIsSubmitted(true);
    setFormData({ name: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[var(--menta)] px-4 pb-10">
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-[var(--green)] rounded-2xl shadow-xl p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {isSubmitted ? (
          <div className="text-center text-white">
            <FaWhatsapp className="mx-auto text-5xl text-green-400 mb-4" />
            <h2 className="text-3xl font-bold pop mb-4">
              Message sent!
            </h2>
            <p className="lat opacity-90">
              WhatsApp has been opened. I’ll reply shortly 👌
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-white text-3xl font-bold mb-2 text-center pop">
              Contact me on WhatsApp
            </h2>

            <p className="text-white/80 text-center mb-8 lat flex items-center justify-center gap-2">
              <FaWhatsapp className="text-green-400" />
              This form will open WhatsApp
            </p>

            {/* Name */}
            <div className="mb-6">
              <label className="text-white pop block mb-2">
                <FaUser className="inline mr-2 text-yellow" />
                Your name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bgw"
              />
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="text-white pop block mb-2">
                <MdMessage className="inline mr-2 text-yellow" />
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bgw"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <motion.button
                type="submit"
                className="bg-[#25D366] text-white font-black py-3 px-8 rounded-xl pop flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-2xl" />
                Send via WhatsApp
              </motion.button>
            </div>
          </>
        )}
      </motion.form>
    </div>
  );
};

export default ContactForm;
