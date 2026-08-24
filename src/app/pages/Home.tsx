import { Hero } from "../components/home/Hero";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { ProjectsPreview } from "../components/home/ProjectsPreview";
import { CTA } from "../components/home/CTA";
import { Seo } from "../components/Seo";

export default function Home() {
  return (
    <div>
      <Seo
        fullTitle="Reliable IT Solutions for Growing Businesses | Trois Mousquetaires"
        title="Reliable IT Solutions for Growing Businesses"
        description="We design, build, and scale enterprise digital solutions. Partner with a dedicated engineering team specializing in cloud tech, web development, and IT consulting."
        path="/"
      />
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <CTA />
    </div>
  );
}