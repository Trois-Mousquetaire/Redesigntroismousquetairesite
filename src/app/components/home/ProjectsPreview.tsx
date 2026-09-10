import subSettleImage from "../../../imports/image_1-1.png";
import quotivImage from "figma:asset/e9817a352ae6c8dedc03d920398f4b3596edfff0.png";
import yuFuKaneImage from "../../../imports/Featured_image___1920_1080.jpg";
import novaImage from "../../../imports/stack_tower_home_hero_1920x1080.png";
import quotivCoverImage from "../../../imports/image_1.png";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Sub Settle",
    description:
      "Somebody always covers the taxi. Someone else grabs the groceries. By Sunday, nobody remembers who's up and who's down — and asking feels a little awkward. Sub Settle remembers for you, so no one has to be the person with the notes app.",
    image: subSettleImage,
    tags: ["Mobile App", "Finance"],
    color: "#00A82D",
    link: "/SubSettle",
  },
  {
    id: 2,
    title: "Quotiv",
    description:
      "quotiv is a mobile invoicing app for freelancers and small traders. It sends quotes and invoices as PDFs, chases payment for you, and keeps every record encrypted on your own Google Drive — never on a server. I designed the product end to end: 98 screens, 16 print templates, and a 28-component design system built without a UI kit.",
    image: quotivCoverImage,
    tags: ["Mobile App", "Lifestyle"],
    color: "#0097A7",
    link: "/Quotiv",
  },
  {
    id: 3,
    title: "Yu › Fu × Kane",
    description:
      "A grid-based chase puzzle where you collect before you get caught. Yu Fu Kane pairs an arcade-neon interface with a strict, token-driven design system — 57 colour variables, 8 component sets, and a responsive board that recalculates itself for every screen size from a 360pt Android to a 430pt Pro Max.",
    image: yuFuKaneImage,
    tags: ["Mobile App", "Experience"],
    color: "#FFB300",
    link: "/YuFuKane",
  },
  {
    id: 4,
    title: "Stack Tower",
    description:
      "Tap to drop, land it clean, climb. A one-tap arcade stacker with four distinct modes, a seeded daily challenge, and a progression system of coins, XP levels, and achievements. Designed and built end to end, including the store identity.",
    image: novaImage,
    tags: ["Mobile App", "Analytics"],
    color: "#7C3AED",
    link: "/StackTower",
  },
];

export function ProjectsPreview() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#08070b]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#00A82D] uppercase tracking-wider mb-3 text-[16px]"
            style={{ fontWeight: 500 }}
          >
            Our Projects
          </p>
          <h2
            className="text-[36px] md:text-[44px] tracking-[-0.03em] text-white leading-tight"
            style={{ fontWeight: 600 }}
          >
            Built with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A82D] to-[#14CC60]">
              precision
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08070b] via-[#08070b]/40 to-transparent" />

                {/* Cover link */}
                {project.link && (
                  <Link
                    to={project.link}
                    aria-label={`View ${project.title} case study`}
                    className="absolute inset-0 z-20"
                  />
                )}

                {/* Number badge */}
                <div
                  className="absolute top-4 left-4 w-8 h-8 rounded-lg flex items-center justify-center text-[14px] text-white border border-white/[0.1]"
                  style={{
                    fontWeight: 600,
                    backgroundColor: `${project.color}20`,
                  }}
                >
                  {project.id}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-5">
                {project.link && (
                  <Link
                    to={project.link}
                    aria-label={`View ${project.title} case study`}
                    className="absolute inset-0 z-20"
                  />
                )}
                <div className="flex items-center gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/[0.08] text-[#8a8f98]"
                      style={{ fontWeight: 500 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="text-[18px] text-white tracking-[-0.02em] mb-2"
                  style={{ fontWeight: 600 }}
                >
                  {project.title}
                </h3>
                <p className="text-[13px] text-[#6b6f76] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}08, transparent 40%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 text-[14px] text-[#00A82D] hover:text-[#14CC60] transition-colors"
            style={{ fontWeight: 500 }}
          >
            View all projects
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}