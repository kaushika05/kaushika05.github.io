import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedBackground } from 'animated-backgrounds';
import {
    FaJava,
    FaPython,
    FaNodeJs,
    FaReact,
    FaAws,
} from 'react-icons/fa';
import {
    SiFlutter,
    SiRust,
    SiKubernetes,
    SiSqlite,
    SiFirebase,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const HeroSection = () => {
    const techLogos = [
        { id: 1, component: <FaJava className="w-8 h-8 md:w-16 md:h-16" />, label: 'Java' },
        { id: 2, component: <FaPython className="w-8 h-8 md:w-16 md:h-16" />, label: 'Python' },
        { id: 3, component: <SiFlutter className="w-8 h-8 md:w-16 md:h-16" />, label: 'Flutter' },
        { id: 4, component: <FaNodeJs className="w-8 h-8 md:w-16 md:h-16" />, label: 'Node.js' },
        { id: 5, component: <FaReact className="w-8 h-8 md:w-16 md:h-16" />, label: 'React' },
        { id: 6, component: <SiRust className="w-8 h-8 md:w-16 md:h-16" />, label: 'Rust' },
        { id: 7, component: <SiKubernetes className="w-8 h-8 md:w-16 md:h-16" />, label: 'Kubernetes' },
        { id: 8, component: <SiSqlite className="w-8 h-8 md:w-16 md:h-16" />, label: 'SQLite' },
        { id: 9, component: <FaAws className="w-8 h-8 md:w-16 md:h-16" />, label: 'AWS' },
        { id: 10, component: <SiFirebase className="w-8 h-8 md:w-16 md:h-16" />, label: 'Google Firebase' },
        { id: 11, component: <VscAzure className="w-8 h-8 md:w-16 md:h-16" />, label: 'Azure' },
    ];

    const duplicatedLogos = [...techLogos, ...techLogos];

    return (
        <div className="relative min-h-screen">
            <AnimatedBackground
                animationName="rainbowWaves"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />

            {/* Hero Title - Keeping original positioning */}
            <motion.h1
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="
    font-playfair
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    text-white
    mb-4
    absolute
    top-[15%]
    left-[20%]           // On mobile, place in the center horizontally
    md:left-[35.5%]        // On md+ screens, align at 35%
    transform
    -translate-x-1/2     // Offset by 50% on mobile
    md:-translate-x-0    // Remove horizontal translation on md+ screens
    z-10
  "
            >
                Kay Wijerathne
            </motion.h1>

            {/* Subtitle - Keeping original positioning */}
            <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.2}}
                style={{
                    position: 'absolute',
                    top: '25%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                }}
                className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-8 text-center px-4 max-w-3xl"
            >
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-white text-lg sm:text-xl">
                    <span>Software Engineer</span>
                    <span className="hidden sm:inline-block">|</span>
                    <span>Cybersecurity Specialist</span>
                    <span className="hidden sm:inline-block">|</span>
                    <span>Problem Solver</span>
                </div>
            </motion.p>

            {/* Tech Stack Carousel - Repositioned */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '65%', // Moved lower to be between rainbow and arrow
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    zIndex: 20, // Ensure it's above the background
                }}
                className="relative overflow-hidden py-8 md:py-12"
            >
                <motion.div
                    className="flex space-x-8 md:space-x-16"
                    initial={{x: 0}}
                    animate={{x: '-50%'}}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={`${logo.id}-${index}`}
                            className="flex-none text-center"
                        >
                            {logo.component}
                            <p className="text-gray-300 mt-2 text-xs md:text-sm">
                                {logo.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Bouncing Arrow - Keeping original positioning */}
            <motion.div
                animate={{y: [0, 10, 0]}}
                transition={{repeat: Infinity, duration: 2}}
                style={{
                    position: 'absolute',
                    bottom: '12%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
                className="cursor-pointer"
            >
                <ChevronDown className="text-white w-6 h-6 md:w-8 md:h-8"/>
            </motion.div>
        </div>
    );
};

export default HeroSection;