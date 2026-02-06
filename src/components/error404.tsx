'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
const Error404: React.FC = () => {
  const { t } = useTranslation('errors'); // Asegúrate de que el namespace 'errors' esté configurado en tus archivos de traducción

  const title = t('404.title', '404 - Page Not Found');
  const description = t('404.description', 'The page you are looking for does not exist or has been moved.');

  return (
    <div className="bg-darkgreen text-white p-6 md:p-12 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 pop">{title}</h1>
        <p className="text-base md:text-lg leading-relaxed mb-6 lat">{description}</p>
        <Link
          href="/"
          className="text-yellow hover:underline text-lg font-semibold "
        >
          {t('404.goHome', 'Go to Homepage')}  <IoIosArrowForward className='inline'/>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
