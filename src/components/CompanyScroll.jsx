const CompanyScroll = () => {
  const technologies = [
    { name: 'React', icon: <Code2 /> },
    { name: 'Node.js', icon: <Terminal /> },
    { name: 'Three.js', icon: <Globe /> },
    { name: 'Tailwind', icon: <Palette /> },
    { name: 'Next.js', icon: <Layout /> },
    { name: 'Figma', icon: <Palette /> },
    { name: 'TypeScript', icon: <Code2 /> },
    { name: 'GraphQL', icon: <Zap /> },
  ];

  return (
    <div className="w-full py-16 bg-black border-y border-white/5 relative overflow-hidden group">
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

      <div className="flex w-[200%] animate-scroll group-hover:[animation-play-state:paused]">
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="flex items-center space-x-3 mx-12 group/item cursor-default transition-all hover:scale-110 hover:text-white">
            <span className="text-gray-600 group-hover/item:text-purple-400 transition-colors">{tech.icon}</span>
            <span className="text-xl font-bold text-gray-600 group-hover/item:text-white transition-colors">{tech.name}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};
 export default CompanyScroll