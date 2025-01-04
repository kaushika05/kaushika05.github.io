import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const LandingAnimation = ({ onComplete }) => {
    const [showFirstLine, setShowFirstLine] = useState(true);
    const [firstLineOpacity, setFirstLineOpacity] = useState(0);
    const [showSecondLine, setShowSecondLine] = useState(false);
    const [secondLineOpacity, setSecondLineOpacity] = useState(0);

    useEffect(() => {
        // First line animation sequence
        const firstLineFadeIn = setTimeout(() => setFirstLineOpacity(1), 0);
        const firstLineStay = setTimeout(() => setFirstLineOpacity(1), 1000);
        const firstLineFadeOut = setTimeout(() => {
            setFirstLineOpacity(0);
            setTimeout(() => setShowFirstLine(false), 1000);
        }, 2000);

        // Second line animation sequence
        const secondLineStart = setTimeout(() => {
            setShowSecondLine(true);
            setTimeout(() => setSecondLineOpacity(1), 100);
        }, 3000);
        const secondLineStay = setTimeout(() => setSecondLineOpacity(1), 4000);
        const secondLineFadeOut = setTimeout(() => {
            setSecondLineOpacity(0);
            setTimeout(() => {
                setShowSecondLine(false);
                onComplete();
            }, 1000);
        }, 5000);

        return () => {
            [
                firstLineFadeIn,
                firstLineStay,
                firstLineFadeOut,
                secondLineStart,
                secondLineStay,
                secondLineFadeOut
            ].forEach(clearTimeout);
        };
    }, [onComplete]);

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-50">
            {/*
          By using flex here AND removing `absolute` on the <h1>,
          each heading will be truly centered.
      */}
            <div className="relative w-full max-w-xl px-4 flex flex-col items-center justify-center">
                {showFirstLine && (
                    <motion.h1
                        className="text-4xl text-white text-center" // removed absolute & whitespace-nowrap
                        initial={{ opacity: 0 }}
                        animate={{ opacity: firstLineOpacity }}
                        transition={{ duration: 1 }}
                    >
                        Hi.
                    </motion.h1>
                )}
                {showSecondLine && (
                    <motion.h1
                        className="text-4xl text-white text-center mt-4" // removed absolute & whitespace-nowrap
                        initial={{ opacity: 0 }}
                        animate={{ opacity: secondLineOpacity }}
                        transition={{ duration: 1 }}
                    >
                        Have a coffee with me.
                    </motion.h1>
                )}
            </div>
        </div>
    );
};

LandingAnimation.propTypes = {
    onComplete: PropTypes.func.isRequired,
};

export default LandingAnimation;
