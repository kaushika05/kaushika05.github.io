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
        { id: 1, component: <FaJava className="w-16 h-16" />, label: 'Java' },
        { id: 2, component: <FaPython className="w-16 h-16" />, label: 'Python' },
        { id: 3, component: <SiFlutter className="w-16 h-16" />, label: 'Flutter' },
        { id: 4, component: <FaNodeJs className="w-16 h-16" />, label: 'Node.js' },
        { id: 5, component: <FaReact className="w-16 h-16" />, label: 'React' },
        { id: 6, component: <SiRust className="w-16 h-16" />, label: 'Rust' },
        { id: 7, component: <SiKubernetes className="w-16 h-16" />, label: 'Kubernetes' },
        { id: 8, component: <SiSqlite className="w-16 h-16" />, label: 'SQLite' },
        { id: 9, component: <FaAws className="w-16 h-16" />, label: 'AWS' },
        { id: 10, component: <SiFirebase className="w-16 h-16" />, label: 'Google Firebase' },
        { id: 11, component: <VscAzure className="w-16 h-16" />, label: 'Azure' },
    ];

    const duplicatedLogos = [...techLogos, ...techLogos]; // Duplicate logos for seamless loop

    return (
        <div className="relative min-h-screen">
            {/* Animated Background */}
            <AnimatedBackground
                animationName="rainbowWaves"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0, // Ensure it's behind all other content
                }}
            />

            {/* Hero Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '35%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                }}
                className="font-playfair text-6xl md:text-7xl text-white mb-4"
            >
                Kay Wijerathne
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                }}
                className="text-gray-300 text-xl md:text-2xl mb-8"
            >
                Software Engineer | Cybersecurity Specialist | Problem-Solver
            </motion.p>

            {/* Tech Stack Carousel */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '57%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                }}
                className="relative overflow-hidden py-24"
            >
                <motion.div
                    className="flex space-x-16"
                    initial={{ x: 0 }}
                    animate={{ x: '-50%' }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div key={`${logo.id}-${index}`} className="flex-none text-center">
                            {logo.component}
                            <p className="text-gray-300 mt-2 text-sm">{logo.label}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Bouncing Arrow */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
                className="cursor-pointer"
            >
                <ChevronDown className="text-[#FFFFFF] w-8 h-8 mx-auto" />
            </motion.div>
        </div>
    );
};

export default HeroSection;
