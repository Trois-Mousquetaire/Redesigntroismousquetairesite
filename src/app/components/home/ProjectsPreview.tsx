import subSettleImage from "figma:asset/51d60ff3b5e81c8a4738170e693585d9f09d4c36.png";
import quotivImage from "figma:asset/e9817a352ae6c8dedc03d920398f4b3596edfff0.png";
import waterBottleImage from "figma:asset/3f05d8669326a1b0cb9612fe16cc663fac609b36.png";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Sub Settle",
    description:
      "A smart expense-splitting app that simplifies group finances. Track shared costs, settle debts, and keep friendships intact.",
    image: subSettleImage,
    tags: ["Mobile App", "Finance"],
    color: "#00A82D",
  },
  {
    id: 2,
    title: "Quotiv",
    description:
      "A beautifully curated quotes platform designed to inspire and motivate. Discover, save, and share wisdom daily.",
    image: quotivImage,
    tags: ["Web App", "Lifestyle"],
    color: "#0097A7",
  },
  {
    id: 3,
    title: "Water Bottle Color Sort",
    description:
      "An addictive color-sorting puzzle game. Pour, sort, and strategize your way through increasingly challenging levels.",
    image: waterBottleImage,
    tags: ["Mobile Game", "Puzzle"],
    color: "#FFB300",
  },
];

export function ProjectsPreview() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#08070b]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
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
        <div className="grid md:grid-cols-3 gap-5">
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
              <div className="p-5">
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