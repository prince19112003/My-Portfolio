const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black selection:bg-purple-500/30">

      {/* Animated Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-pink-900/10 rounded-full blur-[100px]"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <div className="space-y-8">
          <Reveal>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-purple-300 mb-6 hover:bg-white/10 transition-colors cursor-default">
              <span className="flex h-2 w-2 relative mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Available for new projects
            </div>
          </Reveal>

          <Reveal>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] text-white tracking-tighter">
              Creative <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 animate-gradient-x">
                Developer.
              </span>
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-white/10 pl-6">
              I build immersive web experiences that merge art, code, and interaction. Currently crafting digital products at the intersection of design and engineering.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })} className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform active:scale-95">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Selected Work</span>
                <div className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>

              <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="group px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors flex items-center">
                Contact Me <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Visual Content */}
        <Reveal className="relative hidden lg:block h-[600px]">
          {/* Abstract Floating Cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 shadow-2xl rotate-[-6deg] hover:rotate-0 transition-all duration-700 group overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-purple-400 font-mono mb-2">LATEST PROJECT</p>
                  <h3 className="text-2xl font-bold text-white">Neon Dashboard</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <ArrowRight className="text-black w-5 h-5 -rotate-45" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[480px] bg-gray-900/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl rotate-[6deg] -z-10 hover:rotate-3 transition-all duration-700 flex flex-col p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-3 font-mono text-xs text-gray-500">
              <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{`{`}</span></p>
              <p className="pl-4">name: <span className="text-green-400">'Prince'</span>,</p>
              <p className="pl-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Three.js'</span>],</p>
              <p className="pl-4">hardWorker: <span className="text-red-400">true</span></p>
              <p className="text-yellow-400">{`}`};</p>
            </div>
          </div>
        </Reveal>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/30" />
      </div>
    </section>
  );
};
 export default Hero