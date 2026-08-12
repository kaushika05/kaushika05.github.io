import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedResearch } from "@/components/FeaturedResearch";
import { ResearchAreas } from "@/components/ResearchAreas";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Beyond } from "@/components/Beyond";
import { Contact } from "@/components/Contact";

export default function Page() {
  return <>
    <Hero />
    <About />
    <FeaturedResearch />
    <ResearchAreas />
    <Experience />
    <Projects />
    <Beyond />
    <Contact />
  </>;
}
