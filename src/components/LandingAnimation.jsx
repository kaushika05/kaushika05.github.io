
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const LandingAnimation = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 1000),
            setTimeout(() => {
                setStep(2);
                onComplete(); // Trigger the onComplete callback
            }, 2500),
        ];
        return () => timers.forEach(clearTimeout); // Clear all timers on cleanup
    }, [onComplete]);

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-50">
            <AnimatePresence>
                {step === 0 && (
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-4xl text-white"
                    >
                        Hi.
                    </motion.h1>
                )}
                {step === 1 && (
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="text-4xl text-white"
                    >
                        Have a coffee with me.
                    </motion.h1>
                )}
            </AnimatePresence>
        </div>
    );
};

// PropTypes validation
LandingAnimation.propTypes = {
    onComplete: PropTypes.func.isRequired,
};

export default LandingAnimation;
