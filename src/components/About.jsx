import React, { useState, useTransition } from "react";
import {
  Code2,
  GraduationCap,
  Briefcase,
  User,
  ArrowRight
} from "lucide-react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <Code2 size={18} />,
    content: (
      <div className="grid grid-cols-2 gap-4">
        {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Framer Motion", "Three.js"].map((skill) => (
          <div key={skill} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-default group">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:bg-purple-400 group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)] transition-all"></span>
            {skill}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    icon: <Briefcase size={18} />,
    content: (
      <ul className="space-y-4">
        <li className="relative pl-6 border-l border-white/10 group">
          <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></div>
          <h4 className="text-white font-bold group-hover:text-blue-400 transition-colors">Senior Frontend Dev</h4>
          <p className="text-sm text-gray-500">TechCorp Inc. | 2022 - Present</p>
          <p className="text-gray-400 text-sm mt-1">Led a team of 5 developers to build a SaaS platform serving 10k+ users.</p>
        </li>
        <li className="relative pl-6 border-l border-white/10 group">
          <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gray-600 group-hover:scale-125 transition-transform"></div>
          <h4 className="text-white font-bold group-hover:text-gray-300 transition-colors">Web Developer</h4>
          <p className="text-sm text-gray-500">Creative Agency | 2020 - 2022</p>
          <p className="text-gray-400 text-sm mt-1">Developed award-winning websites for international clients.</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: <GraduationCap size={18} />,
    content: (
      <ul className="space-y-4">
        <li className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300">
          <h4 className="text-white font-bold">B.Tech in Computer Science</h4>
          <p className="text-sm text-gray-400">Delhi Technological University</p>
          <p className="text-xs text-gray-500 mt-1">2016 - 2020</p>
        </li>
        <li className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300">
          <h4 className="text-white font-bold">Full Stack Certification</h4>
          <p className="text-sm text-gray-400">Meta Backend Developer Course</p>
          <p className="text-xs text-gray-500 mt-1">2021</p>
        </li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden">

      {/* CSS Animations */}
      <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.4s ease-out forwards;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>

      {/* Decorative Background Blobs with Pulse */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* --- Left Column: Image --- */}
          <div className="relative group">
            {/* Background Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-70"></div>

            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-900 border border-white/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl max-w-[200px] animate-float shadow-xl">
                <div className="text-xs text-gray-300 mb-1">Experience</div>
                <div className="text-2xl font-bold text-white">3+ Years</div>
              </div>
            </div>
          </div>

          {/* --- Right Column: Content --- */}
          <div className="mt-8 md:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Me</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I am a passionate <span className="text-white font-semibold">Frontend Developer</span> with a knack for creating visually stunning and user-friendly web applications. I blend code with creativity to build seamless digital experiences.
            </p>

            {/* Tabs Navigation */}
            <div className="flex gap-2 mb-8 border-b border-white/10 pb-1">
              {TAB_DATA.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleTabChange(t.id)}
                  className={`
                                    flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all relative
                                    ${tab === t.id ? "text-white" : "text-gray-500 hover:text-gray-300"}
                                `}
                >
                  {t.icon}
                  {t.title}

                  {/* Active Tab Indicator Line with Animation */}
                  {tab === t.id && (
                    <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-purple-500 rounded-full animate-fade-in-up"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content with Animation Key */}
            <div className="min-h-[200px]">
              <div key={tab} className="animate-fade-in-up">
                {TAB_DATA.find((t) => t.id === tab)?.content}
              </div>
            </div>

            {/* Action Button */}
            <button className="mt-8 flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all group">
              Download Resume <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;