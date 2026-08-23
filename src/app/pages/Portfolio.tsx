import { ExternalLink, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Seo } from "../components/Seo";
import subSettleImage from "../../imports/image_1-1.png";
import quotivImage from "../../imports/image_1.png";
import yuFuKaneImage from "../../imports/Featured_image___1920_1080.jpg";
import stackTowerImage from "../../imports/stack_tower_home_hero_1920x1080.png";

export default function Portfolio() {
  const projects = [
    {
      title: "Sub Settle",
      category: "Mobile App · Finance",
      description:
        "Split the bill, not the friendship. A shared-expense app designed end to end — six ways to split, live balances, spending insights, and a full light/dark design system across ~157 screens.",
      image: subSettleImage,
      tags: ["Product Design", "Design System", "Light & Dark", "~157 Screens"],
      color: "#00A82D",
      link: "/SubSettle",
    },
    {
      title: "quotiv",
      category: "Mobile App · Invoicing",
      description:
        "Invoicing that never leaves your phone. Quotes and invoices as PDFs, payment chasing, and records encrypted on your own Google Drive — never a server. 98 screens, 16 print templates, a 28-component system built without a UI kit.",
      image: quotivImage,
      tags: ["Product Design", "React Native", "Design System", "98 Screens"],
      color: "#0097A7",
      link: "/Quotiv",
    },
    {
      title: "Yu Fu Kane",
      category: "Mobile Game · Puzzle",
      description:
        "A turn-based chase puzzle where you collect before you get caught. Arcade-neon interface, a strict token-driven design system, and a responsive board that recalculates itself for every screen size.",
      image: yuFuKaneImage,
      tags: ["Product Design", "UI Design", "Figma", "26 Screens"],
      color: "#FFB300",
      link: "/YuFuKane",
    },
    {
      title: "Stack Tower",
      category: "Mobile Game · Arcade",
      description:
        "Tap to drop, land it clean, climb. A one-tap arcade stacker with four modes, a seeded daily challenge, and a progression loop of coins, XP and achievements. Designed and built end to end, including the store identity.",
      image: stackTowerImage,
      tags: ["Game Design", "UI", "Visual Identity", "Store Assets"],
      color: "#38BDF8",
      link: "/StackTower",
    },
  ];

  const testimonials = [
    {
      quote: "They didn't just design screens — they thought through the whole product. The design system they handed us mapped straight to code, and our first release shipped weeks ahead of plan.",
      name: "Sarah Jenkins",
      role: "Founder, consumer app",
      image: "https://images.unsplash.com/photo-1771072426488-87e6bbcc0cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzIwNDI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      quote: "Every detail was considered — light and dark themes, edge cases, accessibility. It's rare to work with a team that treats a two-minute mobile session with this much care.",
      name: "David Chen",
      role: "Product lead, mobile games",
      image: "https://images.unsplash.com/photo-1770894807442-108cc33c0a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0JTIwZGFyayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcyMDQyNzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      quote: "From research to shipped app, they owned the product thinking. The privacy-first architecture they proposed became our whole positioning — and it's the reason customers trust us.",
      name: "Elena Rodriguez",
      role: "Founder, SaaS startup",
      image: "https://images.unsplash.com/photo-1638983752157-052aa1f15bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZW50cmVwcmVuZXVyJTIwcG9ydHJhaXQlMjBkYXJrJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzcyMDQyNzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div>
      <Seo
        title="Portfolio"
        description="Selected work from Trois Mousquetaire — Sub Settle, quotiv, Yu Fu Kane, and Stack Tower. Product design, design systems, and end-to-end builds across apps and games."
        path="/portfolio"
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
              Real products, designed and built end to end — from shared-expense apps to arcade games.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[32px] md:text-[40px] font-semibold text-white mb-4">Selected work</h2>
              <p className="text-[#8a8f98] max-w-2xl mx-auto">
                A handful of products we designed and built end to end. Hover any card and open the case study to see the thinking behind it.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#08070b] text-[14px] rounded-lg hover:bg-white/90 transition-colors"
                      style={{ fontWeight: 500 }}
                    >
                      View Case Study
                      <ExternalLink size={14} />
                    </Link>
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
        <div className="max-w-[1440px] mx-auto px-6">
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
        <div className="max-w-[1440px] mx-auto px-6">
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