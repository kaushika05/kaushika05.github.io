import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
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

    return (
        <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#000' }}>
            {showInitialAnimation ? (
                <LandingAnimation onComplete={() => setShowInitialAnimation(false)} />
            ) : (
                <div className="min-h-screen text-white" style={{ position: 'relative' }}>
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
