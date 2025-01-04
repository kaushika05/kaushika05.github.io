import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ProjectCard = ({ project }) => {
    const { title, description, image, githubLink } = project;
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-64 h-80 rounded-lg shadow-lg overflow-hidden cursor-pointer border border-white"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: 1000 }} // Ensures 3D perspective for the flip
        >
            <motion.div
                className="absolute inset-0 transition-transform duration-500"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center bg-red-950 rounded-lg backface-hidden"
                    style={{ transform: 'rotateY(0deg)', backfaceVisibility: 'hidden' }}
                >
                    <h3 className="text-xl font-semibold text-white text-center mb-4">{title}</h3>
                    <img src={image} alt={`${title} logo`} className="h-20 w-20" />
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 bg-red-950 text-white flex flex-col justify-between px-6 py-4 rounded-lg backface-hidden"
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                >
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-left">{title}</h3>
                        <p className="text-sm text-left mb-4">{description}</p>
                    </div>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 underline self-end"
                    >
                        View on GitHub
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        githubLink: PropTypes.string.isRequired,
    }).isRequired,
};

const ProjectsSection = () => {
    const projects = [
        {
            title: "Summit CLI Tool",
            description:
                "A Rust-based CLI tool designed for RAs to manage residents, organize events, and generate creative programming ideas using OpenAI's ChatGPT LLM. Includes multi-user support and SQLite integration.",
            image: "logos/summit-logo.png",
            githubLink: "https://github.com/yourusername/summit-cli",
        },
        {
            title: "MOUNTAINEER SHIELD",
            description:
                "A miniature radar-based Nerf dart air defense system. Features trajectory calculation and interception mechanics.",
            image: "logos/mshield.png",
            githubLink: "https://github.com/yourusername/aerial-defense",
        },
        {
            title: "TravelLanka App",
            description:
                "A travel app built with Flutter, designed to teach conversational Sinhala while promoting tourism to Sri Lanka. Features curated content to explore Sri Lankan culture, and a custom itinerary generator using the Google Gemini API. Backend on Google Firebase.",
            image: "logos/travellanka-logo.png",
            githubLink: "https://github.com/yourusername/travellanka",
        },
    ];

    return (
        <div id="projects" className="py-16">
            <h2 className="text-4xl text-white text-center mb-8 font-playfair">
                Projects
            </h2>
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;
