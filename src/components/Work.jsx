const Work = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Ultra",
      category: "Full Stack",
      tags: ["Next.js", "Stripe", "Prisma"],
      image: "https://images.unsplash.com/photo-1607799275518-d58665d099db?auto=format&fit=crop&q=80",
      description: "A high-performance shopping platform with real-time inventory and AI recommendations."
    },
    {
      id: 2,
      title: "Neon Portfolio",
      category: "Frontend",
      tags: ["React", "Three.js", "GSAP"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
      description: "An award-winning personal site featuring immersive 3D elements and fluid motion."
    },
    {
      id: 3,
      title: "DataViz Dashboard",
      category: "UI/UX Design",
      tags: ["D3.js", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      description: "Complex data visualization tool for fintech analytics with dark mode support."
    }
  ];

  return (
    <section id="work" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">

        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Selected Work</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div>
            <button className="hidden md:flex items-center text-gray-400 hover:text-white transition-colors group pb-2">
              See all projects <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} className={`delay-${index * 100}`}>
              <div className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-white/10 cursor-pointer">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center text-purple-400 text-sm font-bold uppercase tracking-wider">
                      View Case Study <ArrowRight size={14} className="ml-2" />
                    </div>
                  </div>
                </div>

                {/* Always visible category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-medium text-white group-hover:opacity-0 transition-opacity">
                  {project.category}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center text-white border-b border-white pb-1">
            See all projects <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
