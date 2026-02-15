import React from "react";

import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyScroll from "./components/CompanyScroll";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white cursor-none sm:cursor-auto selection:bg-purple-500 selection:text-white">

      {/* Global CSS */}
      <style>{`
        .cursor-nonee { cursor: none; }

        @media (max-width: 640px) {
          .cursor-none { cursor: auto; }
        }

        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-move 5s ease infinite;
        }

        @keyframes gradient-move {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>

      {/* Components */}
      <Cursor />
      <Navbar />
      <Hero />
      <CompanyScroll />
      <About />
      <Work />
      <Contact />

    </div>
  );
}
