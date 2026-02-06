'use client';
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const Licensing: React.FC = () => {
  const { t } = useTranslation('licensing');

  // Obtén el título principal y las secciones desde las traducciones
  const title = t('licensing.title');
  const sections = t('licensing.sections', { returnObjects: true }) as {
    title: string;
    content: string;
    items?: string[];
  }[];

  return (
    <div className="bg-darkgreen text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center pop">{title}</h1>
        {sections.map((section, index) => (
          <section className="mb-8" key={index}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 pop">{section.title}</h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed lat">

                <Trans
                                i18nKey={`licensing.sections.${index}.content`}
                                defaults={section.content} // Esto asegura que si la clave falla, usa el contenido estático
                                components={{
                                  1: <a href="mailto:contact@pinkponk.dev" className="text-yellow underline" target="_blank" rel="noopener noreferrer"></a>,
                                }}
                              >
                                {section.content}
                              </Trans>


            </p>
            {section.items && (
              <ul className="list-disc text-gray-400 list-inside ml-4">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Licensing;
