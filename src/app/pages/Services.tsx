import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Layout,
  Search,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description:
        "Robust, scalable, and secure web applications using the latest technologies. From simple websites to complex enterprise platforms.",
      features: [
        "React & Next.js",
        "Node.js Backends",
        "API Integration",
        "Progressive Web Apps",
      ],
      color: "#00A82D",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile solutions with seamless experiences on iOS and Android.",
      features: [
        "React Native",
        "iOS (Swift)",
        "Android (Kotlin)",
        "App Store Optimization",
      ],
      color: "#14CC60",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Expert cloud migration, architecture, and management for scalable and cost-effective infrastructure.",
      features: [
        "AWS / Azure / GCP",
        "DevOps & CI/CD",
        "Serverless Architecture",
        "Microservices",
      ],
      color: "#0097A7",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Optimized database design, migration, and administration for high-performance data systems.",
      features: [
        "SQL & NoSQL",
        "Data Migration",
        "Performance Tuning",
        "Backup & Recovery",
      ],
      color: "#FF6D00",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description:
        "User-centric design that creates intuitive and engaging digital experiences.",
      features: [
        "Wireframing",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
      color: "#e5484d",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discover",
      desc: "We learn about your goals, challenges, and requirements.",
    },
    {
      step: "02",
      title: "Design",
      desc: "We craft the architecture and design for your solution.",
    },
    {
      step: "03",
      title: "Develop",
      desc: "We build with clean, tested, production-ready code.",
    },
    {
      step: "04",
      title: "Deploy",
      desc: "We launch and provide ongoing support and iteration.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-12 md:pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(0,168,45,0.12)_0%,_transparent_70%)]" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
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
        <div className="max-w-[1200px] mx-auto px-6">
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
        <div className="max-w-[1200px] mx-auto px-6">
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
        <div className="max-w-[1200px] mx-auto px-6">
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