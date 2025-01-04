import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HeroSection,
    Projects,
    Experience,
    Volunteer,
    Music,
    Gaming,
    Contact,
    Footer,
    Header,
} from './components/Sections';
import LandingAnimation from './components/LandingAnimation';

const App = () => {
    const [showInitialAnimation, setShowInitialAnimation] = useState(true);

    return (
        <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#000' }}>
            <AnimatePresence mode="wait">
                {showInitialAnimation ? (
                    <LandingAnimation key="landing" onComplete={() => setShowInitialAnimation(false)} />
                ) : (
                    <motion.div
                        key="main-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="min-h-screen text-white"
                        style={{ position: 'relative' }}
                    >
                        {/* Header */}
                        <Header />

                        {/* Hero Section */}
                        <HeroSection />

                        {/* Projects Section */}
                        <section id="projects" className="py-16">
                            <Projects />
                        </section>

                        {/* Experience Section */}
                        <section id="experience" className="py-16">
                            <Experience />
                        </section>

                        {/* Volunteer Section */}
                        <section id="volunteer" className="py-16">
                            <Volunteer />
                        </section>

                        {/* Music Section */}
                        <Music />

                        {/* Gaming Section */}
                        <section id="gaming" className="py-16">
                            <Gaming />
                        </section>

                        {/* Contact Section */}
                        <section id="contact" className="py-8">
                            <Contact />
                        </section>

                        {/* Footer */}
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default App;
