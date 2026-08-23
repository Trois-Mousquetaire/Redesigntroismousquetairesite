import yuFuKaneImage from "../../imports/Featured_image___1920_1080.jpg";
import { CaseStudyLayout, type CaseStudyData } from "../components/portfolio/CaseStudyLayout";

const data: CaseStudyData = {
  eyebrow: "Case Study",
  title: "Yu Fu Kane",
  path: "/YuFuKane",
  tagline:
    "A chase puzzle for mobile — design system, 26 screens, four board tiers.",
  accent: "#FFB300",
  heroImage: yuFuKaneImage,
  tags: ["Product Design", "UI Design", "Figma", "React Native", "iOS", "Android", "Design System"],
  meta: [
    { label: "Role", value: "Product & UI Design" },
    { label: "Tools", value: "Figma" },
    { label: "Built for", value: "React Native (iOS + Android)" },
    { label: "Scope", value: "26 screens · 4 board tiers" },
  ],
  overview:
    "Yu Fu Kane is a turn-based chase puzzle played on a grid. You control Yu. Scattered across the board are Fu — the collectibles. Hunting you is Kane.",
  sections: [
    {
      heading: "The game",
      paragraphs: [
        "The rules are small enough to explain in three lines, which is the point:",
      ],
      bullets: [
        "Tap a tile next to Yu to move — up, down, left or right.",
        "Kane moves on the clock, not on your taps.",
        "Collect every Fu on the board to clear the level.",
      ],
    },
    {
      heading: "The tension",
      paragraphs: [
        "The tension comes from that second rule. Kane doesn't respond to you; he advances on his own timer, shown as a draining bar in the header. Take too long deciding and he closes the distance whether you moved or not. Every level is a race between a routing problem and a countdown.",
        "Fifty levels across four tiers. The grid widens as you progress — 3 columns, then 5, 7, and 9 — with more Fu to collect and less room to dodge. Three stars per level: clear it, clear it well, clear it fast.",
      ],
    },
    {
      heading: "The core loop",
      paragraphs: [
        "Level select → board → cleared or caught → back to level select. A run takes under a minute, which makes it a commute game.",
      ],
    },
    {
      heading: "Lives and pressure",
      paragraphs: [
        "Five lives, one refilling every few minutes. Getting caught costs one. Run out and you either wait for the timer or watch an ad for a life — the standard casual-game economy, designed as a proper set of states rather than an afterthought: ad loading, ad unavailable, reward granted, and an out-of-lives gate that never dead-ends.",
      ],
    },
    {
      heading: "\"It's Close.\"",
      paragraphs: [
        "The most important moment in the game got its own screen state. When Kane is one tick from moving, the countdown bar thickens and blooms, the header border shifts red, and a warning pill appears.",
        "Colour alone wasn't enough — under red-green colour blindness the threat and the collectible sit close in luminance, so the warning carries shape, motion and words as well.",
      ],
    },
  ],
  captions: [
    "Kane moves on the clock, not on your taps.",
    "Three rules, fifty levels, one countdown.",
    "Gold collects. Red chases. Purple is you.",
    "The board grows from 3 columns to 9 — and recalculates itself for every screen size.",
  ],
};

export default function YuFuKane() {
  return <CaseStudyLayout data={data} />;
}
