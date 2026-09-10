import { useEffect, type ReactNode } from "react";

/**
 * Renders a legal document (Privacy / Terms) from a data object.
 * Content lives in src/app/data/privacy.ts and terms.ts (plain TS modules),
 * so it is bundled with the app — no network fetch, no JSON-import quirks.
 */
type Block = { type: string; text: string };
type Section = { heading: string; blocks: Block[] };
export type LegalData = {
  title: string;
  subtitle?: string;
  version?: number;
  lastUpdated?: string;
  sections: Section[];
};

// Turn bare URLs and email addresses inside a string into links.
function linkify(text: string): ReactNode[] {
  const re =
    /(https?:\/\/[^\s]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const token = m[0];
    const isEmail = token.includes("@") && !token.startsWith("http");
    const href = isEmail ? `mailto:${token}` : token;
    out.push(
      <a
        key={key++}
        href={href}
        {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        className="text-[#00A82D] hover:underline break-words"
      >
        {token}
      </a>
    );
    last = m.index + token.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

// Render a section's blocks, grouping consecutive bullets into one list.
function renderBlocks(blocks: Block[] = []): ReactNode[] {
  const out: ReactNode[] = [];
  let bullets: Block[] = [];
  let key = 0;

  const flush = () => {
    if (bullets.length) {
      out.push(
        <ul key={`ul-${key++}`} className="mt-3 space-y-2">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-2 text-[15px] leading-relaxed text-white/70"
            >
              <span className="mt-0.5 shrink-0 text-[#00A82D]">•</span>
              <span>{linkify(b.text)}</span>
            </li>
          ))}
        </ul>
      );
      bullets = [];
    }
  };

  blocks.forEach((b) => {
    if (b.type === "bullet") {
      bullets.push(b);
    } else {
      flush();
      out.push(
        <p
          key={`p-${key++}`}
          className="mt-3 text-[15px] leading-relaxed text-white/70"
        >
          {linkify(b.text)}
        </p>
      );
    }
  });
  flush();
  return out;
}

export default function LegalDoc({ data }: { data: LegalData }) {
  useEffect(() => {
    if (data?.title) document.title = `${data.title} · Trois Mousquetaires`;
  }, [data]);

  // Guard: never crash the app if data is missing or malformed.
  if (!data || !Array.isArray(data.sections)) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-sm text-white/40">
        Content unavailable.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {data.title}
      </h1>
      {data.subtitle && (
        <p className="mt-2 text-sm text-white/45">{data.subtitle}</p>
      )}
      {data.sections.map((sec, si) => (
        <section key={si} className="mt-8">
          {sec.heading && (
            <h2 className="text-lg md:text-xl font-semibold text-white">
              {sec.heading}
            </h2>
          )}
          {renderBlocks(sec.blocks)}
        </section>
      ))}
    </div>
  );
}
