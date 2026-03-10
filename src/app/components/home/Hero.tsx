import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[#08070b]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(0,168,45,0.15)_0%,_transparent_70%)]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(20,204,96,0.1)_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            

            {/* Headline */}
            <h1
              className="text-[48px] sm:text-[64px] lg:text-[80px] leading-[1.05] tracking-[-0.04em] text-white mb-6"
              style={{ fontWeight: 600 }}
            >
              Build what's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A82D] via-[#14CC60] to-[#7BE495]">
                next
              </span>
              <br />
              with precision
            </h1>

            {/* Subtitle */}
            <p className="text-[18px] sm:text-[20px] text-[#8a8f98] leading-relaxed max-w-xl mx-auto mb-10">
              Trois Mousquetaire is an elite engineering collective. We design and build high-performance software that powers the future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 text-white text-[15px] rounded-lg border border-[#00A82D] hover:bg-[#00A82D]/10 transition-all"
                style={{ fontWeight: 500 }}
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              {
                label: "Custom Engineering",
                desc: "Purpose-built architecture for your needs",
                gradient: "from-[#00A82D] to-[#14CC60]",
              },
              {
                label: "Security First",
                desc: "Enterprise-grade protection by default",
                gradient: "from-[#FFB300] to-[#0097A7]",
              },
              {
                label: "High Performance",
                desc: "Optimized for speed at every layer",
                gradient: "from-[#FF6D00] to-[#e5484d]",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all text-left"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient}`}
                  />
                  <span
                    className="text-white text-[16px]"
                    style={{ fontWeight: 500 }}
                  >
                    {item.label}
                  </span>
                </div>
                <p className="text-[14px] text-[#6b6f76] pl-5">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}