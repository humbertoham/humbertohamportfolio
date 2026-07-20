'use client'
import { useTranslation } from 'react-i18next';
import Portfolio from "@/components/portfolio";
import { getProjects } from '@/lib/projects';

export default function Home() {
  const { i18n } = useTranslation();
  const projects = getProjects(i18n.resolvedLanguage || i18n.language);

  return (
    <>
      <Portfolio projects={projects} />
    </>
  );
}
