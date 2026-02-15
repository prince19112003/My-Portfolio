import React from "react";
import {
  Code2,
  Terminal,
  Globe,
  Palette,
  Layout,
  Zap,
  Database,
  Layers,
} from "lucide-react";

const CompanyScroll = () => {

  const technologies = [
    { name: "React", icon: <Code2 />, color: "text-blue-400" },
    { name: "Node.js", icon: <Terminal />, color: "text-green-500" },
    { name: "Three.js", icon: <Globe />, color: "text-white" },
    { name: "Tailwind", icon: <Palette />, color: "text-cyan-400" },
    { name: "Next.js", icon: <Layout />, color: "text-white" },
    { name: "Figma", icon: <Palette />, color: "text-pink-500" },
    { name: "TypeScript", icon: <Code2 />, color: "text-blue-500" },
    { name: "GraphQL", icon: <Zap />, color: "text-pink-400" },
    { name: "PostgreSQL", icon: <Database />, color: "text-blue-300" },
    { name: "Docker", icon: <Layers />, color: "text-blue-600" },
  ];

  return (
    <section className="w-full py-24 bg-black relative overflow-hidden flex flex-col items-center justify-center">

    
      {/* Scroll Container */}
      <div
        className="w-full max-w-7xl mx-auto overflow-hidden relative group"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >

        <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">

          {[...technologies, ...technologies].map((tech, index) => (
            <TechItem key={index} tech={tech} />
          ))}

        </div>

      </div>

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

    </section>
  );
};

// Tech Item Component
const TechItem = ({ tech }) => (
  <div className="group/item flex flex-col items-center gap-4 mx-10 cursor-pointer transition-all duration-300">

    {/* Icon */}
    <div
      className={`p-4 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover/item:scale-110 group-hover/item:border-white/20 group-hover/item:bg-white/10 ${tech.color} grayscale group-hover/item:grayscale-0`}
    >
      {React.cloneElement(tech.icon, { size: 32, strokeWidth: 1.5 })}
    </div>

    {/* Name */}
    <span className="text-sm font-semibold text-gray-500 group-hover/item:text-white transition-colors duration-300">
      {tech.name}
    </span>

  </div>
);

export default CompanyScroll;
