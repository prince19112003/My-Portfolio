import React, { useState, useEffect, useRef } from "react";

const centerLinks = ["home", "about", "work"];

const Navbar = () => {

  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  const navRefs = useRef({});

  // Active section detection
  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 200;

      ["hero", "about", "work", "contact"].forEach((id) => {

        const el = document.getElementById(id);

        if (!el) return;

        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActive(id === "hero" ? "home" : id);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  // Sliding indicator animation
  useEffect(() => {

    const el = navRefs.current[active];

    if (el) {

      setIndicatorStyle({
        width: el.offsetWidth + "px",
        left: el.offsetLeft + "px"
      });

    }

  }, [active]);

  // Lock scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {

    const target = id === "home" ? "hero" : id;

    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth"
    });

    setMobileMenuOpen(false);

  };

  return (
    <>
      {/* NAVBAR */}
      {!mobileMenuOpen && (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>

          <div className="max-w-7xl mx-auto px-4 md:px-6">

            <nav className={`relative flex items-center justify-between px-6 py-3 rounded-full border ${isScrolled
                ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-lg"
                : "bg-transparent border-transparent"
              }`}>

              {/* LEFT LOGO */}
              <div
                onClick={() => scrollToSection("home")}
                className="cursor-pointer text-white font-bold text-lg"
              >
                PRINCE
              </div>

              {/* CENTER MENU */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">

                <div className="relative flex gap-6">

                  {/* Sliding indicator */}
                  <span
                    className="absolute bottom-0 h-[2px] bg-purple-500 transition-all duration-300"
                    style={indicatorStyle}
                  />

                  {centerLinks.map((link) => (
                    <button
                      key={link}
                      ref={(el) => (navRefs.current[link] = el)}
                      onClick={() => scrollToSection(link)}
                      className={`capitalize pb-1 transition ${active === link
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                        }`}
                    >
                      {link}
                    </button>
                  ))}

                </div>

              </div>

              {/* RIGHT BUTTON */}
              <div className="hidden md:block">

                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:scale-105 transition-transform"
                >
                  Contact
                </button>

              </div>

              {/* MOBILE BTN */}
              <button
                className="md:hidden text-white text-2xl"
                onClick={() => setMobileMenuOpen(true)}
              >
                ☰
              </button>

            </nav>

          </div>

        </header>
      )}

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-8 transition-all duration-500 ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none"
        }`}>

        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-8 right-8 text-white text-3xl"
        >
          ✕
        </button>

        {["home", "about", "work", "contact"].map((sec) => (
          <button
            key={sec}
            onClick={() => scrollToSection(sec)}
            className="text-4xl text-white capitalize"
          >
            {sec}
          </button>
        ))}

      </div>
    </>
  );
};

export default Navbar;
