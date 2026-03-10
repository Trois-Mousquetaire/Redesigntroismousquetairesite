import { Link } from "react-router";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Sub Settle",
    description:
      "A smart expense-splitting app that simplifies group finances. Track shared costs, settle debts, and keep friendships intact.",
    image:
      "https://images.unsplash.com/photo-1585930437945-2ebd52d059ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlbnNlJTIwc3BsaXR0aW5nJTIwZmluYW5jZSUyMGFwcCUyMG1vYmlsZXxlbnwxfHx8fDE3NzE4Mjk5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile App", "Finance"],
    color: "#00A82D",
  },
  {
    id: 2,
    title: "Quotiv",
    description:
      "A beautifully curated quotes platform designed to inspire and motivate. Discover, save, and share wisdom daily.",
    image:
      "https://images.unsplash.com/photo-1605290994680-779e10fff203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RpdmF0aW9uYWwlMjBxdW90ZXMlMjB0eXBvZ3JhcGh5JTIwbWluaW1hbHxlbnwxfHx8fDE3NzE4Mjk5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Web App", "Lifestyle"],
    color: "#0097A7",
  },
  {
    id: 3,
    title: "Water Bottle Color Sort",
    description:
      "An addictive color-sorting puzzle game. Pour, sort, and strategize your way through increasingly challenging levels.",
    image:
      "https://images.unsplash.com/photo-1677786984879-a0319ffe8f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHdhdGVyJTIwYm90dGxlcyUyMHB1enpsZSUyMGdhbWV8ZW58MXx8fHwxNzcxODI5OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile Game", "Puzzle"],
    color: "#FFB300",
  },
  {
    id: 4,
    title: "Upcoming",
    description:
      "Something exciting is in the works. Stay tuned for our next project that pushes the boundaries of what's possible.",
    image:
      "https://images.unsplash.com/photo-1735293720488-e40ce63aab5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pbmclMjBzb29uJTIwZnV0dXJpc3RpYyUyMHRlY2glMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzE4Mjk5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Coming Soon"],
    color: "#FF6D00",
    upcoming: true,
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
        <div className="grid md:grid-cols-2 gap-6">
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
              <div className="relative aspect-[16/10] overflow-hidden">
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

                {/* Upcoming badge */}
                {project.upcoming && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF6D00]/15 border border-[#FF6D00]/25">
                    <Clock size={12} className="text-[#FF6D00]" />
                    <span
                      className="text-[11px] text-[#FF6D00] uppercase tracking-wider"
                      style={{ fontWeight: 600 }}
                    >
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
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
                  className="text-[20px] text-white tracking-[-0.02em] mb-2"
                  style={{ fontWeight: 600 }}
                >
                  {project.title}
                </h3>
                <p className="text-[14px] text-[#6b6f76] leading-relaxed">
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