'use client'
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';  // or your i18n library's equivalent
import Portfolio from "@/components/portfolio";

export default function Home() {
  const { i18n } = useTranslation(); // Get the current language
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Dynamically load the JSON based on the current language
    const loadProjects = async () => {
      const language = i18n.language || 'en'; // Default to 'en' if language is not set
      const response = await import(`../../../public/locales/${language}/projects.json`);
      setProjects(response.default);
    };

    loadProjects();
  }, [i18n.language]); // Reload when the language changes

  return (
    <>
      <Portfolio projects={projects} />
    </>
  );
}
