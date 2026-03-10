import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Github, Dribbble } from "lucide-react";
import { LogoSvg, LogoIconSvg } from "./LogoSvg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08070b]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <LogoSvg className="hidden md:block h-7 w-auto" />
            <LogoIconSvg className="md:hidden w-auto" style={{ height: `${32 * (90 / 88)}px` }} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.filter((link) => link.name !== "Contact" && link.name !== "Home").map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm rounded-md transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-[#8a8f98] hover:text-white"
                  }`
                }
                style={{ fontWeight: 500 }}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-white/[0.08] rounded-md"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 font-[Unbounded] text-center uppercase text-[14px]">{link.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 text-sm bg-[#00A82D] text-white rounded-lg hover:bg-[#00C234] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#8a8f98] hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 bg-[#08070b]/80 backdrop-blur-xl z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Menu content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-0 z-50 md:hidden flex flex-col items-center justify-center overflow-hidden bg-[#08070b]"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg text-[#8a8f98] hover:text-white hover:bg-white/[0.06] transition-colors z-10"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col items-center gap-2 w-full px-8">
                {navLinks.filter((link) => link.name !== "Contact" && link.name !== "Home").map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-4 rounded-lg transition-all text-[#8a8f98] hover:text-white hover:bg-white/[0.04] [&.active]:text-white [&.active]:bg-white/[0.06] text-[22px]"
                    style={{ fontWeight: 500, fontFamily: "'Unbounded', sans-serif" }}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="pt-6 w-full">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block text-center px-4 py-4 bg-[#00A82D] text-white rounded-lg hover:bg-[#00C234] transition-colors text-[22px]"
                    style={{ fontWeight: 500, fontFamily: "'Unbounded', sans-serif" }}
                  >
                    Contact
                  </Link>
                </div>
                {/* Social Media Icons */}
                <div className="flex items-center gap-4 pt-8">
                  {[Linkedin, Github, Dribbble].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 rounded-md flex items-center justify-center text-[#6b6f76] hover:text-white hover:bg-white/[0.06] transition-all"
                    >
                      <Icon size={36} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}