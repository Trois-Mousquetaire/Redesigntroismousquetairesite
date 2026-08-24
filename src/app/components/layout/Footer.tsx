import { Link } from "react-router";
import { Twitter, Linkedin, Github, Dribbble } from "lucide-react";
import { LogoSvg } from "./LogoSvg";

export function Footer() {
  const footerSections = [
    {
      title: "Explore",
      links: [
        { label: "Services", to: "/services" },
        { label: "Portfolio", to: "/portfolio" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
      ],
    },
    {
      title: "Case Studies",
      links: [
        { label: "Sub Settle", to: "/SubSettle" },
        { label: "quotiv", to: "/Quotiv" },
        { label: "Yu Fu Kane", to: "/YuFuKane" },
        { label: "Stack Tower", to: "/StackTower" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", to: "/privacy" },
        { label: "Terms of Service", to: "/terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[#08070b]">
      <div className="max-w-[1440px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <LogoSvg color="#6B6F76" />
            </Link>
            <p className="text-[#6b6f76] leading-relaxed mb-6 text-[14px]">
              A product design and engineering collective. We design and build digital products end to end — from the first idea to the shipped app.
            </p>
            <div className="flex items-center gap-2">
              {[Linkedin, Github, Dribbble].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-md flex items-center justify-center text-[#6b6f76] hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4
                className="text-[#6b6f76] uppercase tracking-wider mb-4 text-[14px]"
                style={{ fontWeight: 500 }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[14px] text-[#8a8f98] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#6b6f76] text-[14px]">
            &copy; {new Date().getFullYear()} Trois Mousquetaires. All rights reserved.
          </p>
          <p className="text-[12px] text-[#6b6f76]">
            Design &amp; engineering, end to end.
          </p>
        </div>
      </div>
    </footer>
  );
}