import React from "react";
import Reveal from "./Reveal";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-black border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8">
            Have an idea? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Let's build it together.
            </span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, my inbox is always open.
          </p>
        </Reveal>

        <Reveal>
          <a
            href="mailto:hello@prince.dev"
            className="group inline-flex items-center justify-center px-12 py-6 bg-white text-black font-bold text-xl rounded-full hover:scale-105 transition-transform"
          >
            <Mail className="mr-3" /> Say Hello
          </a>
        </Reveal>

        <Reveal>
          <div className="mt-20 flex justify-center space-x-10">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Github size={28} />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Linkedin size={28} />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <ExternalLink size={28} />
            </a>
          </div>
        </Reveal>

        <footer className="mt-24 text-gray-600 text-sm">
          <p>
            © 2024 Prince. Crafted with <span className="text-red-500">♥</span>{" "}
            and React.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
