const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = ['About', 'Work', 'Contact'];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${
      isScrolled ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-black tracking-tighter text-white cursor-pointer group relative"
        >
          PRINCE
          <span className="text-purple-500 absolute -bottom-2 right-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-4xl">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="px-6 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all relative group overflow-hidden rounded-full hover:bg-white/5"
            >
              <span className="relative z-10">{item}</span>
            </button>
          ))}
          <button 
             onClick={() => scrollToSection('contact')}
             className="ml-6 px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-30 transition-transform duration-500 md:hidden flex flex-col items-center justify-center space-y-8 ${
        mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {navLinks.map((item) => (
          <button 
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-4xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            {item}
          </button>
        ))}
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-8 right-6 text-white"
        >
          Close
        </button>
      </div>
    </nav>
  );
};
export default Navbar