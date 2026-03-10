import { ExternalLink, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export default function Portfolio() {
  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      description:
        "A comprehensive financial analytics dashboard with real-time data visualization and secure transaction processing for a leading investment firm.",
      image:
        "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXJrJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc3MTgyODQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "D3.js", "Node.js", "Socket.io"],
      color: "#00A82D",
    },
    {
      title: "ShopEasy Mobile App",
      category: "Mobile App",
      description:
        "Cross-platform e-commerce application with AR product preview, seamless checkout, and AI-powered recommendations.",
      image:
        "https://images.unsplash.com/photo-1702479744031-2bf1f4bdfd8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXAlMjBkYXJrfGVufDF8fHx8MTc3MTgyODQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "Firebase", "Stripe", "ARKit"],
      color: "#14CC60",
    },
    {
      title: "Neuromorphic AI Interface",
      category: "AI & Machine Learning",
      description:
        "Advanced neural network visualization tool for data scientists, featuring real-time training metrics and interactive model manipulation.",
      image:
        "https://images.unsplash.com/photo-1568607184887-647b905c0966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGRhdGElMjB2aXN1YWxpemF0aW9uJTIwZGFya3xlbnwxfHx8fDE3NzE5NDY4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Python", "TensorFlow", "React", "WebGL"],
      color: "#00E5FF",
    },
    {
      title: "MediSecure Cloud",
      category: "Cloud Infrastructure",
      description:
        "HIPAA-compliant cloud architecture migration for a healthcare provider, achieving 99.99% uptime and zero data breaches.",
      image:
        "https://images.unsplash.com/photo-1743850765951-d298a7a762af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwc2VydmVyJTIwcm9vbSUyMGRhcmt8ZW58MXx8fHwxNzcxODI4NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["AWS", "Terraform", "Docker", "Kubernetes"],
      color: "#0097A7",
    },
    {
      title: "GreenEnergy IoT",
      category: "IoT Solution",
      description:
        "Smart grid monitoring system connecting thousands of solar panels to a central management hub for optimal energy distribution.",
      image:
        "https://images.unsplash.com/photo-1647683014917-80af32c28228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBJb1QlMjB0ZWNobm9sb2d5JTIwbmlnaHR8ZW58MXx8fHwxNzcxODI4NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["IoT", "Python", "MQTT", "React"],
      color: "#FFB300",
    },
    {
      title: "Nexus Blockchain Ledger",
      category: "Blockchain Technology",
      description:
        "Decentralized ledger interface ensuring transparency and security for supply chain logistics across global partners.",
      image:
        "https://images.unsplash.com/photo-1642432556591-72cbc671b707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCbG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwZGFya3xlbnwxfHx8fDE3NzE5NDY4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Solidity", "Web3.js", "Ethereum", "Next.js"],
      color: "#9C27B0",
    },
  ];

  const testimonials = [
    {
      quote: "Trois Mousquetaire delivered a scalable and secure solution that exceeded our expectations. Their attention to detail and technical expertise are unmatched.",
      name: "Sarah Jenkins",
      role: "CTO at FinTech Corp",
      image: "https://images.unsplash.com/photo-1771072426488-87e6bbcc0cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzIwNDI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      quote: "The team's ability to translate complex requirements into an intuitive user interface was impressive. Our user engagement has increased by 40% since launch.",
      name: "David Chen",
      role: "Product Director at MediSecure",
      image: "https://images.unsplash.com/photo-1770894807442-108cc33c0a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0JTIwZGFyayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcyMDQyNzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      quote: "Working with Trois Mousquetaire was a game-changer for our startup. They brought a level of professionalism and innovation that helped us secure our Series A funding.",
      name: "Elena Rodriguez",
      role: "Founder at Nexus Innovations",
      image: "https://images.unsplash.com/photo-1638983752157-052aa1f15bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZW50cmVwcmVuZXVyJTIwcG9ydHJhaXQlMjBkYXJrJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzcyMDQyNzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
              Portfolio
            </p>
            <h1
              className="text-[40px] md:text-[56px] tracking-[-0.04em] text-white leading-[1.1] mb-5"
              style={{ fontWeight: 600 }}
            >
              Work that speaks
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A82D] to-[#14CC60]">
                for itself
              </span>
            </h1>
            <p className="text-[#8a8f98] max-w-xl mx-auto leading-relaxed text-[16px]">
              A showcase of projects where precision engineering meets creative vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[32px] md:text-[40px] font-semibold text-white mb-4">Our Projects</h2>
              <p className="text-[#8a8f98] max-w-2xl mx-auto">
                Discover how we've helped our clients transform their digital presence and achieve their business goals through innovative technology solutions.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden hover:bg-white/[0.03] hover:border-white/[0.1] transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08070b] via-[#08070b]/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#08070b]/50 backdrop-blur-sm">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#08070b] text-[14px] rounded-lg hover:bg-white/90 transition-colors"
                      style={{ fontWeight: 500 }}
                    >
                      View Case Study
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p
                    className="uppercase tracking-wider mb-2 text-[12px]"
                    style={{ color: project.color, fontWeight: 600 }}
                  >
                    {project.category}
                  </p>
                  <h3
                    className="text-[20px] text-white mb-3 tracking-[-0.01em]"
                    style={{ fontWeight: 600 }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[14px] text-[#8a8f98] leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] text-[#8a8f98] border border-white/[0.06]"
                        style={{ fontWeight: 500 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white/[0.02] border-y border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[32px] md:text-[40px] font-semibold text-white mb-4">What Our Clients Say</h2>
              <p className="text-[#8a8f98] max-w-2xl mx-auto">
                Trust is earned through consistent delivery and transparent communication. Here's what our partners have to say about working with us.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 rounded-xl bg-[#08070b] border border-white/[0.06] flex flex-col h-full"
              >
                <div className="absolute top-8 right-8 text-[#00A82D]/20">
                  <Quote size={40} />
                </div>
                <p className="text-[#f7f8f8] leading-relaxed mb-8 relative z-10 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/[0.1]"
                  />
                  <div>
                    <h4 className="text-white font-medium text-[16px]">{testimonial.name}</h4>
                    <p className="text-[#8a8f98] text-[13px]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative p-12 md:p-16 rounded-2xl bg-gradient-to-br from-[#00A82D]/10 via-[#14CC60]/5 to-transparent border border-[#00A82D]/20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,_rgba(0,168,45,0.15)_0%,_transparent_70%)]" />
            <h2
              className="text-[28px] md:text-[36px] tracking-[-0.03em] text-white mb-4 relative z-10"
              style={{ fontWeight: 600 }}
            >
              Let's build your next project
            </h2>
            <p className="text-[15px] text-[#8a8f98] mb-8 max-w-md mx-auto relative z-10">
              Ready to deploy? Let's discuss your vision and bring it to life.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#00A82D] text-white text-[15px] rounded-lg hover:bg-[#00C234] transition-all relative z-10"
              style={{ fontWeight: 500 }}
            >
              Start a conversation
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