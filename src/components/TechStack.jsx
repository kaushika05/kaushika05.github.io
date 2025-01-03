/*
import { motion } from 'framer-motion';
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

const TechStackSection = () => {
    const techLogos = [
        { id: 1, component: <FaJava className="w-16 h-16 text-red-500" />, label: 'Java' },
        { id: 2, component: <FaPython className="w-16 h-16 text-blue-400" />, label: 'Python' },
        { id: 3, component: <SiFlutter className="w-16 h-16 text-blue-500" />, label: 'Flutter' },
        { id: 4, component: <FaNodeJs className="w-16 h-16 text-green-500" />, label: 'Node.js' },
        { id: 5, component: <FaReact className="w-16 h-16 text-cyan-400" />, label: 'React' },
        { id: 6, component: <SiRust className="w-16 h-16 text-orange-500" />, label: 'Rust' },
        { id: 7, component: <SiKubernetes className="w-16 h-16 text-blue-600" />, label: 'Kubernetes' },
        { id: 8, component: <SiSqlite className="w-16 h-16 text-gray-500" />, label: 'SQLite' },
        { id: 9, component: <FaAws className="w-16 h-16 text-yellow-600" />, label: 'AWS' },
        { id: 10, component: <SiFirebase className="w-16 h-16 text-yellow-400" />, label: 'Google Firebase' },
        { id: 11, component: <VscAzure className="w-16 h-16 text-blue-400" />, label: 'Azure' },
    ];

    const duplicatedLogos = [...techLogos, ...techLogos]; // Duplicate logos for a seamless loop

    return (
        <section className="bg-[#1C1C1C] py-16">
            <h2 className="text-4xl text-white text-center mb-8 font-playfair">
                My Tech Stack
            </h2>
            <div className="relative overflow-hidden">
                <motion.div
                    className="flex space-x-16" // Increase spacing between icons
                    initial={{ x: 0 }}
                    animate={{ x: '-50%' }} // Move halfway through the duplicated set
                    transition={{
                        duration: 40, // Double the duration for slower speed
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div key={`${logo.id}-${index}`} className="flex-none text-center">
                            {logo.component}
                            <p className="text-white mt-2 text-sm">{logo.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStackSection;
*/
