"use client";
import { useState, useEffect } from "react";
import CTAComponent from "@/components/cta";
import FAQSection from "@/components/faq";
import ServicesSection from "@/components/services";
import { FiCloud, FiCode, FiSmartphone, FiTrendingUp, FiDatabase, FiSettings } from "react-icons/fi";

const services = [
  {
    id: "1",
    title: "IT Consulting",
    description: "Expert guidance on software architecture, technology stacks, and digital transformation.",
    icon: FiSettings,
  },
  {
    id: "2",
    title: "Web Development",
    description: "High-performance, responsive, and SEO-optimized web applications.",
    icon: FiCode,
  },
  {
    id: "3",
    title: "Mobile App Development",
    description: "Cross-platform and native mobile apps with seamless user experiences.",
    icon: FiSmartphone,
  },
  {
    id: "4",
    title: "Cloud Solutions",
    description: "Scalable, secure, and cost-efficient cloud infrastructure and migration services.",
    icon: FiCloud,
  },
  {
    id: "5",
    title: "Data Engineering",
    description: "Optimized databases, ETL pipelines, and big data analytics for business intelligence.",
    icon: FiDatabase,
  },
  {
    id: "6",
    title: "AI & Machine Learning",
    description: "Advanced AI solutions to enhance decision-making and automate processes.",
    icon: FiTrendingUp,
  },
];

const servicesES = [
  {
    id: "1",
    title: "IT Consulting",
    description: "Asesoría experta en arquitectura de software, stacks tecnológicos y transformación digital.",
    icon: FiSettings,
  },
  {
    id: "2",
    title: "Web Development",
    description: "Aplicaciones web de alto rendimiento, responsivas y optimizadas para SEO.",
    icon: FiCode,
  },
  {
    id: "3",
    title: "Mobile App Development",
    description: "Aplicaciones móviles multiplataforma y nativas con experiencias de usuario fluidas.",
    icon: FiSmartphone,
  },
  {
    id: "4",
    title: "Cloud Solutions",
    description: "Infraestructura en la nube escalable, segura y rentable, y servicios de migración.",
    icon: FiCloud,
  },
  {
    id: "5",
    title: "Data Engineering",
    description: "Bases de datos optimizadas, pipelines de ETL y análisis de big data para inteligencia empresarial.",
    icon: FiDatabase,
  },
  {
    id: "6",
    title: "AI & Machine Learning",
    description: "Soluciones avanzadas de IA para mejorar la toma de decisiones y automatizar procesos.",
    icon: FiTrendingUp,
  },
];

export default function Home() {
  const [selectedServices, setSelectedServices] = useState(services);

  useEffect(() => {
    // Detecta si el idioma del navegador inicia con "es"
    if (navigator.language.startsWith("es")) {
      setSelectedServices(servicesES);
    }
  }, []);

  return (
    <>
      <ServicesSection services={selectedServices} />
      <CTAComponent />
      <FAQSection />
    </>
  );
}
