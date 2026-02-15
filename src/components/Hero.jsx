import { ArrowRight, ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

// --- INLINED REVEAL COMPONENT (Fixing the import error) ---
const Reveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      {children}
    </div>
  );
};

const Hero = () => {
  const words = ["Modern Interfaces", "Creative Websites", "Interactive UI"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(words[index].substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex === words[index].length) {
          setDeleting(true);
        }
      } else {
        setText(words[index].substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-16"
    >
      {/* Background - Adjusted for Mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-purple-600/20 blur-[80px] md:blur-[180px] rounded-full left-[5%] top-[10%] animate-float"></div>
        <div className="absolute w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-blue-600/20 blur-[80px] md:blur-[160px] rounded-full right-[5%] bottom-[10%] animate-float-reverse"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">

        {/* Badge */}
        <Reveal>
          <div className="inline-block mb-6 md:mb-8 px-4 py-1.5 md:px-6 md:py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full text-purple-300 text-xs md:text-sm font-medium">
            ✨ Creative Frontend Developer
          </div>
        </Reveal>

        {/* 🔥 RESPONSIVE HEADLINE WITH TYPING */}
        <Reveal>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] md:leading-[0.95] tracking-tight text-white">
            Crafting Clean

            {/* Typing Container with Min Height to prevent jumping */}
            <span className="block min-h-[1.2em] md:min-h-[1em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x my-2 md:my-0">
              {text}
              <span className="animate-pulse ml-1 text-white">|</span>
            </span>

            With Motion
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 mt-6 md:mt-8 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            I build modern web experiences combining interaction,
            smooth animation and minimal design.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 md:mt-12 w-full sm:w-auto">
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-sm md:text-base"
            >
              View Work
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-8 py-4 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/5 transition w-full sm:w-auto text-sm md:text-base text-white"
            >
              Contact
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </Reveal>

      </div>

      {/* Floating card - Hidden on Mobile */}
      <div className="hidden lg:block absolute right-[5%] xl:right-[10%] top-[25%] backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl animate-float-card">
        <p className="text-xs text-purple-400 font-bold tracking-wider mb-1">FEATURED PROJECT</p>
        <h3 className="text-white font-bold text-lg">Ultra Portfolio</h3>
        <div className="mt-2 flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Scroll icon */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/40 w-6 h-6 md:w-8 md:h-8" />
      </div>

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float 14s ease-in-out infinite reverse;
        }
        .animate-float-card {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
};

export default Hero;