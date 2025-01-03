import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CoffeeCupScroll = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollTop / docHeight, 1); // Clamp between 0 and 1
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            className="fixed bottom-8 right-8"
            animate={{
                rotate: scrollProgress > 0 ? -10 : 0, // Slight tipping on scroll
            }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 150"
                className="w-16 h-16"
            >
                {/* Coffee cup outline */}
                <rect
                    x="20"
                    y="30"
                    width="60"
                    height="90"
                    fill="none" // Transparent inside
                    stroke="white" // White outline
                    strokeWidth="3"
                    rx="10"
                />
                {/* Coffee fill */}
                <motion.rect
                    x="23"
                    y={30 + scrollProgress * 90} // Adjust coffee to move down as progress increases
                    width="54"
                    height={(1 - scrollProgress) * 90} // Adjust height inversely to scroll progress
                    fill="#4B2E2E" // Dark brown coffee color
                    initial={{ height: 90 }}
                    animate={{ height: (1 - scrollProgress) * 90 }} // Smooth transition
                    transition={{ ease: 'linear' }}
                />
                {/* Handle */}
                <path
                    d="M80 50 C90 60, 90 90, 80 100"
                    fill="none"
                    stroke="white" // White handle
                    strokeWidth="3"
                />
            </svg>
        </motion.div>
    );
};

export default CoffeeCupScroll;
