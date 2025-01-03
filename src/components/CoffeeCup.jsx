import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import throttle from 'lodash.throttle'; // Install lodash.throttle

const CoffeeCupScroll = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = throttle(() => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollTop / docHeight, 1); // Clamp between 0 and 1
            setScrollProgress(progress);
        }, 50); // Adjust the throttle interval as needed

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            className="fixed top-8 right-8"
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
                viewBox="0 0 400 400"
                className="w-24 h-24"
            >
                {/* SVG elements as before */}
                <rect x="150" y="150" width="100" height="150" fill="white" rx="10" />
                <motion.rect
                    x="155"
                    y={200 + scrollProgress * 90}
                    width="90"
                    height={(1 - scrollProgress) * 100}
                    fill="#6b4423"
                    initial={{ height: 100 }}
                    animate={{ height: (1 - scrollProgress) * 100 }}
                    transition={{ ease: 'linear' }}
                />
                <path
                    d="M250 175 C270 190, 270 260, 250 275"
                    fill="none"
                    stroke="white"
                    strokeWidth="5"
                />
                <path
                    d="M180 140 C180 120, 200 120, 200 100"
                    fill="none"
                    stroke="#cccccc"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M220 140 C220 120, 240 120, 240 100"
                    fill="none"
                    stroke="#cccccc"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </motion.div>
    );
};

export default CoffeeCupScroll;
