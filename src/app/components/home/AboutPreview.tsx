import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function AboutPreview() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#08070b]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1760163287830-e7d738afe1e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBtb2Rlcm4lMjBvZmZpY2UlMjBkYXJrfGVufDF8fHx8MTc3MTgyOTcxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#08070b]/60 via-transparent to-transparent" />
            </div>
            {/* Decorative gradient blob */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#00A82D]/10 rounded-full blur-[60px]" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              className="text-[13px] text-[#00A82D] uppercase tracking-wider mb-3"
              style={{ fontWeight: 500 }}
            >
              About us
            </p>
            <h2
              className="text-[36px] md:text-[44px] tracking-[-0.03em] text-white leading-tight mb-6"
              style={{ fontWeight: 600 }}
            >
              One team,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A82D] to-[#14CC60]">
                infinite possibilities
              </span>
            </h2>

            <div className="space-y-4 mb-10">
              <p className="text-[15px] text-[#8a8f98] leading-relaxed">
                Inspired by the legendary musketeers,{" "}
                <span className="text-white" style={{ fontWeight: 500 }}>
                  Trois Mousquetaire
                </span>{" "}
                operates as a unified force. We don't just write code; we architect digital ecosystems that scale.
              </p>
              <p className="text-[15px] text-[#8a8f98] leading-relaxed">
                Our philosophy is simple: deploy precision engineering to solve complex problems. When you need a technology partner who delivers, we're the team you call.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p
                  className="text-[28px] text-white tracking-[-0.02em]"
                  style={{ fontWeight: 600 }}
                >
                  50+
                </p>
                <p className="text-[13px] text-[#6b6f76]" style={{ fontWeight: 500 }}>
                  Projects deployed
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p
                  className="text-[28px] text-white tracking-[-0.02em]"
                  style={{ fontWeight: 600 }}
                >
                  100%
                </p>
                <p className="text-[13px] text-[#6b6f76]" style={{ fontWeight: 500 }}>
                  Client retention
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-[14px] text-[#00A82D] hover:text-[#14CC60] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Learn more about our team
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}