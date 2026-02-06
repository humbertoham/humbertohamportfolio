'use client';
import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaRegPaperPlane } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const ContactForm = () => {
  const { t } = useTranslation("contactForm");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setError(""); // Clear error when checkbox is checked
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isChecked) {
      setError(t("contactForm.form.error"));
      return;
    }
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[var(--menta)] pb-10 px-4">
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-[var(--green)] rounded-xl shadow-lg p-10 transition-all duration-300 hover:shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {isSubmitted ? (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.h2
              className="text-[var(--yellow)] text-3xl font-bold mb-8 text-center pop"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {t("contactForm.submitted.title")}
            </motion.h2>
            <p className="text-[var(--white)] text-lg font-medium lat">
              {t("contactForm.submitted.message")}
            </p>
          </motion.div>
        ) : (
          <>
            <motion.h2
              className="text-[var(--yellow)] text-3xl font-bold mb-8 text-center pop"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {t("contactForm.form.title")}
            </motion.h2>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <label
                htmlFor="name"
                className="block text-[var(--white)] font-medium mb-2 pop"
              >
                <FaUser className="text-[var(--white)] mr-3 inline" />
                {t("contactForm.form.fields.name.label")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contactForm.form.fields.name.placeholder")}
                required
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--white)] lat"
              />
            </motion.div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <label
                htmlFor="email"
                className="block text-[var(--white)] font-medium mb-2 pop"
              >
                <FaEnvelope className="text-[var(--white)] mr-3 inline" />
                {t("contactForm.form.fields.email.label")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contactForm.form.fields.email.placeholder")}
                required
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--white)] lat"
              />
            </motion.div>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              <label
                htmlFor="message"
                className="block text-[var(--white)] font-medium mb-2 pop"
              >
                <MdMessage className="text-[var(--white)] mr-3 inline" />
                {t("contactForm.form.fields.message.label")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contactForm.form.fields.message.placeholder")}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--white)] lat"
              />
            </motion.div>
            <motion.div
  className="mb-6 flex flex-col items-center"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
>
  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      id="terms"
      checked={isChecked}
      onChange={handleCheckboxChange}
      className="accent-[var(--yellow)] mb-5 sm:mb-0"
    />
    <label
      htmlFor="terms"
      className="text-[var(--white)] font-medium lat text-left flex-1" 
    >
      <Trans
        components={{
          1: <a href="/termsandconditions" target="_blank" className="underline hover:text-yellow" />,
          2: <a href="/privacypolicy" target="_blank" className="underline hover:text-yellow" />,
        }}
      >
        {t("contactForm.form.checkbox.label")}
      </Trans>
    </label>
  </div>
  {error && <p className="text-red-500 text-center mt-2">{error}</p>}
</motion.div>



<div className="flex justify-center">
  <motion.button
    type="submit"
    className="bg-[var(--darkgreen)] text-[var(--yellow)] max-w-sm font-semibold py-3 px-4 rounded-xl hover:bg-[var(--green)] hover:text-[var(--white)] focus:outline-none focus:ring-2 focus:ring-[var(--yellow)] transition-all duration-100 lat"
    whileHover={{
      backgroundColor: "var(--yellow)",
      color: "var(--darkgreen)",
    }}
    whileTap={{ scale: 0.95 }}
  >
    <FaRegPaperPlane className="mr-2 inline" />
    {t("contactForm.button.submit")}
  </motion.button>
</div>
          </>
        )}
      </motion.form>
    </div>
  );
};

export default ContactForm;
