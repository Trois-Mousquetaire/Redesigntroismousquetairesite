import { Hero } from "../components/home/Hero";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { ProjectsPreview } from "../components/home/ProjectsPreview";
import { CTA } from "../components/home/CTA";
import { Seo } from "../components/Seo";

export default function Home() {
  return (
    <div>
      <Seo
        title="Product Design & Engineering Studio"
        description="Trois Mousquetaire is a product design and engineering collective. We design and build digital products end to end — apps, games, and design systems, from first idea to shipped app."
        path="/"
      />
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <CTA />
    </div>
  );
}