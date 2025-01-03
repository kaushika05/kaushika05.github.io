import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-scroll';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import {
    HeroSection,
    Projects,
    Experience,
    Volunteer,
    Music,
    Gaming,
    Contact,
    Footer,
    CoffeeCupScroll,
} from './components/Sections';
import LandingAnimation from './components/LandingAnimation';

const App = () => {
    const [showInitialAnimation, setShowInitialAnimation] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesOptions = {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: '#ffffff',
            },
            shape: {
                type: 'circle',
            },
            opacity: {
                value: 0.8,
            },
            size: {
                value: 2,
                random: true,
            },
            move: {
                enable: true,
                speed: 0.2,
                direction: 'none',
                random: true,
                straight: false,
                outModes: 'out',
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
                onClick: {
                    enable: true,
                    mode: 'push',
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                },
                push: {
                    quantity: 4,
                },
            },
        },
        detectRetina: true,
    };

    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            {/*
                1) A background gradient layer, absolutely positioned at zIndex: -1.
                   This ensures the gradient is behind everything else, including particles.
            */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    background: 'linear-gradient(to bottom, #0B132B, #1C2541)',
                }}
            />

            {/*
                2) The Particles component, positioned on top of the gradient, but
                   still below your main content (via zIndex: 0).
            */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />

            {/*
                3) Your main content, which sits above the particles (zIndex: 1 or higher).
                   Keep your existing structure, but ensure its container has a higher z-index.
            */}
            {showInitialAnimation ? (
                <LandingAnimation onComplete={() => setShowInitialAnimation(false)} />
            ) : (
                <div className="min-h-screen text-white" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Navigation */}
                    <nav
                        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                            isScrolled ? 'backdrop-blur-sm py-4' : 'py-6'
                        }`}
                    >
                        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                            {/* Logo */}
                            <div className="text-white font-playfair text-xl">KW</div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex gap-8">
                                {['Projects', 'Experience', 'Volunteer', 'Music', 'Gaming', 'Contact'].map(
                                    (item) => (
                                        <Link
                                            key={item}
                                            to={item.toLowerCase()}
                                            smooth={true}
                                            duration={500}
                                            className="text-white hover:text-gray-300 cursor-pointer transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    )
                                )}
                            </div>
                        </div>
                    </nav>

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

                    {/* Coffee Cup Scroll */}
                    <CoffeeCupScroll />
                </div>
            )}
        </div>
    );
};

export default App;
