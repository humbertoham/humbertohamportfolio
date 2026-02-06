'use client';
import { useTranslation } from 'react-i18next';
import { IoIosArrowForward } from "react-icons/io";

export default function Banner() {
  const { t } = useTranslation('about');
  
  return (
    <section className="bg-[var(--darkgreen)] pt-8 md:pt-14 px-6  md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Heading Section */}
        <header className="space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <IoIosArrowForward className="text-white text-2xl" aria-hidden="true" />
          </div>
          
          <div className="relative">
            <span className="block abouth font-black tw pop leading-tight">
              {t('banner.heading.line1')}
            </span>
            <span className="block abouth font-black tw pop leading-tight">
            {t('banner.heading.line2')}
              <span className="text-yellow ml-2">.</span>
            </span>
          </div>
        </header>

        {/* Content Section */}
        <article className="space-y-6">
          <div className="border-l-4 by pl-6">
            <p className="text-white text-lg md:text-xl leading-relaxed">
              {t('banner.content.intro')}
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-white text-base md:text-lg leading-relaxed opacity-90">
            {t('banner.content.paragraph1')}
            </p>

            <p className="text-white text-base md:text-lg leading-relaxed opacity-90">
            {t('banner.content.paragraph2')}
            </p>

            <p className="text-white text-base md:text-lg leading-relaxed opacity-90">
            {t('banner.content.paragraph3')}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}