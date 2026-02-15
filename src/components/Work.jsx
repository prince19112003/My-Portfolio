import React, { useState } from "react";
import { ArrowRight, ExternalLink, Github, Layers, Code2, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Ultra",
      category: "Full Stack",
      tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1607799275518-d58665d099db?auto=format&fit=crop&q=80",
      description:
        "A high-performance shopping platform featuring real-time inventory management, secure payments, and a comprehensive admin dashboard.",
      demo: "#",
      code: "#"
    },
    {
      id: 2,
      title: "Neon Portfolio",
      category: "Frontend",
      tags: ["React", "Three.js", "GSAP", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
      description:
        "An award-winning personal site featuring immersive 3D elements, fluid motion, and high-performance WebGL renderers.",
      demo: "#",
      code: "#"
    },
    {
      id: 3,
      title: "DataViz Analytics",
      category: "UI/UX & Data",
      tags: ["D3.js", "TypeScript", "Tailwind", "Python"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      description:
        "A complex financial data visualization tool transforming raw analytics into interactive, actionable insights for fintech clients.",
      demo: "#",
      code: "#"
    },
    {
      id: 4,
      title: "AI Chat Interface",
      category: "AI Engineering",
      tags: ["OpenAI API", "React", "Socket.io"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      description:
        "Real-time conversational AI interface with streaming responses, markdown support, and context-aware memory management.",
      demo: "#",
      code: "#"
    },
    {
      id: 5,
      title: "Crypto Dashboard",
      category: "Web3",
      tags: ["Solidity", "Ethers.js", "React"],
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80",
      description:
        "Decentralized finance dashboard for tracking portfolio performance, swapping tokens, and analyzing market trends.",
      demo: "#",
      code: "#"
    },
    {
      id: 6,
      title: "Task Master Pro",
      category: "Productivity",
      tags: ["Vue.js", "Firebase", "Pinia"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80",
      description:
        "Collaborative project management tool with Kanban boards, real-time updates, and team analytics.",
      demo: "#",
      code: "#"
    },
  ];

  // Unique Categories Calculation
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Filtering Logic
  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  // Pagination/Show All Logic
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="work" className="py-24 bg-black relative min-h-screen">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-purple-500"></span>
              <span className="text-purple-400 text-sm font-mono tracking-widest uppercase flex items-center gap-2">
                <Sparkles size={14} /> Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Works.</span>
            </h2>
            <p className="text-gray-400 max-w-lg text-lg">
              Building digital experiences that merge art with engineering.
            </p>
          </div>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white group cursor-pointer">
            View Github
            <Github size={18} className="text-gray-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* --- CATEGORY TABS --- */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false); // Reset 'Show All' when changing category
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                  ? "bg-white/10 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="group flex flex-col relative rounded-3xl bg-gray-900/40 border border-white/10 overflow-hidden hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >

              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold text-white z-10 flex items-center gap-2 shadow-lg">
                  <Layers size={12} className="text-purple-400" />
                  {project.category}
                </div>

                {/* Hover Overlay Actions (Desktop) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <a href={project.demo} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform flex items-center justify-center shadow-xl" title="View Live">
                    <ExternalLink size={24} />
                  </a>
                  <a href={project.code} className="p-3 bg-black/80 text-white border border-white/20 rounded-full hover:bg-black hover:scale-110 transition-all flex items-center justify-center shadow-xl" title="View Code">
                    <Github size={24} />
                  </a>
                </div>
              </div>

              {/* Content Card */}
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Decorative Top Border Gradient */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed h-10">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] uppercase font-mono tracking-wider text-gray-300 group-hover:border-white/10 group-hover:bg-white/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Actions (Always visible for mobile friendliness) */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                  <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-purple-500/20 hover:text-purple-300 text-sm font-medium text-gray-300 transition-all border border-transparent hover:border-purple-500/30">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href={project.code} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium text-gray-300 transition-all border border-transparent hover:border-white/10">
                    <Code2 size={16} /> Code
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Show All Toggle Button (Only visible if more than 3 projects in current category) */}
        {filteredProjects.length > 3 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white font-medium shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={18} className="group-hover:-translate-y-1 transition-transform" /></>
              ) : (
                <>View All Projects <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" /></>
              )}
            </button>
          </div>
        )}

      </div>

      {/* Styles for animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Work;