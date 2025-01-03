import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Summit CLI Tool',
            description:
                "A Rust-based CLI tool designed for RAs to manage residents, organize events, and generate creative programming ideas using OpenAI's ChatGPT LLM. Includes multi-user support and SQLite integration.",
            image: '/logos/summit-logo.png',
            githubLink: 'https://github.com/yourusername/summit-cli',
        },
        {
            title: 'Project MOUNTAINEER SHIELD',
            description:
                'A miniature radar-based Nerf dart air defense system. Features trajectory calculation and interception mechanics.',
            image: '/logos/mshield.png',
            githubLink: 'https://github.com/yourusername/aerial-defense',
        },
        {
            title: 'TravelLanka App',
            description:
                'A travel app built with Flutter, designed to teach conversational Sinhala while promoting tourism to Sri Lanka. Features curated content to explore Sri Lankan culture, and a custom itinerary generator using the Google Gemini API. Backend on Google Firebase.',
            image: '/logos/travellanka-logo.png',
            githubLink: 'public/travellanka/travellanka.html',
        },
    ];

    return (
        <div className="min-h-screen px-8 py-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl text-white font-bold mb-8 text-center">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <FlippingCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const FlippingCard = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-80 cursor-pointer"
            onClick={() => setIsFlipped((prev) => !prev)}
            style={{ perspective: '1000px' }}
        >
            <motion.div
                className="relative w-full h-full rounded-lg shadow-lg border-2 border-white"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
                {/* Front Side */}
                <div
                    className="absolute w-full h-full flex flex-col backface-hidden"
                    style={{ transform: 'rotateY(0deg)', backfaceVisibility: 'hidden' }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full rounded-lg"
                    />
                    <div className="mt-auto p-4 text-center">
                        <h2 className="text-xl text-white font-bold">{project.title}</h2>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute w-full h-full bg-[#1C1C1C] p-6 text-white flex flex-col justify-between rounded-lg"
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                >
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                        <p className="text-sm">{project.description}</p>
                    </div>
                    <a
                        href={project.title === 'TravelLanka App' ? project.githubLink : project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mx-auto text-center bg-white text-[#0B132B] font-semibold py-2 px-4 rounded hover:bg-[#E5E5E5] transition-colors"
                    >
                        {project.title === 'TravelLanka App' ? 'TravelLanka' : 'Github'}
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

// PropTypes validation for FlippingCard
FlippingCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        githubLink: PropTypes.string.isRequired,
    }).isRequired,
};

export default Projects;
