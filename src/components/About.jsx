const About = () => {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <Reveal className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">About Me</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500"></div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Column: Image & Decorative */}
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900 border border-white/10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Current Status</p>
                      <p className="text-white font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Open to Work
                      </p>
                    </div>
                    <Globe className="text-purple-400 w-8 h-8 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Content & Grid */}
          <div className="space-y-8">
            <Reveal>
              <h3 className="text-2xl font-bold text-white mb-4">
                I design and build <span className="text-purple-400">digital products</span> for brands and startups.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                My journey began with a curiosity for how things work on the web, which led me to dive deep into JavaScript, React, and eventually 3D web technologies.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I don't just write code; I care about the feeling of the product. From smooth animations to intuitive layouts, I focus on the details that make a user's experience memorable.
              </p>
            </Reveal>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Reveal className="delay-100">
                <div className="p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-colors group">
                  <Layers className="text-purple-400 mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-bold text-white mb-1">15+</h3>
                  <p className="text-sm text-gray-500">Projects Completed</p>
                </div>
              </Reveal>
              <Reveal className="delay-200">
                <div className="p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-colors group">
                  <Sparkles className="text-blue-400 mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-bold text-white mb-1">3+</h3>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
