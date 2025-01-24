import { BookOpenText } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  link: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "A Dream of Zion",
    excerpt: "The Rebirth of the Eternal Nation",
    date: "2025-01-15",
    link: "https://kaywijerathne.substack.com/p/a-dream-of-zion?r=52ypzz",
    image: "israel.jpg"
  },
  {
    title: "Building A Time Tracking Tool",
    excerpt: "Plan to construct a Rust tool visualizing how I spend my time online",
    date: "2024-02-01",
    link: "https://kaywijerathne.substack.com/p/building-a-time-tracking-system-monitoring?r=52ypzz",
    image: "time.jpg"
  },
  {
    title: "A Manufactured Dichotomy",
    excerpt: "Culture Wars as cover: how the ruling class uses culture wars to their benefit",
    date: "2024-01-15",
    link: "https://theculturecartographer.substack.com/p/a-manufactured-dichotomy",
    image: "pride.jpg"
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="container mx-auto py-20">
      <h2 className="text-4xl font-bungee text-neon mb-12 text-center flex items-center justify-center gap-4">
        <BookOpenText className="w-8 h-8" />
        Latest Articles
      </h2>
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {blogPosts.map((post) => (
            <CarouselItem key={post.title} className="md:basis-1/2 lg:basis-1/3">
              <div className="bg-dark p-6 rounded-xl border-2 border-magenta hover:border-neon
                transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,221,0.2)] h-full">
                <div 
                  className="h-48 mb-4 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <h3 className="text-xl font-comic text-sunny mb-4">{post.title}</h3>
                <p className="text-white/80 text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-magenta text-sm">{post.date}</span>
                  <a
                    href={post.link}
                    className="text-neon hover:text-white transition-colors duration-300"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};