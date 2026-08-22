import { motion } from "motion/react";

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: LegalSection[];
}

export function LegalPage({ eyebrow, title, subtitle, sections }: LegalPageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-12 md:pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(0,168,45,0.12)_0%,_transparent_70%)]" />
        </div>
        <div className="relative z-10 max-w-[820px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-[#00A82D] uppercase tracking-wider mb-4 text-[16px]"
              style={{ fontWeight: 500 }}
            >
              {eyebrow}
            </p>
            <h1
              className="text-[40px] md:text-[56px] tracking-[-0.04em] text-white leading-[1.1] mb-5"
              style={{ fontWeight: 600 }}
            >
              {title}
            </h1>
            <p className="text-[#8a8f98] max-w-xl mx-auto leading-relaxed text-[16px]">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-[820px] mx-auto px-6">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: Math.min(index, 4) * 0.04 }}
              >
                <h2
                  className="text-[20px] md:text-[22px] tracking-[-0.02em] text-white mb-4"
                  style={{ fontWeight: 600 }}
                >
                  {section.title}
                </h2>
                {section.paragraphs?.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15px] text-[#8a8f98] leading-relaxed mb-3 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-3 space-y-2.5">
                    {section.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-[15px] text-[#8a8f98] leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00A82D] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
