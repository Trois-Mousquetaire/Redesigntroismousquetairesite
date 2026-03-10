import { Link } from "react-router";
import { Twitter, Linkedin, Github, Dribbble } from "lucide-react";
import { LogoSvg } from "./LogoSvg";

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Services", to: "/services" },
        { label: "Portfolio", to: "/portfolio" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", to: "/services" },
        { label: "Mobile Apps", to: "/services" },
        { label: "Cloud Solutions", to: "/services" },
        { label: "Cybersecurity", to: "/services" },
        { label: "IT Consulting", to: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Careers", to: "#" },
        { label: "Blog", to: "#" },
        { label: "Press", to: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "root@troismousquetaire.tech", to: "#" },
        { label: "+1 (555) 123-4567", to: "#" },
        { label: "123 Tech Avenue, Innovation City", to: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[#08070b]">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <LogoSvg color="#6B6F76" />
            </Link>
            <p className="text-[#6b6f76] leading-relaxed mb-6 text-[14px]">
              Building the future of digital experiences with precision engineering and innovative design.
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
            &copy; {new Date().getFullYear()} Trois Mousquetaire. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[12px] text-[#6b6f76] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[12px] text-[#6b6f76] hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}