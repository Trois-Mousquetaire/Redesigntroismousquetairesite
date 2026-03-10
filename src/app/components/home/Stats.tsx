import { motion } from "motion/react";

export function Stats() {
  const stats = [
    { value: "10+", label: "Years of experience" },
    { value: "200+", label: "Projects delivered" },
    { value: "25", label: "Team members" },
    { value: "99.9%", label: "Client satisfaction" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00A82D]/[0.04] via-[#14CC60]/[0.06] to-[#00A82D]/[0.04]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00A82D]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00A82D]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className="text-[40px] md:text-[48px] tracking-[-0.03em] text-white mb-1"
                style={{ fontWeight: 600 }}
              >
                {stat.value}
              </div>
              <div className="text-[13px] text-[#6b6f76]" style={{ fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}