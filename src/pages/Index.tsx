import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { MusicSection } from "@/components/MusicSection";
import { GamesSection } from "@/components/GamesSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const projects = [
  {
    title: "TravelLanka",
    description: "IN PROGRESS: A comprehensive travel guide powered by AI, TravelLanka revolutionizes how tourists explore Sri Lanka. Features include personalized itineraries based on interests and budget, real-time weather updates, local cultural insights, and integration with local transportation services.",
    image: "logo.png",
    link: "#",
    tech: ["Dart/Flutter", "Node.js", "Gemini API", "Firebase"]
  },
  {
    title: "Trump Order Tracker",
    description: "A dashboard tracking executive orders with real-time updates.",
    image: "trump.jpg",
    link: "www.trumpeotracker.org",
    tech: ["Typescript", "React", "Figma", "Tailwind CSS"]
  },
  {
    title: "MOUNTAINEER SHIELD",
    description: "IN PROGRESS: A miniature missile defense system which includes a custom-built intrusion detection system and comprehensive security analytics dashboard.",
    image: "irondome.webp",
    link: "#",
    tech: ["Java", "Tensorflow", "Python", "Docker"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      
      <section id="projects" className="container mx-auto py-20">
        <h2 className="text-4xl font-bungee text-neon mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <BlogSection />
      <GamesSection />
      <MusicSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;