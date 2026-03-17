import { Globe, Smartphone, Cloud } from "lucide-react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function ServicesPreview() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "High-performance web applications built with React, Next.js, and modern frameworks.",
      color: "#00A82D",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Cross-platform native experiences for iOS and Android with seamless UX.",
      color: "#14CC60",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description:
        "Scalable infrastructure and serverless solutions on AWS, Azure, and GCP.",
      color: "#0097A7",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08070b] via-[#0c0b10] to-[#08070b]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p
              className="text-[#00A82D] uppercase tracking-wider mb-3 text-[16px]"
              style={{ fontWeight: 500 }}
            >
              What we do
            </p>
            <h2
              className="text-[36px] md:text-[44px] tracking-[-0.03em] text-white leading-tight"
              style={{ fontWeight: 600 }}
            >
              Purpose-built solutions
              <br />
              <span className="text-[#6b6f76]">for modern challenges</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-[14px] text-[#8a8f98] hover:text-white transition-colors"
            style={{ fontWeight: 500 }}
          >
            View all services
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon size={20} style={{ color: service.color }} />
              </div>
              <h3
                className="text-[16px] text-white mb-2"
                style={{ fontWeight: 600 }}
              >
                {service.title}
              </h3>
              <p className="text-[14px] text-[#6b6f76] leading-relaxed">
                {service.description}
              </p>

              {/* Subtle bottom gradient line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}