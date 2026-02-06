'use client'
import { Project } from '@/components/portfolio';
import projectsData from '../../../../public/locales/en/projects.json'; // Your JSON data
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import CTAComponent from '@/components/cta';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = (projectsData as Project[]).find(p => p.id === params.id);

  if (!project) {
    return (
      <section className="min-h-screen py-10" style={{ backgroundColor: '#e9ffdb' }}>
        <div className="container mx-auto px-4">
          <h2 className="pop text-3xl text-center" style={{ color: '#172b2d' }}>
            Project not found
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-10" style={{ backgroundColor: '#e9ffdb' }}>
      <div className="container mx-auto px-4">
        <Link 
          href="/portfolio" 
          className="lat inline-flex items-center mb-8 text-lg hover:underline"
          style={{ color: '#004643' }}
        >
          <FiArrowLeft className="mr-2" />
          Back to Portfolio
        </Link>

        <div className="rounded-2xl shadow-xl overflow-hidden" style={{ backgroundColor: '#faf4d3' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="pop text-4xl font-bold mb-4" style={{ color: '#172b2d' }}>
              {project.title}
            </h1>
            <p className="lat text-lg mb-6" style={{ color: '#004643' }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech:any) => (
                <span
                  key={tech}
                  className="lat px-3 py-1.5 text-sm font-medium rounded-full"
                  style={{
                    backgroundColor: '#d1ac00',
                    color: '#faf4d3',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CTAComponent/>
    </section>
  );
}