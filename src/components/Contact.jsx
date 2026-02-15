import React from 'react'; const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Have an idea? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Let's build it together.
            </span>
          </h2>
        </Reveal>

        <Reveal className="delay-100">
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </Reveal>

        <Reveal className="delay-200">
          <a
            href="mailto:hello@prince.dev"
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-black font-bold text-xl rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-300">
              <Mail className="mr-3" /> Say Hello
            </span>
            <div className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
          </a>
        </Reveal>

        <Reveal className="delay-300">
          <div className="mt-20 flex justify-center space-x-10">
            {[
              { icon: <Github size={28} />, href: "#" },
              { icon: <Linkedin size={28} />, href: "#" },
              { icon: <ExternalLink size={28} />, href: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-1 hover:scale-110 duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </Reveal>

        <footer className="mt-24 text-gray-600 text-sm font-medium">
          <p>© 2024 Prince. Crafted with <span className="text-red-500">♥</span> and React.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
