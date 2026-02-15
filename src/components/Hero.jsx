import Reveal from "./Reveal";
import { ArrowRight, ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";

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
      className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden bg-black"


    >

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute w-[800px] h-[800px] bg-purple-600/20 blur-[180px] rounded-full left-[5%] top-[10%] animate-float"></div>

        <div className="absolute w-[700px] h-[700px] bg-blue-600/20 blur-[160px] rounded-full right-[5%] bottom-[10%] animate-float-reverse"></div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">

        <Reveal>
          <div className="inline-block mb-8 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full text-purple-300">
            ✨ Creative Frontend Developer
          </div>
        </Reveal>

        {/* 🔥 FIXED HEADLINE WITH TYPING */}
        <Reveal>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight text-white">

            Crafting Clean

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">

              {text}
              <span className="animate-pulse">|</span>

            </span>

            With Motion

          </h1>
        </Reveal>

        <Reveal>
          <p className="text-gray-400 mt-8 text-lg max-w-2xl mx-auto leading-relaxed">
            I build modern web experiences combining interaction,
            smooth animation and minimal design.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex justify-center gap-6 mt-12">

            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-5 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform duration-300"
            >
              View Work
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-10 py-5 border border-white/20 rounded-full flex items-center hover:bg-white/5 transition"
            >
              Contact
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </button>

          </div>
        </Reveal>

      </div>

      {/* Floating card */}
      <div className="hidden lg:block absolute right-[10%] top-[25%] backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl animate-float-card">
        <p className="text-xs text-purple-400">FEATURED PROJECT</p>
        <h3 className="text-white font-bold">Ultra Portfolio</h3>
      </div>

      {/* Scroll icon */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/40" />
      </div>

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-50px); }
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
