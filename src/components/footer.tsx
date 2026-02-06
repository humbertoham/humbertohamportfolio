import { useTranslation } from 'react-i18next';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-darkgreen pt-11 shadow text-white">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    {/* Redes sociales */}
                    <div className="flex py-2 lg:py-0  space-x-4 items-center">
                       
                        <a href="https://www.linkedin.com/in/humbertohamd/" target='blank_' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaLinkedin className='text-xl'/>
                            <span className="sr-only">Linkedin</span>
                        </a>
                        <a href="https://github.com/humbertoham" target='blank_' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaGithub className='text-xl'/>
                            <span className="sr-only">Github</span>
                        </a>
                       
                    </div>    

                    {/* Links del footer */}
                    <ul className="flex flex-wrap items-center py-2 text-sm font-medium text-gray-400 lg:py-0">
                        
                        <li>
                            <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className="hover:underline me-4 md:me-6">Portfolio</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline me-4 md:me-6">About me</Link>
                        </li>
                       
                        <li>
                            <Link href="/contact" className="hover:underline">{t('contact')}</Link>
                        </li>
                    </ul>
                </div>

                <hr className="my-4 line sm:mx-auto lg:my-8" />

                <span className="block text-sm text-white text-center">© 2026 <Link href="/" className="hover:underline">Humberto Ham</Link>. {t('all')}</span>
            </div>
        </footer>
    );
};

export default Footer;

