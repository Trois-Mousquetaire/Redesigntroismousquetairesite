import { TeamMember } from "../components/about/TeamMember";
import { motion } from "motion/react";
import { Target, Lightbulb, Users } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Athos",
      role: "Chief Technology Officer",
      bio: "With over 15 years in systems architecture, Athos leads the technical vision with precision and clarity.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Porthos",
      role: "Lead Full Stack Developer",
      bio: "A powerhouse of engineering capability, Porthos builds the backend systems powering our most complex applications.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Aramis",
      role: "Head of Product Design",
      bio: "Focused on elegance and usability, Aramis ensures every solution is beautiful and intuitive.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Integrity",
      description:
        "We build honest software. Clean code, transparent process, no shortcuts.",
      color: "#00A82D",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay on the cutting edge so you can focus on what matters most.",
      color: "#14CC60",
    },
    {
      icon: Users,
      title: "Unity",
      description:
        "Your success is our success. We operate as an extension of your team.",
      color: "#FFB300",
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
              About us
            </p>
            <h1
              className="text-[40px] md:text-[56px] tracking-[-0.04em] text-white leading-[1.1] mb-5"
              style={{ fontWeight: 600 }}
            >
              The team behind
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A82D] to-[#14CC60]">
                the innovation
              </span>
            </h1>
            <p className="text-[#8a8f98] max-w-xl mx-auto leading-relaxed text-[16px]">
              United by purpose, driven by craft. We're a collective of engineers, designers, and strategists building what's next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-[28px] md:text-[36px] tracking-[-0.03em] text-white mb-6"
              style={{ fontWeight: 600 }}
            >
              Our mission
            </h2>
            <p className="text-[16px] text-[#8a8f98] leading-relaxed">
              To empower businesses with technology that is as reliable as it is innovative. We believe in the power of thoughtful engineering to solve real-world problems. Like the musketeers of legend, we value honor, integrity, and mastery of our craft.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-[#00A82D] uppercase tracking-wider mb-3 text-[16px]"
              style={{ fontWeight: 500 }}
            >
              Our people
            </p>
            <h2
              className="text-[28px] md:text-[36px] tracking-[-0.03em] text-white"
              style={{ fontWeight: 600 }}
            >
              Meet the team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-[#00A82D] uppercase tracking-wider mb-3 text-[16px]"
              style={{ fontWeight: 500 }}
            >
              Our values
            </p>
            <h2
              className="text-[28px] md:text-[36px] tracking-[-0.03em] text-white"
              style={{ fontWeight: 600 }}
            >
              What drives us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon size={22} style={{ color: value.color }} />
                </div>
                <h3
                  className="text-[18px] text-white mb-3"
                  style={{ fontWeight: 600 }}
                >
                  {value.title}
                </h3>
                <p className="text-[14px] text-[#6b6f76] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}