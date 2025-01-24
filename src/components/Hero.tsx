import { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/button';

const titles = [
  "Software Engineer",
  "Cybersec Specialist",
  "Problem Solver",
  "Gamer",
  "Writer",
  "Hobbyist Astronomer",
  "Space Enthusiast",
  "F22 Enjoyer #RaptorNation",
  "Shitposter",
  "Hiking Enthusiast",
  "Conservationist",
  "Volunteer"
];

export const Hero = () => {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1rHOL_He6B9UeY0_6QTjNqFHsazx07OLL/view?usp=sharing', '_blank');
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBoredClick = () => {
    window.open('https://boredbutton.com', '_blank');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a')]
        bg-cover bg-center bg-fixed"
        style={{ 
          filter: 'brightness(0.4)',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark opacity-90" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="text-center mb-8">
          <h1 className="text-8xl md:text-9xl mb-2 text-white tracking-wider font-bold animate-wave">
            KAY
          </h1>
          <h2 className="text-3xl md:text-4xl text-white tracking-wide animate-wave">
            WIJERATHNE
          </h2>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button 
            onClick={handleResumeClick}
            className="px-8 py-3 bg-transparent border-2 border-sunny text-sunny 
            hover:bg-sunny hover:text-dark transition-all duration-300 rounded-lg font-comic text-xl"
          >
            Resume
          </Button>
          <Button 
            onClick={handleProjectsClick}
            className="px-8 py-3 bg-transparent border-2 border-neon text-neon 
            hover:bg-neon hover:text-dark transition-all duration-300 rounded-lg font-comic text-xl"
          >
            Projects
          </Button>
          <Button 
            onClick={handleBoredClick}
            className="px-8 py-3 bg-transparent border-2 border-magenta text-magenta 
            hover:bg-magenta hover:text-dark transition-all duration-300 rounded-lg font-comic text-xl"
          >
            Bored?
          </Button>
        </div>

        <div className="mt-8 flex gap-6">
          <a href="https://github.com/kaushika05" target="_blank" rel="noopener noreferrer"
             className="text-white hover:text-neon transition-colors duration-300">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/kaushika-wijerathne-b85463212/" target="_blank" rel="noopener noreferrer"
             className="text-white hover:text-neon transition-colors duration-300">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://twitter.com/SineOfDaTimes" target="_blank" rel="noopener noreferrer"
             className="text-white hover:text-neon transition-colors duration-300">
            <Twitter className="w-8 h-8" />
          </a>
          <a href="https://instagram.com/kaywijerathne" target="_blank" rel="noopener noreferrer"
             className="text-white hover:text-neon transition-colors duration-300">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="https://facebook.com/profile.php?id=100071989750463" target="_blank" rel="noopener noreferrer"
             className="text-white hover:text-neon transition-colors duration-300">
            <Facebook className="w-8 h-8" />
          </a>
        </div>
        
        <div className="mt-8 max-w-4xl px-4">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {titles.map((title, index) => {
              const isLastInRow = (index + 1) % 6 === 0 || index === titles.length - 1;
              return (
                <>
                  <span 
                    key={title} 
                    className="text-sm md:text-base text-white hover:text-neon transition-colors duration-300 cursor-default"
                  >
                    {title}
                  </span>
                  {!isLastInRow && (
                    <span className="text-white">|</span>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};