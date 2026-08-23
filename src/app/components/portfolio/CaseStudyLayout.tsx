import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Seo } from "../Seo";

export interface CaseStudyMeta {
  label: string;
  value: string;
}

export interface CaseStudySection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface CaseStudyShot {
  image: string;
  caption?: string;
}

export interface CaseStudyData {
  eyebrow: string;
  title: string;
  tagline: string;
  /** Route path for canonical/SEO, e.g. "/StackTower". */
  path?: string;
  accent: string;
  heroImage: string;
  tags: string[];
  meta: CaseStudyMeta[];
  overview: string;
  sections: CaseStudySection[];
  gallery?: CaseStudyShot[];
  captions?: string[];
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  const {
    eyebrow,
    title,
    tagline,
    path,
    accent,
    heroImage,
    tags,
    overview,
    sections,
    gallery,
    captions,
  } = data;

  return (
    <div>
      <Seo title={title} description={tagline} path={path} image={heroImage} />
      {/* Hero */}
      <section className="relative pt-12 md:pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            style={{
              background: `radial-gradient(ellipse at center, ${accent}1f 0%, transparent 70%)`,
            }}
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-[13px] text-[#8a8f98] hover:text-white transition-colors mb-8"
              style={{ fontWeight: 500 }}
            >
              <ArrowLeft size={14} />
              Back to portfolio
            </Link>
            <p
              className="uppercase tracking-wider mb-4 text-[16px]"
              style={{ fontWeight: 500, color: accent }}
            >
              {eyebrow}
            </p>
            <h1
              className="text-[40px] md:text-[56px] tracking-[-0.04em] text-white leading-[1.1] mb-5"
              style={{ fontWeight: 600 }}
            >
              {title}
            </h1>
            <p className="text-[#8a8f98] max-w-2xl leading-relaxed text-[18px]">
              {tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="pb-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.08]"
          >
            <ImageWithFallback
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08070b]/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Meta bar */}
      

      {/* Overview + tags */}
      <section className="pb-8">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <p className="text-[20px] md:text-[24px] text-white leading-relaxed tracking-[-0.01em]">
              {overview}
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-md bg-white/[0.04] text-[12px] text-[#8a8f98] border border-white/[0.06]"
                  style={{ fontWeight: 500 }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body sections */}
      <section className="py-12">
        <div className="max-w-[1440px] mx-auto px-6 space-y-14">
          {sections.map((section) => (
            <motion.div key={section.heading} {...fadeUp} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-4 w-1 rounded-full" style={{ backgroundColor: accent }} />
                <h2
                  className="text-[24px] md:text-[28px] tracking-[-0.02em] text-white"
                  style={{ fontWeight: 600 }}
                >
                  {section.heading}
                </h2>
              </div>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="text-[16px] text-[#8a8f98] leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 space-y-3">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-[16px] text-[#8a8f98] leading-relaxed">
                      <span
                        className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: accent }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      {gallery && gallery.length > 0 && (
        <section className="py-12">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-4 w-1 rounded-full" style={{ backgroundColor: accent }} />
              <h2
                className="text-[24px] md:text-[28px] tracking-[-0.02em] text-white"
                style={{ fontWeight: 600 }}
              >
                Screens
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((shot, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                >
                  <div className="relative rounded-[1.75rem] overflow-hidden border border-white/[0.1] bg-white/[0.02] p-2 shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
                    <ImageWithFallback
                      src={shot.image}
                      alt={shot.caption || `${title} screen ${i + 1}`}
                      className="w-full h-auto rounded-[1.25rem]"
                    />
                  </div>
                  {shot.caption && (
                    <p className="mt-3 text-center text-[13px] text-[#6b6f76] leading-relaxed px-2">
                      {shot.caption}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Caption bank */}
      {captions && captions.length > 0 && (
        <section className="py-12">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {captions.map((caption, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                  className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                >
                  <p className="text-[16px] text-[#f7f8f8] italic leading-relaxed">
                    "{caption}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <div
            className="relative p-12 md:p-16 rounded-2xl border text-center overflow-hidden"
            style={{
              background: `linear-gradient(to bottom right, ${accent}1a, ${accent}0d, transparent)`,
              borderColor: `${accent}33`,
            }}
          >
            <div
              className="absolute top-0 right-0 w-80 h-80"
              style={{ background: `radial-gradient(circle, ${accent}26 0%, transparent 70%)` }}
            />
            <h2
              className="text-[28px] md:text-[36px] tracking-[-0.03em] text-white mb-4 relative z-10"
              style={{ fontWeight: 600 }}
            >
              Have a project like this?
            </h2>
            <p className="text-[15px] text-[#8a8f98] mb-8 max-w-md mx-auto relative z-10">
              Let's talk about how we can bring your product vision to life.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-white text-[15px] rounded-lg transition-all relative z-10"
              style={{ fontWeight: 500, backgroundColor: accent }}
            >
              Start a conversation
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
