import heroImage from "../../imports/stack_tower_home_hero_1920x1080-1.png";
import shot1 from "../../imports/1.png";
import shot2 from "../../imports/2.png";
import shot3 from "../../imports/3.png";
import shot4 from "../../imports/4.png";
import shot5 from "../../imports/5.png";
import shot6 from "../../imports/6.png";
import { CaseStudyLayout, type CaseStudyData } from "../components/portfolio/CaseStudyLayout";

const data: CaseStudyData = {
  eyebrow: "Case Study",
  title: "Stack Tower",
  path: "/StackTower",
  tagline:
    "Tap to drop. Land it clean. Climb. A one-tap arcade stacker where a single mistimed tap costs you the run — wrapped in four modes, a daily challenge, and a progression loop that gives you a reason to come back tomorrow.",
  accent: "#38BDF8",
  heroImage,
  tags: ["Design", "Development", "Game Design", "UI", "Visual Identity", "Store Assets", "Android"],
  meta: [
    { label: "Role", value: "Design & Development" },
    { label: "Platform", value: "Android" },
    { label: "Scope", value: "Game design, UI, visual identity, store assets" },
    { label: "Modes", value: "4 + Daily Challenge" },
  ],
  overview:
    "Stack Tower takes the purest possible input — one tap — and asks how much game you can build on top of it. A block slides across the screen; you tap to drop it onto the tower below. Whatever hangs over the edge is sliced away, so every imprecise drop makes the next one harder. The tower narrows until there's nothing left to land on.",
  sections: [
    {
      heading: "Overview",
      paragraphs: [
        "That core takes about four seconds to learn. The design work went into everything around it: four modes that ask genuinely different things of the player, a daily challenge that puts everyone on the same seed, and a reward economy that turns a two-minute session into a habit.",
      ],
    },
    {
      heading: "How it works",
      paragraphs: [
        "The block travels horizontally at a constant speed and you tap once to place it. Land it flush with the block underneath and you get a perfect drop — no width lost, and your combo climbs. Land it off-centre and the overhang is cut away permanently. Miss entirely and the run ends.",
        "Because width is never recovered by ordinary drops, precision compounds. A player who lands three perfects early is playing a fundamentally wider, more forgiving tower than one who didn't — which is what makes the skill ceiling real rather than cosmetic.",
      ],
    },
    {
      heading: "Four modes",
      bullets: [
        "Classic — Endless. No timer, no restrictions, just how high you can get.",
        "Time Attack — Sixty seconds on the clock, and every perfect drop buys you another second. Precision stops being about width and becomes about survival.",
        "Precision — Perfect drops only. A single imperfect landing ends the run.",
        "Daily Challenge — One seeded puzzle per day, identical for every player, resetting on a visible countdown.",
      ],
      paragraphs: [
        "Each mode tracks its own best score, so a player who's stuck in Classic still has somewhere to make progress.",
      ],
    },
    {
      heading: "Progression",
      paragraphs: [
        "Runs pay out in coins and XP. Coins come from gameplay, daily rewards on an escalating seven-day streak, and mission completions; XP drives an account level that carries across all four modes. Achievements fire on milestones and pay a coin bonus on top.",
        "Three daily missions rotate — a height target, a cumulative perfect-drop count, and a coin goal — deliberately spanning one run, several runs, and a session, so there's always one that's nearly done.",
        "The game-over screen is where all of this lands at once: score, mode best, combo, coins earned, XP gained with the level bar advancing, and any achievements unlocked. It's the densest screen in the game by design — it's the moment a player decides whether to tap \"again.\"",
      ],
    },
    {
      heading: "Visual identity",
      paragraphs: [
        "The wordmark is built on deliberate misregistration — white type sitting over offset colour duplicates in orange-yellow and cyan-purple, like a print run that slipped. It's a direct nod to the mechanic: blocks that don't quite line up. The same palette carries into the UI, with each mode owning an accent colour (cyan, orange, yellow, purple) so mode context is readable at a glance from the card list through to the in-run header pill.",
        "Everything sits on a deep navy that keeps the block colours bright without the interface competing with the play area.",
      ],
    },
  ],
  gallery: [
    { image: shot1, caption: "Simple to start. Hard to put down — the store hero." },
    { image: shot2, caption: "One tap drops the brick. Line it up dead straight and keep climbing." },
    { image: shot3, caption: "Miss, and the brick shrinks — every sloppy drop trims the block." },
    { image: shot4, caption: "Four ways to climb: Classic, Time Attack, Precision, Daily Challenge." },
    { image: shot5, caption: "Every run pays out — coins, XP, levels and achievements." },
    { image: shot6, caption: "Show up daily, get paid daily — a seven-day streak plus fresh missions." },
  ],
  captions: [
    "Tap to drop. Land it clean. Climb.",
    "A single mistimed tap costs you the run.",
    "Four modes, one daily seed, endless climb.",
    "Deliberate misregistration — a print run that slipped.",
  ],
};

export default function StackTower() {
  return <CaseStudyLayout data={data} />;
}
