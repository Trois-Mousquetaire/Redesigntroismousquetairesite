import heroImage from "../../imports/image_1-1.png";
import { CaseStudyLayout, type CaseStudyData } from "../components/portfolio/CaseStudyLayout";

const data: CaseStudyData = {
  eyebrow: "Case Study",
  title: "Sub Settle",
  path: "/SubSettle",
  tagline:
    "Split the bill, not the friendship. Sub Settle keeps the money side of shared life quietly sorted — so dinners stay dinners and trips stay trips.",
  accent: "#00A82D",
  heroImage,
  tags: ["Product Design", "Design System", "Mobile App", "Finance", "Light & Dark"],
  meta: [
    { label: "Discipline", value: "Product & UI Design" },
    { label: "Type", value: "Shared-expense mobile app" },
    { label: "Scope", value: "~157 screens · 18 flows" },
    { label: "Themes", value: "Full light & dark" },
  ],
  overview:
    "Track what everyone paid, see who owes whom, and settle up in a tap. No spreadsheets. No mental math. No \"I'll get you next time.\"",
  sections: [
    {
      heading: "The itch it scratches",
      paragraphs: [
        "Somebody always covers the taxi. Someone else grabs the groceries. By Sunday, nobody remembers who's up and who's down — and asking feels a little awkward.",
        "Sub Settle remembers for you, so no one has to be the person with the notes app.",
      ],
    },
    {
      heading: "How it works — in four unremarkable taps",
      bullets: [
        "Start a group — the trip, the flat, the friends — or just add a person.",
        "Drop in an expense — what it was, how much, who paid.",
        "Pick how to split it — evenly, by percentage, by shares, by exact amounts, or item by item. However \"fair\" looks tonight.",
        "Let the balances sort themselves. When you're even, settle up and it's done.",
      ],
    },
    {
      heading: "What's inside",
      bullets: [
        "Six ways to split — because \"let's just split it\" rarely means equally.",
        "More than one payer? The bill can have several hands on it.",
        "Balances that actually add up — per friend, per group, and one honest number up top.",
        "Settle up — record a payment, clear the slate, keep the receipts.",
        "See where it went — spending broken down by category and by person.",
        "Find anything — one search across people, groups, and expenses.",
        "Comments & history on every expense, for when memory and math disagree.",
        "In your language — English, 中文, हिन्दी, Español.",
        "Day or night — a full light and dark theme, not an afterthought.",
      ],
    },
    {
      heading: "Built like a product, not a mockup",
      paragraphs: [
        "Under the friendly surface sits a real design system. One palette retextures the entire app — light to dark — on a single switch. A tuned type ramp. A hand-drawn icon set that recolors on command. Elevation that stays readable in the dark. A component library wired to design tokens, with a build guide that hands every decision to engineering already mapped to code.",
        "~157 screens. 18 flows. Two themes. One system holding it all together.",
      ],
    },
    {
      heading: "The whole point",
      paragraphs: [
        "Money is the fastest way to make things weird between people. Sub Settle's whole job is to make it boring again.",
      ],
    },
  ],
  captions: [
    "Split the bill, not the friendship.",
    "So no one has to be the person with the notes app.",
    "Six ways to split — because \"let's just split it\" rarely means equally.",
    "~157 screens. 18 flows. Two themes. One system holding it all together.",
  ],
};

export default function SubSettle() {
  return <CaseStudyLayout data={data} />;
}
