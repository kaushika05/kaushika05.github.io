import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedResearch } from "@/components/FeaturedResearch";
import { ResearchAreas } from "@/components/ResearchAreas";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Milestones } from "@/components/Milestones";
import { Beyond } from "@/components/Beyond";
import { Now } from "@/components/Now";
import { Geography } from "@/components/Geography";
import { Contact } from "@/components/Contact";

export default function Page() {
  return <>
    <Hero />
    <About />
    <FeaturedResearch />
    <ResearchAreas />
    <Experience />
    <Projects />
    <Milestones />
    <Beyond />
    <Now />
    <Geography />
    <Contact />
  </>;
}
