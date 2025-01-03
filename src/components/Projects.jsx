import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

const Projects = () => {
    const projects = [
        {
            title: "Summit CLI Tool",
            description:
                "A Rust-based CLI tool designed for RAs to manage residents, organize events, and generate creative programming ideas using OpenAI's ChatGPT LLM. Includes multi-user support and SQLite integration.",
            image: "public/logos/summit-logo.png",
            githubLink: "https://github.com/yourusername/summit-cli",
        },
        {
            title: "Project MOUNTAINEER SHIELD",
            description:
                "A miniature radar-based Nerf dart air defense system. Features trajectory calculation and interception mechanics.",
            image: "public/logos/mshield.png",
            githubLink: "https://github.com/yourusername/aerial-defense",
        },
        {
            title: "TravelLanka App",
            description:
                "A travel app built with Flutter, designed to teach conversational Sinhala while promoting tourism to Sri Lanka. Features curated content to explore Sri Lankan culture, and a custom itinerary generator using the Google Gemini API. Backend on Google Firebase.",
            image: "public/logos/travellanka-logo.png",
            githubLink: "public/travellanka/travellanka.html",
        },
    ];

    const [flippedCards, setFlippedCards] = useState({});
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        initial: 2, // Start with "TravelLanka App" centered
        slides: { perView: 1.5, spacing: 10 }, // Adjusted for thinner cards
        centered: true,
        animation: {
            duration: 10000,
            easing: "linear",
        },
    });

    const handleCardClick = (index) => {
        setFlippedCards((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="min-h-screen px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl text-white font-bold mb-8 text-center">
                    My Projects
                </h1>
                <div ref={sliderRef} className="keen-slider">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="keen-slider__slide"
                            style={{ width: "50%", maxWidth: "150px" }} // Thinner cards
                        >
                            <FlippingCard
                                project={project}
                                isFlipped={!!flippedCards[index]}
                                onClick={() => handleCardClick(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const FlippingCard = ({ project, isFlipped, onClick }) => {
    return (
        <div
            className="relative w-full h-[400px] cursor-pointer" // Taller and thinner cards
            onClick={onClick}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                className="relative w-full h-full rounded-lg shadow-lg border-2 border-white"
                style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {/* Front Side */}
                <div
                    className="absolute w-full h-full flex flex-col backface-hidden bg-blue-950 rounded-lg"
                    style={{ transform: "rotateY(0deg)", backfaceVisibility: "hidden" }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain rounded-lg" // Ensures the image fits fully
                    />
                    <div className="mt-auto p-4 text-center">
                        <h2 className="text-sm text-white font-bold">{project.title}</h2>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute w-full h-full bg-[#1C1C1C] p-4 text-white flex flex-col justify-between rounded-lg"
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                >
                    <div>
                        <h2 className="text-lg font-bold mb-2">{project.title}</h2>
                        <p className="text-xs">{project.description}</p>
                    </div>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mx-auto text-center bg-white text-[#0B132B] font-semibold py-1 px-2 rounded hover:bg-[#E5E5E5] transition-colors text-sm"
                    >
                        {project.title === "TravelLanka App" ? "Visit Page" : "GitHub"}
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

FlippingCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        githubLink: PropTypes.string.isRequired,
    }).isRequired,
    isFlipped: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Projects;
