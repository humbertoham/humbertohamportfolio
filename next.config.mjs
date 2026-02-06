/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true, // Si estás usando la nueva app directory de Next.js
    },
  };
  
  export default nextConfig; // Exporta directamente el objeto sin envolverlo en una propiedad
  