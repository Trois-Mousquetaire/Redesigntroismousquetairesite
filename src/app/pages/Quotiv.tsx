import heroImage from "../../imports/image_1.png";
import { CaseStudyLayout, type CaseStudyData } from "../components/portfolio/CaseStudyLayout";

const data: CaseStudyData = {
  eyebrow: "Case Study",
  title: "quotiv",
  path: "/Quotiv",
  tagline:
    "Invoicing that never leaves your phone — an invoicing app whose main feature is that it doesn't store your invoices.",
  accent: "#0097A7",
  heroImage,
  tags: ["Product Design", "Design System", "React Native", "Research", "Build Spec"],
  meta: [
    { label: "Role", value: "Solo — research, product, design system, build spec" },
    { label: "Discipline", value: "Product Design · Design System" },
    { label: "Platform", value: "React Native" },
    { label: "Scope", value: "98 screens · 16 templates · 28 components" },
  ],
  overview:
    "quotiv is a mobile invoicing app for freelancers and small traders. It sends quotes and invoices as PDFs, chases payment for you, and keeps every record encrypted on your own Google Drive — never on a server. I designed the product end to end: 98 screens, 16 print templates, and a 28-component design system built without a UI kit.",
  sections: [
    {
      heading: "The problem",
      paragraphs: [
        "Invoicing apps for sole traders split into two disappointing groups. The free ones — Wave, Square, Zoho — give unlimited invoicing but keep your financial records on their servers, and monetise by upselling accounting suites you don't need. The paid mobile ones charge $5–20/month and still cap you at 3 invoices a month on the entry tier.",
        "Both assume the same user: someone at a desk, running a business with a bookkeeper. The actual user I designed for is a designer, contractor, or trader billing 5–20 clients a month from a phone, often while standing on a site. Three things follow from that, and they shaped everything:",
      ],
      bullets: [
        "The phone is the whole computer. Not a companion to a web app.",
        "The document is the product. What matters isn't the app's UI — it's the PDF that lands in the client's WhatsApp.",
        "The data is sensitive and personal. Invoices are financial records. Most competitors treat them as a hosting problem.",
      ],
    },
    {
      heading: "The core idea: no server",
      paragraphs: [
        "quotiv has no application backend. Records live on the device. Backups are encrypted on the phone and written to the user's own Google Drive — only the app holds the key. This started as a privacy position and turned out to shape the business:",
      ],
      bullets: [
        "Marginal cost per user is near zero. No storage, no egress, no scaling — that's what makes $6.99/month sustainable where a cloud competitor needs more.",
        "The privacy claim is concrete, not marketing. \"We never store your invoices\" is verifiable, because there's nowhere to store them.",
        "It constrains the roadmap honestly. Automatic reminders that reach the client without you would need a server holding invoice data — that contradicts the promise, so quotiv reminds you, with a one-tap follow-up ready to send.",
      ],
    },
    {
      heading: "How it works — creating a document",
      paragraphs: [
        "A full screen, not a bottom sheet — a quote with line items, dates, tax and notes is too much for a sheet once the keyboard appears.",
      ],
      bullets: [
        "Quote / Invoice is a switch inside the screen, so the document type is a property you can change while drafting, not a decision locked in before you start typing.",
        "The document number is assigned automatically and shown read-only. Users never type one, so duplicates can't happen.",
        "Line items use a combobox, not a picker. If the service exists it autofills with price and unit; if not, it becomes a one-off item — and a checkbox saves it as a service for next time. The one-off path quietly builds the service list.",
        "Tax is per line, not per document. Each item carries its own rate, so a document can mix standard-rated and exempt work. Discount applies before tax, and the summary breaks tax out by rate.",
      ],
    },
    {
      heading: "Sending it & getting paid",
      paragraphs: [
        "Tapping Save opens a standard, deliberately unbranded OS action sheet, because the user is deciding where the document goes — a system-level decision. Once a document is out, the app can't see it. So reminders are local notifications to the seller, not messages to the buyer: a due date schedules a notification, the date passes while still unpaid, and tapping it opens the invoice with a WhatsApp deep link and a pre-written message.",
        "The user still presses send — but the app did the remembering, the deciding, and the typing. The copy never says \"reminder sent,\" because the app didn't send anything; claiming otherwise would be a one-star review waiting to happen. Payment isn't binary either — a partial amount sets a Partly paid state with a balance, and reminders then quote the balance rather than the total.",
      ],
    },
    {
      heading: "The documents themselves",
      paragraphs: [
        "16 print templates — four designs (Classic, Modern, Minimal, Compact) × two document types × two formats (A4 and a mobile-native layout). The mobile templates aren't scaled-down A4; they're card-based with a \"Pay Now\" CTA, because a document read on a phone is a different artefact from one that gets printed.",
        "Templates are rendered as HTML through expo-print, not React Native views — there's no print layout engine in RN — and pinned to Light mode permanently, because paper doesn't have a dark mode. Free-tier documents carry a diagonal quotiv watermark: the only Pro gate the paying customer never sees a crown for, because it lives on the artefact rather than in the app.",
      ],
    },
    {
      heading: "Pricing",
      paragraphs: [
        "Three tiers, monthly or yearly, decided after researching what the market actually charges: Free (6 documents/month, watermark & ads, 1 company, local backup), Pro at $6.99/mo (unlimited, no watermark, multi-currency, custom branding, Drive backup) and Pro+ at $12.99/mo (unlimited companies). Two decisions worth explaining:",
      ],
      bullets: [
        "Each tier answers \"which one am I?\", not \"how much volume do I do?\" Splitting Pro and Pro+ on number of companies makes the tier about identity — the only person sending 180 invoices a month is running accounting software, not a phone app.",
        "Reminders are free. They're the feature most likely to bring someone back weekly, and a free tier with no reason to return gets uninstalled. Pro is sold on removals and conveniences instead.",
        "Ads are one full-page interstitial on the first save or share — never on re-share, never during a reminder. Those are the moments a user is chasing money they're owed, and an ad there reads as punishing them for not being paid.",
      ],
    },
    {
      heading: "The design system",
      paragraphs: [
        "Built with no UI kit — no React Native Paper, no NativeWind. Every primitive is hand-made, which means the Figma file is the vocabulary rather than a mapping onto someone else's: 40 colour tokens (Light + Dark), 13 Rubik type styles, 35 scale tokens, 28 components plus a 42-icon set, 98 screens, 16 print templates and 380 prototype links.",
        "Every component exposes real properties — editable text, boolean toggles, instance-swap icons — so it's configured from the panel, not by digging into layers. Contrast is measured, not eyeballed: all 27 text-on-surface pairings were computed against WCAG AA in both modes; the M3 default outline token failed at 4.33:1, so it was darkened until it cleared.",
      ],
    },
    {
      heading: "Three problems worth showing",
      bullets: [
        "Dark mode was too dark — and the cause wasn't brightness. surfaceContainerLowest is bound to every card (371 nodes), and in Material 3's dark palette it's the darkest value — darker than the page behind it, so cards sank instead of lifting. I rebuilt the ladder in greys and inverted that token's relationship in dark mode, then re-measured all 27 pairs.",
        "Repetition isn't sameness. ScreenHeader appeared 73 times — the biggest apparent win in the file — but counting shapes rather than instances showed four genuinely different structures. Forcing one component would have meant a bloated variant set or screens quietly losing their headers. I left it alone.",
        "Tablet isn't the phone stretched. Above 1024pt the bottom tabs become a navigation rail and the list stays permanently visible — so selection replaces navigation, making selected a real state. The create screen genuinely changes: form and finished document sit side by side, so preview becomes continuous feedback instead of a separate step.",
      ],
    },
    {
      heading: "What I'd do next",
      bullets: [
        "Payment collection. No tier helps you actually get paid — no payment links, no card capture. Free competitors do this; it's the real roadmap gap, and pricing can't cover it.",
        "Multi-rate tax by jurisdiction. One flat rate per line works for GST; EU VAT with mixed rates and Indian CGST/SGST splits need more.",
        "Test the free-tier cap. Six documents a month is a guess. It should be a measurement.",
      ],
    },
  ],
  captions: [
    "An invoicing app whose main feature is that it doesn't store your invoices.",
    "The phone is the whole computer. The document is the product.",
    "\"We never store your invoices\" — verifiable, because there's nowhere to store them.",
    "No UI kit. Every primitive hand-made — the Figma file is the vocabulary.",
  ],
};

export default function Quotiv() {
  return <CaseStudyLayout data={data} />;
}
