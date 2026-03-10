import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(0,168,45,0.12)_0%,_transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative z-10 max-w-[680px] mx-auto px-6 text-center">
        <h2
          className="text-[36px] md:text-[52px] tracking-[-0.03em] text-white leading-[1.1] mb-6"
          style={{ fontWeight: 600 }}
        >
          Ready to build
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A82D] via-[#14CC60] to-[#7BE495]">
            something great?
          </span>
        </h2>
        <p className="text-[17px] text-[#8a8f98] leading-relaxed mb-10 max-w-md mx-auto">
          Let's discuss your next project. Our team is ready to turn your vision into a high-performance reality.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#00A82D] text-white text-[15px] rounded-lg hover:bg-[#00C234] transition-all shadow-[0_0_30px_rgba(0,168,45,0.25)]"
            style={{ fontWeight: 500 }}
          >
            Start a conversation
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[#8a8f98] text-[15px] rounded-lg border border-white/[0.08] hover:text-white hover:bg-white/[0.04] hover:border-white/[0.12] transition-all"
            style={{ fontWeight: 500 }}
          >
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}