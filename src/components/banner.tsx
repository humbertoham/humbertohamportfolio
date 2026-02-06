'use client';
import { useTranslation } from 'react-i18next';
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
export default function Banner() {
  const { t } = useTranslation();
  return (
    <div className="flex ban flex-col md:flex-row items-center justify-between pl-6 md:pl-12 pb-12">
      {/* Texto */}
      <div className="flex-1">
        <h1 className="banh">{t('vision')}</h1>
        <h1 className="banh">{t('code')}</h1>
      </div>

      {/* Imagen */}
      <div className="flex-1 flex flex-col items-center mt-6 md:mt-0">
        <img 
          src='./images/herosection.svg' 
          className=" h-60 md:h-3/4  lg:h-3/4 xl:w-[700px]  max-w-full"
          alt="Hero Section"
        />
        <Link href='/portfolio' className='pl-4 learn block mt-2' >{t('learn')} <IoIosArrowForward className='inline'/> </Link>
      </div>
    </div>
  );
}