import { Gamepad2, Heart } from "lucide-react";

interface Game {
  name: string;
  rank: string;
  hours: number;
  skillLevel: number;
}

interface VolunteerWork {
  organization: string;
  role: string;
  duration: string;
  description: string;
}

const games: Game[] = [
  { name: "Valorant", rank: "Immortal", hours: 7200, skillLevel: 90 },
  { name: "CS2", rank: "Silver", hours: 100, skillLevel: 20 },
  { name: "Marvel Rivals", rank: "Silver", hours: 50, skillLevel: 55 },
  { name: "Overwatch 2", rank: "Gold", hours: 200, skillLevel: 30 },
  { name: "Apex Legends", rank: "Silver", hours: 50, skillLevel: 10 },
  { name: "Chess", rank: "700 Elo", hours: 200, skillLevel: 30 },
];

const volunteerWork: VolunteerWork[] = [
  {
    organization: "Indiana Dunes National Park",
    role: "FeederWatch Volunteer",
    duration: "2024 - Present",
    description: "Monitoring and recording bird populations at feeding stations, contributing to citizen science initiatives for bird conservation."
  },
  {
    organization: "National Map Corps",
    role: "Citizen Scientist",
    duration: "2024 - Present",
    description: "Contributing to the National Map by verifying and updating structure points across the United States."
  }
];

export const GamesSection = () => {
  return (
    <section id="activities" className="container mx-auto py-20">
      <div className="mb-20">
        <h2 className="text-4xl font-bungee text-neon mb-12 text-center flex items-center justify-center gap-4">
          <Gamepad2 className="w-8 h-8" />
          Gaming Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.name}
              className="bg-dark p-6 rounded-xl border-2 border-magenta hover:border-neon
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,221,0.2)]"
            >
              <h3 className="text-2xl font-comic text-sunny mb-4">{game.name}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-magenta mb-1">Rank</p>
                  <p className="text-white font-comic">{game.rank}</p>
                </div>
                <div>
                  <p className="text-magenta mb-1">Hours Played</p>
                  <p className="text-white font-comic">{game.hours}+</p>
                </div>
                <div>
                  <p className="text-magenta mb-1">Skill Level</p>
                  <div className="w-full bg-dark/50 rounded-full h-2.5">
                    <div
                      className="bg-neon h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${game.skillLevel}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bungee text-neon mb-12 text-center flex items-center justify-center gap-4">
          <Heart className="w-8 h-8" />
          Volunteer Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteerWork.map((work) => (
            <div
              key={work.organization}
              className="bg-dark p-6 rounded-xl border-2 border-magenta hover:border-neon
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,221,0.2)]"
            >
              <h3 className="text-2xl font-comic text-sunny mb-4">{work.organization}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-magenta mb-1">Role</p>
                  <p className="text-white font-comic">{work.role}</p>
                </div>
                <div>
                  <p className="text-magenta mb-1">Duration</p>
                  <p className="text-white font-comic">{work.duration}</p>
                </div>
                <div>
                  <p className="text-magenta mb-1">Description</p>
                  <p className="text-white/80 text-sm">{work.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
