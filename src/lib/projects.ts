import enProjects from '../../public/locales/en/projects.json';
import esProjects from '../../public/locales/es/projects.json';
import { getSupportedLanguage } from './language';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  technologies: string[];
}

const projectsByLanguage = {
  en: enProjects as Project[],
  es: esProjects as Project[],
};

export const getProjects = (language?: string): Project[] => {
  const localizedProjects = new Map(
    projectsByLanguage[getSupportedLanguage(language)].map((project) => [project.id, project])
  );

  return projectsByLanguage.en.map((project) => ({
    ...project,
    ...localizedProjects.get(project.id),
  }));
};
