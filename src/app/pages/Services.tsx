import {
  Layout,
  Layers,
  Code,
  Smartphone,
  Compass,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Seo } from "../components/Seo";

export default function Services() {
  const services = [
    {
      icon: Compass,
      title: "Product Strategy",
      description:
        "We pressure-test the idea before a pixel is drawn — framing the problem, mapping the flows, and deciding what to build first so the product ships with a point of view.",
      features: [
        "Discovery & research",
        "User flows & IA",
        "Scope & roadmap",
        "Prototyping",
      ],
      color: "#00A82D",
    },
    {
      icon: Layout,
      title: "Product Design",
      description:
        "Interfaces that feel obvious. We design end-to-end experiences — from the first wireframe to polished, production-ready screens across every state.",
      features: [
        "UX & UI design",
        "Interaction design",
        "Light & dark themes",
        "High-fidelity prototypes",
      ],
      color: "#14CC60",
    },
    {
      icon: Layers,
      title: "Design Systems",
      description:
        "One system that keeps a product consistent as it grows. Tokens, components, and documentation wired straight to code so design and engineering speak the same language.",
      features: [
        "Design tokens",
        "Component libraries",
        "Build specs",
        "Accessibility",
      ],
      color: "#0097A7",
    },
    {
      icon: Code,
      title: "Web Engineering",
      description:
        "Fast, accessible, maintainable web apps built the way modern products should be — typed, tested, and ready to scale.",
      features: [
        "React & TypeScript",
        "Design-to-code",
        "Performance",
        "APIs & integrations",
      ],
      color: "#7C3AED",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Cross-platform apps that feel native on both iOS and Android, shipped from the same product and design foundation.",
      features: [
        "React Native",
        "iOS & Android",
        "Offline-first",
        "App store delivery",
      ],
      color: "#FFB300",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discover",
      desc: "We learn your goals, users, and constraints — and agree on what success looks like.",
    },
    {
      step: "02",
      title: "Design",
      desc: "We shape the flows, interface, and system that make the product feel effortless.",
    },
    {
      step: "03",
      title: "Build",
      desc: "We engineer it with clean, typed, production-ready code.",
    },
    {
      step: "04",
      title: "Ship",
      desc: "We launch, measure, and keep iterating alongside you.",
    },
  ];

  return (
    <div>
      <Seo
        title="Services"
        description="From product design and design systems to web, mobile, and cloud engineering — Trois Mousquetaires designs and builds high-performance digital products end to end."
        path="/services"
      />
      {/* Hero */}
      <section className="relative pt-12 md:pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(0,168,45,0.12)_0%,_transparent_70%)]" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-[#00A82D] uppercase tracking-wider mb-4 text-[16px]"
              style={{ fontWeight: 500 }}
            >
              Services
            </p>
            <h1
              className="text-[40px] md:text-[56px] tracking-[-0.04em] text-white leading-[1.1] mb-5"
              style={{ fontWeight: 600 }}
            >
              Everything you need to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A82D] to-[#14CC60]">
                ship with confidence
              </span>
            </h1>
            <p className="text-[#8a8f98] max-w-xl mx-auto leading-relaxed text-[16px]">
              From concept to deployment, we provide end-to-end technology solutions tailored to your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-7 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 flex flex-col h-full"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon
                    size={20}
                    style={{ color: service.color }}
                  />
                </div>
                <h3
                  className="text-[17px] text-white mb-2"
                  style={{ fontWeight: 600 }}
                >
                  {service.title}
                </h3>
                <p className="text-[14px] text-[#6b6f76] leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="border-t border-white/[0.06] pt-5 space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                      <span className="text-[#8a8f98] text-[14px]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-[#00A82D] uppercase tracking-wider mb-3 text-[16px]"
              style={{ fontWeight: 500 }}
            >
              Our process
            </p>
            <h2
              className="text-[28px] md:text-[36px] tracking-[-0.03em] text-white"
              style={{ fontWeight: 600 }}
            >
              How we work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[2.625fr_0.5fr_2.625fr_0.5fr_2.625fr_0.5fr_2.625fr] gap-5 md:gap-0 md:items-center">
            {process.map((item, index) => (
              <div key={index} className="contents">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center group hover:bg-white/[0.04] hover:border-white/[0.1] transition-all h-full"
                >
                  <div
                    className="text-[32px] tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-b from-[#00A82D] to-[#00A82D]/30 mb-3"
                    style={{ fontWeight: 700 }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-[16px] text-white mb-2"
                    style={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#6b6f76] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>

                {/* Connector Arrow */}
                {index < process.length - 1 && (
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight size={28} className="text-[#3a3a4a]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="relative p-12 md:p-16 rounded-2xl bg-gradient-to-br from-[#00A82D]/10 via-[#14CC60]/5 to-transparent border border-[#00A82D]/20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,_rgba(0,168,45,0.15)_0%,_transparent_70%)]" />
            <h2
              className="text-[28px] md:text-[36px] tracking-[-0.03em] text-white mb-4 relative z-10"
              style={{ fontWeight: 600 }}
            >
              Have a project in mind?
            </h2>
            <p className="text-[#8a8f98] mb-8 max-w-md mx-auto relative z-10 text-[16px]">
              Let's discuss how we can help you build something exceptional.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#00A82D] text-white text-[15px] rounded-lg hover:bg-[#00C234] transition-all relative z-10"
              style={{ fontWeight: 500 }}
            >
              Get in touch
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}