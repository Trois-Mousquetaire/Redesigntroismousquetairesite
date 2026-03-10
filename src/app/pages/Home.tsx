import { Hero } from "../components/home/Hero";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { ProjectsPreview } from "../components/home/ProjectsPreview";
import { CTA } from "../components/home/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <CTA />
    </div>
  );
}