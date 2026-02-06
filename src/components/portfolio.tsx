// components/Portfolio.tsx
'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiCode, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  technologies: string[];
}

interface PortfolioProps {
  projects: Project[];
}

const Portfolio = ({ projects }: PortfolioProps) => {
    const { t } = useTranslation('portfolio');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const handleTechClick = (tech: string) => {
    if (selectedTechs.includes(tech)) {
      setSelectedTechs(selectedTechs.filter(t => t !== tech));
    } else {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some(tech => tech.toLowerCase().includes(query)
    ));
    
    const matchesTechs = selectedTechs.every(tech => 
      project.technologies.includes(tech)
    );

    return matchesSearch && matchesTechs;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 }
    },
    hover: { scale: 1.03 }
  };

  const techVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 }
  };

  return (
    <motion.section 
      className="pb-10"
      style={{ backgroundColor: '#e9ffdb' }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Search and Filters */}
        <motion.div 
          className="mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="max-w-xl mx-auto">
            {/* Selected Techs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedTechs.map((tech) => (
                <motion.div
                  key={tech}
                  className="lat px-3 py-1.5 text-sm rounded-full flex items-center gap-2 cursor-pointer"
                  style={{
                    backgroundColor: '#004643',
                    color: '#faf4d3',
                  }}
                  variants={techVariants}
                  onClick={() => handleTechClick(tech)}
                >
                  <FiCode className='text-yellow' />
                  {tech}
                  <FiX className="ml-1" />
                </motion.div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl" 
                style={{ color: '#d1ac00' }}/>
              <input
                type="text"
                placeholder={t('search')}
                className="lat w-full px-6 py-4 text-lg rounded-3xl shadow-lg focus:outline-none pl-12"
                style={{
                  backgroundColor: '#172b2d',
                  color: '#faf4d3',
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="rounded-2xl shadow-xl overflow-hidden"
              style={{ backgroundColor: '#172b2d' }}
            >
              <Link href={`${project.link}`} target='_blank' className="block">
                {/* Project Image */}
                {project.image && (
  <div className="relative h-48">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
  </div>
)}

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="pop text-2xl font-bold mb-3" 
                    style={{ color: '#faf4d3' }}>
                    {project.title}
                  </h3>
                  <p className="lat text-gray-400 text-base mb-4" 
                   >
                    {project.description}
                  </p>
                </div>
              </Link>

              {/* Technologies */}
              <div className="px-6 pb-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="lat px-3 py-1.5 text-sm rounded-full flex items-center gap-2 cursor-pointer"
                      style={{
                        backgroundColor: selectedTechs.includes(tech) 
                          ? '#faf4d3' 
                          : '#004643',
                        color: selectedTechs.includes(tech) 
                        ? '#004643'
                        : '#faf4d3'  ,
                      }}
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleTechClick(tech);
                      }}
                    >
                      <FiCode className='text-yellow' />
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="lat text-xl" style={{ color: '#172b2d' }}>
              {t('notfound')}
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Portfolio;